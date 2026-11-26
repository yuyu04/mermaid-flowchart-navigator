const { Plugin, Modal, MarkdownView, FuzzySuggestModal, MarkdownRenderChild, MarkdownRenderer, Notice, editorInfoField } = require("obsidian");
const { ViewPlugin } = require("@codemirror/view");
const viewerTemplate = /* VIEWER_DOCUMENT */ null;
/* SOURCE_GEOMETRY */

function mermaidBlocks(markdown) {
  const lines=markdown.split(/\r?\n/), blocks=[];
  let fence=null, heading="";
  for(let i=0;i<lines.length;i++){
    if(!fence){
      const match=lines[i].match(/^\s{0,3}(\x60{3,}|~{3,})[ \t]*([^\s\x60~]*)[^\n]*$/);
      if(match)fence={marker:match[1][0],length:match[1].length,from:i,language:match[2].toLowerCase()};
      else {
        const title=lines[i].match(/^\s{0,3}#{1,6}\s+(.+?)\s*#*\s*$/);
        if(title)heading=title[1].normalize("NFC");
      }
    }else{
      const close=lines[i].trim();
      if(close.length<fence.length || [...close].some(char=>char!==fence.marker))continue;
      if(["mermaid","mermaid-flow"].includes(fence.language)){
        blocks.push({from:fence.from,to:i,language:fence.language,heading,code:lines.slice(fence.from+1,i).join("\n")});
      }
      fence=null;
    }
  }
  return blocks;
}
function makeFrame(parent,code,mode,presentation) {
  const frame=parent.createEl("iframe",{cls:"mermaid-flow-frame",attr:{title:"인터랙티브 Mermaid 순서도",sandbox:"allow-scripts",referrerpolicy:"no-referrer"}});
  const source=JSON.stringify(presentation?{source:code,presentation}:code||"").replace(/</g,"\\u003c").replace(/&/g,"\\u0026");
  frame.srcdoc=viewerTemplate.replace('data-presentation="standalone"','data-presentation="'+mode+'"')
    .replace('id="tsf-initial">""',()=> 'id="tsf-initial">'+source);
  return frame;
}
class InlineFlow extends MarkdownRenderChild {
  constructor(el,code,presentation,onInvalid){super(el);Object.assign(this,{code,presentation,onInvalid});}
  onload(){
    const frame=makeFrame(this.containerEl,this.code,"inline",this.presentation);
    const win=frame.ownerDocument.defaultView;
    const pane=frame.closest(".workspace-leaf-content")||frame.ownerDocument.documentElement;
    let lastPane=0;
    const notifyPane=()=>{
      const height=Math.min(win.innerHeight,pane.clientHeight||win.innerHeight);
      if(height!==lastPane){lastPane=height;frame.contentWindow?.postMessage({type:"mermaid-flow-viewer:pane",height},"*");}
    };
    this.registerDomEvent(frame,"load",()=>{lastPane=0;notifyPane();});
    const sizing=new win.ResizeObserver(notifyPane);sizing.observe(pane);this.register(()=>sizing.disconnect());
    this.registerDomEvent(frame.ownerDocument.defaultView,"message",event=>{
      if(event.source!==frame.contentWindow || event.data?.type!=="mermaid-flow-viewer:size")return;
      const height=event.data.height;
      if(event.data.invalid && this.onInvalid){this.onInvalid();return;}
      if(Number.isFinite(height) && height>0)frame.style.height=Math.ceil(height)+"px";
    });
    this.register(()=>frame.remove());
  }
}
// A per-vault selection can enhance a regular Mermaid fence without editing its source.
const mermaidHost = ".block-language-mermaid, .mermaid, pre:has(> code.language-mermaid)";
function mermaidHosts(section) {
  const matches = section.matches(mermaidHost) ? [section] : [...section.querySelectorAll(mermaidHost)];
  return matches.filter(host => !matches.some(other => other !== host && other.contains(host)));
}
const flatText = value => value.normalize("NFC").replace(/<br\s*\/?>|\s+/gi,"");
function ordinaryFlow(code){
  return /^(?:graph|flowchart(?:-elk)?)(?=\s|;|$)/i.test(code.trim()
    .replace(/^---[^\n]*\n[\s\S]*?\n---\s*/,"").replace(/%%\{[\s\S]*?\}%%|^\s*%%[^\n]*$/gm,"").trim());
}
function matchingBlocks(source,wholeNote,rules,labels){
  const all=mermaidBlocks(source).filter(block=>block.language==="mermaid");
  const selected=all.filter(b=>ordinaryFlow(b.code)).flatMap(b=>{
    const rule=rules.find(r=>r.heading.normalize("NFC")===b.heading);
    if(!wholeNote && !rule)return [];
    const presentation={...rule?.presentation,labels:{...labels,...rule?.presentation?.labels}};
    return [{...b,search:flatText(b.code),presentation}];
  });
  return {all,selected};
}
class SelectedFlow extends MarkdownRenderChild {
  constructor(section, slot, block) {
    super(section);
    this.slot = slot;
    this.block = block;
  }
  onload(){
    const section = this.containerEl;
    const doc = section.ownerDocument, mount = doc.createElement("div");
    mount.className="mermaid-flow-selected";
    mount.dataset.flowHeading=this.block.heading;
    let original;
    // On startup Obsidian can replace the fenced <pre> after running postprocessors.
    // Anchor both observers to the note section and mount only beside the finished SVG.
    const replace = () => {
      const current = mermaidHosts(section)[this.slot];
      const svg = current?.matches("svg") ? current : current?.querySelector("svg");
      if (!svg) return;
      rendering.disconnect();
      const type = svg.getAttribute("aria-roledescription");
      if (type && !/^(flowchart|graph)\b/i.test(type)) return;
      original = current;
      const sourceCenters = mermaidNodeCenters(svg);
      if(original.parentElement){original.after(mount);original.classList.add("mermaid-flow-replaced");}
      else {original.append(mount);original.classList.add("mermaid-flow-container");}
      this.addChild(new InlineFlow(mount,this.block.code,{...this.block.presentation,sourceCenters},()=>{
        mount.hidden=true;original.classList.remove("mermaid-flow-replaced","mermaid-flow-container");
      }));
    };
    const rendering = new doc.defaultView.MutationObserver(replace);
    const observer=new doc.defaultView.IntersectionObserver(entries=>{
      if (entries.some(entry => entry.isIntersecting)) {
        observer.disconnect();
        rendering.observe(section, {childList: true, subtree: true});
        replace();
      }
    },{rootMargin:"360px 0px"});
    observer.observe(section);
    this.register(() => {
      observer.disconnect();
      rendering.disconnect();
      mount.remove();
      original?.classList.remove("mermaid-flow-replaced","mermaid-flow-container");
    });
  }
}
// Live Preview renders built-in Mermaid widgets outside the Markdown postprocessor.
// Match each visible widget to the opening fence in the current editor document.
class LiveFlowcharts {
  constructor(view, plugin) {
    this.view = view;
    this.plugin = plugin;
    this.mounted = new Map();
    this.win = view.dom.ownerDocument.defaultView;
    this.observer = new this.win.MutationObserver(records => {
      const hasWidget = node => node.nodeType === 1 &&
        (node.matches(".cm-lang-mermaid") || node.querySelector(".cm-lang-mermaid"));
      if (records.some(r => [...r.addedNodes, ...r.removedNodes].some(hasWidget))) this.schedule();
    });
    this.observer.observe(view.contentDOM, {childList: true, subtree: true});
    this.schedule();
  }
  schedule() {
    if (this.frame) return;
    this.frame = this.win.requestAnimationFrame(() => { this.frame = 0; this.sync(); });
  }
  update(update) {
    if (update.docChanged || update.viewportChanged) this.schedule();
  }
  sync() {
    const {view, plugin} = this;
    const widgets = new Set(view.contentDOM.querySelectorAll(".cm-lang-mermaid"));
    const path = view.state.field(editorInfoField, false)?.file?.path?.normalize("NFC");
    for (const [widget, entry] of this.mounted) {
      if (!widgets.has(widget) || entry.path !== path) {
        entry.child.unload();
        this.mounted.delete(widget);
      }
    }
    if (!path || !widgets.size) return;
    if (this.doc !== view.state.doc || this.path !== path) {
      this.doc = view.state.doc;
      this.path = path;
      const {selected} = matchingBlocks(this.doc.toString(), plugin.allFlowcharts, plugin.selections.get(path) || [], plugin.labels);
      this.byLine = new Map(selected.map(block => [block.from, block]));
    }
    for (const widget of widgets) {
      const line = this.doc.lineAt(view.posAtDOM(widget)).number - 1;
      const block = this.byLine.get(line), existing = this.mounted.get(widget);
      if (existing && block && existing.block.code === block.code && existing.block.heading === block.heading) continue;
      if (existing) {
        existing.child.unload();
        this.mounted.delete(widget);
      }
      if (block) {
        const child = new SelectedFlow(widget, 0, block);
        this.mounted.set(widget, {child, block, path});
        child.load();
      }
    }
  }
  destroy() {
    this.win.cancelAnimationFrame(this.frame);
    this.observer.disconnect();
    for (const {child} of this.mounted.values()) child.unload();
    this.mounted.clear();
  }
}
class FlowModal extends Modal {
  constructor(app,code){super(app);this.code=code;}
  onOpen(){this.modalEl.addClass("mermaid-flow-modal");this.titleEl.setText("Mermaid Flowchart Navigator");makeFrame(this.contentEl,this.code,"modal");}
  onClose(){this.contentEl.empty();}
}
class BlockPicker extends FuzzySuggestModal {
  constructor(app,blocks){super(app);this.blocks=blocks;this.setPlaceholder("열 Mermaid 블록을 선택하세요");}
  getItems(){return this.blocks;}
  getItemText(item){return (item.from+1)+"행 · "+item.code.split("\n").filter(Boolean).slice(0,2).join(" / ").slice(0,100);}
  onChooseItem(item){new FlowModal(this.app,item.code).open();}
}
module.exports=class MermaidFlowchartNavigator extends Plugin {
  async onload(){
    const settings=await this.loadData();
    this.selections=new Map();
    this.allFlowcharts=settings?.allFlowcharts!==false;
    this.labels=settings?.flowchartLabels||{};
    this.attached=new WeakMap();
    this.liveBlocks=new Set();
    this.isActive=true;
    this.register(()=>{this.isActive=false;for(const child of this.liveBlocks)child.unload();this.liveBlocks.clear();});
    this.noteCache=new Map();
    for(const rule of Array.isArray(settings?.inlineSections)?settings.inlineSections:[]){
      if(typeof rule.path!=="string" || typeof rule.heading!=="string" || !["flowchart","graph"].includes(rule.diagram))continue;
      const key=rule.path.normalize("NFC");
      if(!this.selections.has(key))this.selections.set(key,[]);
      this.selections.get(key).push(rule);
    }
    this.registerMarkdownPostProcessor((el,ctx)=>this.renderSelected(el,ctx),1000);
    this.registerEditorExtension(ViewPlugin.define(view => new LiveFlowcharts(view, this)));
    this.registerMarkdownCodeBlockProcessor("mermaid-flow",(source,el,ctx)=>{
      if(ordinaryFlow(source))return ctx.addChild(new InlineFlow(el,source,{labels:this.labels}));
      const fence="~".repeat(Math.max(3,...Array.from(source.matchAll(/^\s*(~+)/gm),m=>m[1].length+1)));
      const component=new MarkdownRenderChild(el);ctx.addChild(component);
      return MarkdownRenderer.render(this.app,fence+"mermaid\n"+source+"\n"+fence,el,ctx.sourcePath,component);
    });
    this.addCommand({id:"open-viewer",name:"Mermaid 흐름 뷰어 열기",callback:async()=>{
      const view=this.app.workspace.getActiveViewOfType(MarkdownView),editor=view?.editor;
      const selected=view?.getMode()==="source"?editor?.getSelection().trim():"";
      if(selected && ordinaryFlow(mermaidBlocks(selected)[0]?.code||selected)){new FlowModal(this.app,selected).open();return;}
      const file=view?.file||this.app.workspace.getActiveFile();
      const useEditor=view?.getMode()==="source" && editor;
      const markdown=useEditor?editor.getValue():(file?.extension==="md"?await this.app.vault.cachedRead(file):"");
      const all=mermaidBlocks(markdown),blocks=all.filter(b=>ordinaryFlow(b.code));
      const line=useEditor?editor.getCursor().line:-1;
      const here=all.find(b=>b.from<=line && line<=b.to);
      if(here && !ordinaryFlow(here.code)){new Notice("이 도표는 Obsidian 기본 Mermaid 보기로 표시합니다.");return;}
      if(here || blocks.length<=1)new FlowModal(this.app,here?.code||blocks[0]?.code||"").open();
      else new BlockPicker(this.app,blocks).open();
    }});
  }
  async renderSelected(el,ctx){
    if (el.closest(".cm-lang-mermaid")) return;
    const key=ctx.sourcePath.normalize("NFC"),wholeNote=this.allFlowcharts;
    const rules=this.selections.get(key)||[];
    if(!wholeNote && !rules.length)return;
    const hosts=mermaidHosts(el);
    if(!hosts.length)return;
    // The source element may already be detached by the time the note finishes reading.
    const anchors = hosts.map(host => {
      const section = host.closest(".el-pre") || (el === host ? host.parentElement : el) || el;
      return {section, slot: mermaidHosts(section).indexOf(host)};
    });
    const file=this.app.vault.getAbstractFileByPath(ctx.sourcePath);
    if(!file?.stat)return;
    const cached=this.noteCache.get(key);
    if(!cached || cached.mtime!==file.stat.mtime){
      const data=this.app.vault.cachedRead(file).then(source=>matchingBlocks(source,wholeNote,rules,this.labels));
      this.noteCache.set(key,{mtime:file.stat.mtime,data});
    }
    const {all,selected}=await this.noteCache.get(key).data;
    if(!this.isActive)return;
    hosts.forEach((host,index)=>{
      const {section, slot} = anchors[index];
      if (slot < 0 || this.attached.get(section)?.has(slot)) return;
      if(/^sequence/i.test(host.querySelector("svg")?.getAttribute("aria-roledescription")||""))return;
      const info=ctx.getSectionInfo(host)||ctx.getSectionInfo(el);
      let pick=null;
      if(info){
        const inRange=all.filter(b=>b.from>=info.lineStart && b.to<=info.lineEnd);
        if(inRange.length===1)pick=selected.find(b=>b.from===inRange[0].from);
        else if(inRange.length===hosts.length)pick=selected.find(b=>b.from===inRange[index].from);
        if(inRange.length && !pick)return;
      }
      if(!pick){
        const text=flatText(host.textContent||"");
        const labels=[...host.querySelectorAll("g.node .nodeLabel, g.node .label text, g.pele-node .pele-label")]
          .map(node=>flatText(node.textContent||"")).filter(Boolean);
        const matches=selected.filter(b=>text===b.search || labels.length && labels.every(label=>b.search.includes(label)));
        if(matches.length && matches.every(b=>b.code===matches[0].code))pick=matches[0];
      }
      if(pick){
        const slots = this.attached.get(section) || new Set();
        this.attached.set(section, slots);
        slots.add(slot);
        const child=new SelectedFlow(section,slot,pick);
        this.liveBlocks.add(child);
        child.register(()=>{slots.delete(slot);this.liveBlocks.delete(child);});
        ctx.addChild(child);
      }
    });
  }
};
