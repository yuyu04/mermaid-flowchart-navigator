// The two bundled Mermaid grammars produce data only. All labels are rendered as text.
const editor = root.querySelector(".tsf-import");
const field = editor.querySelector("textarea");
const errorLine = editor.querySelector(".tsf-error");
let imported = null;
let importedSelection = null;
function plain(value) {
  const raw = (value && typeof value === "object" ? value.text : value) ?? "";
  return String(raw).replace(/<br\s*\/?>/gi," ").replace(/<\/?(?:b|i|strong|em|p)>/gi," ")
    .replace(/#(lt|gt|quot|amp);|&(lt|gt|quot|amp);/g,(_,a,b)=>({lt:"<",gt:">",quot:'"',amp:"&"})[a||b])
    .replace(/\s+/gu," ").trim();
}
function shortText(str, limit=15) {
  let width=0, out="";
  for (const ch of str) {
    width += /[^\u0000-\u00ff]/u.test(ch) ? 1 : .59;
    if (width>limit) return out.trimEnd()+"…";
    out+=ch;
  }
  return out;
}
function meaning(label, classes = []) {
  const c=classes.join(" ").toLowerCase();
  if (/\b(unknown|indeterminate|inconclusive)\b/.test(c)) return "indeterminate";
  if (/\b(fail|failed|failure|violation)\b/.test(c)) return "failure";
  if (/\b(pass|success|satisfied)\b/.test(c)) return "success";
  if (/불충분|판정 불가|미관측|자료 부족|inconclusive|insufficient|unknown/i.test(label)) return "indeterminate";
  if (/위반 근거 확인|위반 확인|실패|취약 확인|(?:^|[:：]\s*)결함$|^(?:fail(?:ed|ure)?|violation)$/i.test(label)) return "failure";
  if (/범위 내 충족|^(?:성공|충족|통과|pass(?:ed)?|success)$/i.test(label)) return "success";
  return null;
}
function cleanCode(value) {
  let src=value.replace(/^\uFEFF/,"").trim();
  const fenced=src.match(/^(\x60{3,}|~{3,})(?:mermaid(?:-flow)?)?\s*\n([\s\S]*?)\n\1\s*$/i);
  if(fenced) src=fenced[2];
  return src.replace(/^---\s*\n[\s\S]*?\n---\s*(?:\n|$)/,"").replace(/%%\{[\s\S]*?\}%%/g,"").replace(/^\s*%%[^\n]*$/gm,"").trim();
}
function flowData(src) {
  const vertices=new Map(), links=[], groups=new Set(), notes=new Set();
  let dir="TB", firstGraph=true;
  const get=id=>{
    if(!vertices.has(id)) vertices.set(id,{ id, label:id, type:"square", classes:[], description:"" });
    return vertices.get(id);
  };
  const ignore=()=>{};
  const grammar=new mermaidGrammars.flow.Parser();
  grammar.yy={
    lex:{firstGraph:()=>{const first=firstGraph;firstGraph=false;return first;}},
    setDirection:d=>{dir=String(d).trim().toUpperCase();}, addClass:ignore, updateLink:ignore, updateLinkInterpolate:ignore,
    setClickEvent:ignore, setLink:ignore, setAccTitle:ignore, setAccDescription:ignore,
    setTooltip:(id,tip)=>{get(id).description=plain(tip);},
    addSubGraph:(name,_members,title)=>{
      const id=plain(name)||plain(title);
      if(id)groups.add(id);
      notes.add("하위 그룹의 내부 연결을 표시합니다.");
      return id;
    },
    setClass:(ids,cls)=>{for(const id of String(ids).split(","))get(id).classes.push(String(cls));},
    addVertex:(id,text,type,_style,classes,_dir,_props,metadata)=>{
      const v=get(id);
      if(text!==undefined) v.label=plain(text)||id;
      if(type) v.type=type;
      if(classes) v.classes.push(...classes);
      if(metadata) {
        const shape=String(metadata).match(/\bshape\s*:\s*["']?([\w-]+)/i);
        const label=String(metadata).match(/\blabel\s*:\s*(?:"([^"]*)"|'([^']*)'|([^,}\n]+))/);
        if(shape)v.type=shape[1];
        if(label)v.label=plain(label[1]??label[2]??label[3]);
      }
    },
    destructLink:(end,start="")=>{const a=start.trim(), b=end.trim();return {type:/^</.test(a||b)?"both":b.endsWith(">")?"forward":"plain",stroke:b.includes("~")?"invisible":"normal",length:1};},
    addLink:(from,to,data)=>{
      if(data.stroke==="invisible") return;
      if(data.type==="plain") throw Error("방향이 없는 연결이나 특수 끝점은 방향 순서도로 바꿀 수 없습니다. 해당 연결의 화살표 방향을 지정해 주세요.");
      const label=plain(data.text);
      const caption=plain(String(data.text?.text??data.text??"").split(/<br\s*\/?>|\n/i)[0]);
      for(const a of from) for(const b of to) {
        links.push({from:a,to:b,label,caption});
        if(data.type==="both")links.push({from:b,to:a,label,caption});
      }
    }
  };
  grammar.parse(src.replace(/}\s*\n/g,"}\n")+"\n");
  if(links.some(e=>groups.has(e.from)||groups.has(e.to)))throw Error("그룹 자체를 가리키는 연결이 있습니다. 그룹 안의 시작 또는 끝 도형을 지정해 주세요.");
  // Styles can register a subgraph as a vertex, even before the group is declared.
  for(const id of groups)vertices.delete(id);
  const arriving=new Set(links.map(e=>e.to)), departing=new Set(links.map(e=>e.from));
  for (const v of vertices.values()) {
    const terminal=["stadium","terminal","terminal-point","stadium-end","start","stop","end","sm-circ","dbl-circ"].includes(v.type);
    const verdict=v.label.split(/\s*\(/)[0];
    const result=meaning(verdict,v.classes) || (/^결과\s*[:：]/.test(verdict)?(/위반 근거$/.test(verdict)?"failure":"indeterminate"):null);
    if(["diamond","diam","decision","question"].includes(v.type)) v.kind="decision";
    else if(["lean_right","lean_left","lean-r","lean-l","in-out","out-in","input","output"].includes(v.type))v.kind="io";
    else if(terminal || /^결과\s*[:：]/.test(verdict) || !departing.has(v.id) && result) {
      const start=!arriving.has(v.id) && !result;
      v.kind=result || (start?"start":"indeterminate");
    } else v.kind="process";
  }
  return {vertices, links,dir,notes:[...notes],title:"Mermaid 순서도"};
}
function sequenceData(src) {
  const grammar=new mermaidGrammars.sequence.Parser(), events=[], names=new Map(), vertices=new Map(),links=[],stack=[];
  const identity=x=>x;
  const tokens=new Proxy({}, {get:(_obj,key)=>key});
  let title="Mermaid 시퀀스", tails=[], serial=0;
  grammar.yy={ LINETYPE:tokens, PLACEMENT:tokens, parseMessage:x=>({text:plain(x)}),parseBoxData:identity,
    setAccTitle:()=>{},setAccDescription:()=>{},setDiagramTitle:x=>{title=plain(x)||title;},
    apply:value=>{for(const item of [value].flat(Infinity)) if(item?.type) events.push(item);}
  };
  grammar.parse(src+"\n");
  for(const e of events)if(e.type==="addParticipant" && e.description)names.set(e.actor,plain(e.description));
  const actor=id=>names.get(id)||id;
  function add(kind,label,description="") {
    const id="s"+serial++;
    vertices.set(id,{id,kind,label,description});
    for(const previous of tails)links.push({from:previous.id,to:id,label:previous.label||""});
    tails=[{id}];return id;
  }
  add("start","시작","시퀀스의 첫 메시지로 이동합니다.");
  for(const ev of events){
    const type=ev.type;
    if(type==="addMessage"){
      const text=plain(ev.msg)||"메시지";
      const direction=String(ev.signalType).includes("BIDIRECTIONAL")?" ↔ ":" → ";
      add("io",text,actor(ev.from)+direction+actor(ev.to)+" · "+text);
    } else if(type==="addNote"){
      const text=plain(ev.text)||"메모";
      const result=text.match(/(?:결과|판정)\s*[:：]\s*(.+)$/);
      const subject=[ev.actor].flat().map(actor).filter(Boolean).join(" · ");
      add(result && meaning(result[1]) || "io",result ? result[1] : text,subject+" · "+text);
    } else if(type==="altStart" || type==="optStart" || type==="loopStart"){
      const condition=plain(ev.altText||ev.optText||ev.loopText)||"조건 확인";
      const id=add("decision",condition,condition);
      stack.push({id,type,ends:[]});tails=[{id,label:"예"}];
    } else if(type==="else"){
      const frame=stack.at(-1);frame.ends.push(...tails);tails=[{id:frame.id,label:plain(ev.altText)||"아니오"}];
    } else if(type==="altEnd" || type==="optEnd"){
      const frame=stack.pop();tails=[...frame.ends,...tails];
      if(type==="optEnd" || !frame.ends.length)tails.push({id:frame.id,label:"아니오"});
    } else if(type==="loopEnd"){
      const frame=stack.pop();
      for(const t of tails)if(t.id!==frame.id)links.push({from:t.id,to:frame.id,label:"반복"});
      tails=[{id:frame.id,label:"종료"}];
    } else if(type==="parStart"){
      const id=add("process","병렬 시작","각 갈래는 동시에 진행되는 작업입니다.");
      stack.push({id,type,ends:[]});tails=[{id,label:plain(ev.parText)||"병렬 작업"}];
    } else if(type==="and"){
      const frame=stack.at(-1);frame.ends.push(...tails);tails=[{id:frame.id,label:plain(ev.parText)||"병렬 작업"}];
    } else if(type==="parEnd"){
      const frame=stack.pop();tails=[...frame.ends,...tails];add("process","병렬 합류","모든 병렬 작업이 끝난 뒤 다음 메시지로 이어집니다.");
    } else if(["criticalStart","breakStart"].includes(type)) {
      const label={criticalStart:"critical",breakStart:"break"}[type];
      throw Error("시퀀스의 "+label+" 블록은 현재 이 보기에서 변환할 수 없습니다.");
    } else if(type==="createParticipant" || type==="destroyParticipant"){
      add("process",actor(ev.actor)+(type==="createParticipant"?" 생성":" 종료"));
    }
  }
  if(vertices.size===1)throw Error("표시할 메시지나 조건이 없습니다.");
  tails=tails.filter(t=>!["success","failure","indeterminate"].includes(vertices.get(t.id).kind));
  if(tails.length)add("indeterminate","종료","메시지 순서가 끝났습니다. 별도 판정이 지정되지 않았습니다.");
  return {vertices,links,dir:"TB",title,notes:[]};
}
function compileMermaid(source,presentation={}) {
  const code=cleanCode(source);
  if(!code)throw Error("Mermaid 코드를 붙여 넣어 주세요.");
  let data;
  const isFlow=/^(?:graph|flowchart(?:-elk)?)\b/i.test(code);
  if(isFlow)data=flowData(code);
  else if(/^sequenceDiagram\b/.test(code))data=sequenceData(code);
  else throw Error("flowchart, graph 또는 sequenceDiagram으로 시작하는 코드를 사용할 수 있습니다.");
  if(!data.vertices.size)throw Error("표시할 도형이 없습니다.");
  const ids=new Map(), merged=new Map(), nodes=Object.create(null), edges=[], seen=new Set();
  const departing=new Set(data.links.map(e=>e.from));let count=0;
  const canvas=document.createElement("canvas").getContext("2d");
  canvas.font='750 18px "Apple SD Gothic Neo","Malgun Gothic",system-ui,sans-serif';
  for(const v of data.vertices.values()) {
    const share=!isFlow && ["success","failure","indeterminate"].includes(v.kind) && !departing.has(v.id);
    const key=v.kind+"|"+v.label;
    if(share && merged.has(key)){ids.set(v.id,merged.get(key));continue;}
    const id="v"+count++;ids.set(v.id,id);
    if(share)merged.set(key,id);
    const clean=v.label.replace(/^(?:결과|다음 단계)\s*[:：]\s*|^#Q\d+[a-z]?\s+/i,"");
    const qualifier=clean.match(/^([^()]+?)\s*\(([^()]{1,12})\)$/);
    const text=presentation.labels?.[v.label] || (qualifier && /^결과\s*[:：]/.test(v.label)
      ?qualifier[1].trim()+" · "+qualifier[2]:clean.split(/\s+\(/)[0]);
    const reference=v.label.match(/^#(Q\d+[a-z]?)\s+/i)?.[1];
    const label=(reference?reference+" · ":"")+shortText(text,14), tw=canvas.measureText(label).width;
    const w=Math.ceil(v.kind==="decision"?Math.max(164,tw*1.55+46):Math.max(96,tw+(v.kind==="io"?45:34)));
    nodes[id]=node(v.kind,label,0,0,w,v.kind==="decision"?86:52,v.label,v.description||v.label);
    // The shape caption is shortened to fit; detail popovers show the whole name.
    nodes[id].sourceId=v.id;nodes[id].fullLabel=(reference?reference+" · ":"")+text;
  }
  for(const raw of data.links){
    const from=ids.get(raw.from),to=ids.get(raw.to),key=JSON.stringify([from,to,raw.label]);
    if(!from||!to)throw Error("연결의 시작 또는 끝 도형을 찾을 수 없습니다.");
    if(from===to)throw Error("‘"+nodes[from].title+"’에 자기 자신으로 돌아오는 선이 있습니다. 이 선에는 직각이 두 번 이상 필요합니다.");
    if(seen.has(key))continue;seen.add(key);
    const id="e"+edges.length,e=edge(id,from,"S",to,"N",id,shortText(raw.caption||raw.label,7));
    e.fullLabel=raw.label;edges.push(e);
  }
  const graph={title:presentation.title||data.title,nodes,edges,dir:data.dir,notes:data.notes,flow:isFlow,
    layoutMode:layoutSelect.value,sourceCenters:presentation.sourceCenters};
  autoLayout(graph);
  for(const [id,n] of Object.entries(nodes)){
    if(n.description!==n.title)continue;
    const before=graph.incoming.get(id),after=graph.outgoing.get(id);
    const adjacent=before.length ? before : after;
    const names=adjacent.slice(0,3).map(e=>{const m=nodes[before.length?e.from:e.to];return m.fullLabel||m.label;});
    if(names.length)n.description=(before.length?"앞 단계 · ":"다음 단계 · ")+names.join(", ")+(adjacent.length>3?" 외 "+(adjacent.length-3)+"개":"");
  }
  return graph;
}
function autoLayout(graph) {
  const ids=Object.keys(graph.nodes), incoming=new Map(ids.map(id=>[id,[]])),outgoing=new Map(ids.map(id=>[id,[]]));
  for(const e of graph.edges){outgoing.get(e.from).push(e);incoming.get(e.to).push(e);}
  const roots=ids.filter(id=>!incoming.get(id).length), queue=[...roots], rank=new Map(ids.map(id=>[id,0]));
  const remaining=new Map(ids.map(id=>[id,incoming.get(id).length]));
  for(let i=0;i<queue.length;i++) for(const e of outgoing.get(queue[i])){
    rank.set(e.to,Math.max(rank.get(e.to),rank.get(e.from)+1));
    remaining.set(e.to,remaining.get(e.to)-1);
    if(!remaining.get(e.to))queue.push(e.to);
  }
  const cycle=queue.length<ids.length;
  graph.roots=roots.length?roots:[ids[0]];graph.incoming=incoming;graph.outgoing=outgoing;
  const horizontal=!graph.flow && ["LR","RL"].includes(graph.dir), reverse=!graph.flow && ["BT","RL"].includes(graph.dir);
  const maxW=ids.reduce((m,id)=>Math.max(m,graph.nodes[id].w),0), rows=[];
  if(!cycle)for(const id of ids){const level=rank.get(id);(rows[level]??=[]).push(id);}
  function arrange(diagonal){
    const levels=diagonal?ids.map(id=>[id]):rows;
    const laneCount=diagonal?ids.length:levels.reduce((m,r)=>Math.max(m,r.length),1);
    let crossStep=horizontal?98:140;
    for(const row of levels)for(let i=1;i<row.length;i++){
      const a=graph.nodes[row[i-1]],b=graph.nodes[row[i]];
      crossStep=Math.max(crossStep,horizontal?(a.h+b.h)/2+44:(a.w+b.w)/2+54);
    }
    const cxStep=horizontal||diagonal?maxW+60:crossStep, cyStep=horizontal&&!diagonal?crossStep:123;
    for(let i=0;i<levels.length;i++){
      const r=levels[i], depth=reverse?levels.length-i-1:i;
      r.forEach((id,j)=>{
        const lane=diagonal?i:(laneCount-r.length)/2+j, n=graph.nodes[id];
        n.x=36+maxW/2+(horizontal?depth:lane)*cxStep;
        n.y=55+(horizontal?lane:depth)*cyStep;
      });
    }
    let minX=Infinity,minY=Infinity,maxX=0,maxY=0;
    for(const n of Object.values(graph.nodes)){
      minX=Math.min(minX,n.x-n.w/2);minY=Math.min(minY,n.y-n.h/2);
      maxX=Math.max(maxX,n.x+n.w/2);maxY=Math.max(maxY,n.y+n.h/2);
    }
    graph.width=Math.max(344,Math.ceil(maxX-minX+56));graph.height=Math.max(160,Math.ceil(maxY-minY+46));
    const left=(graph.width-(maxX-minX))/2,top=(graph.height-(maxY-minY))/2;
    for(const n of Object.values(graph.nodes)){n.x+=left-minX;n.y+=top-minY;}
  }
  function route(subset=graph.edges,used=new Map()){
    const list=Object.values(graph.nodes);
    for(const e of subset){
      const from=graph.nodes[e.from],to=graph.nodes[e.to], dx=Math.sign(to.x-from.x),dy=Math.sign(to.y-from.y);
      const sx=dx<0?"W":"E",sy=dy<0?"N":"S",tx=dx<0?"E":"W",ty=dy<0?"S":"N";
      const options= !dx?[[sy,ty]]:!dy?[[sx,tx]]:[[sx,ty],[sy,tx]];
      let best=null;
      for(const [out,into] of options){
        if(from.kind==="decision" && out==="N")continue;
        const offsets=to.kind==="decision"?[0]:[0,-14,14,-22,22];
        for(const slot of offsets){
          if(slot && (options.length===1 || into==="W" || into==="E"))continue;
          const test={...e,out,into,slot}, pts=pointsFor(test,graph);
          const first=pts[0],next=pts[1],last=pts.at(-1),prev=pts.at(-2);
          const a=normals[out],b=normals[into];
          if((next[0]-first[0])*a[0]+(next[1]-first[1])*a[1]<=0 || (prev[0]-last[0])*b[0]+(prev[1]-last[1])*b[1]<9)continue;
          const blocked=pts.slice(1).some((end,j)=>list.some(n=>{
            if(n===from||n===to)return false;
            const start=pts[j],left=n.x-n.w/2-4,right=n.x+n.w/2+4,top=n.y-n.h/2-4,bottom=n.y+n.h/2+4;
            return Math.max(start[0],end[0])>left && Math.min(start[0],end[0])<right && Math.max(start[1],end[1])>top && Math.min(start[1],end[1])<bottom;
          }));
          if(blocked)continue;
          const exit=e.from+out,entry=e.to+into+slot;
          const cost=(used.get(exit)||0)*6+(used.get(entry)||0)*9+Math.abs(slot)/10;
          if(!best||cost<best.cost)best={out,into,slot,cost,exit,entry};
        }
      }
      if(!best)return false;
      Object.assign(e,{out:best.out,into:best.into,slot:best.slot});
      for(const key of [best.exit,best.entry])used.set(key,(used.get(key)||0)+1);
    }
    return true;
  }
  const available=Math.floor(viewport.clientWidth)||680;
  if(graph.flow){
    if(!positionFlow(graph,available,cycle))layOutHierarchy(graph,available);
  }else{
    arrange(cycle);
    if(!route()){arrange(true);if(!route())throw Error("도형을 겹치지 않게 배치할 수 없습니다. 긴 교차 연결을 중간 단계로 나눠 주세요.");}
  }
  const parents=new Map(), pending=[...graph.roots];for(const id of pending)parents.set(id,null);
  function visit(start){for(let i=start;i<pending.length;i++)for(const e of outgoing.get(pending[i]))if(!parents.has(e.to)){parents.set(e.to,e);pending.push(e.to);}}
  visit(0);
  for(const id of ids)if(!parents.has(id)){const start=pending.length;pending.push(id);parents.set(id,null);visit(start);}
  graph.parents=parents;graph.byEdge=new Map(graph.edges.map(e=>[e.id,e]));
}
function customPath(target) {
  const existing=importedSelection?.multiple?[]:importedSelection?.path||[];
  const pos=existing.findIndex(id=>imported.byEdge.get(id)?.to===target);
  if(pos!==-1)return existing.slice(0,pos+1);
  const reverse=[];let current=target;
  while(imported.parents.get(current)){const e=imported.parents.get(current);reverse.push(e.id);current=e.from;}
  return reverse.reverse();
}
function selectImported(id, lastEdge) {
  const n=imported.nodes[id],incoming=imported.incoming.get(id);
  if(!lastEdge && incoming.length>1 && (importedSelection?.multiple || !importedSelection?.path.some(key=>imported.byEdge.get(key).to===id))){
    const paths=new Set();
    for(const e of incoming){for(const key of customPath(e.from))paths.add(key);paths.add(e.id);}
    importedSelection={path:[...paths],node:id,title:n.title,text:"들어오는 연결 "+incoming.length+"개를 표시했습니다. 살펴볼 경로를 선택하세요.",multiple:true};
    return;
  }
  let path=lastEdge?[...customPath(lastEdge.from),lastEdge.id]:customPath(id);
  if(!lastEdge && !path.length && imported.outgoing.get(id).length===1)path=[imported.outgoing.get(id)[0].id];
  importedSelection={path,node:id,title:n.title,text:n.description};
}
function applyCode(value,presentation={}) {
  try {
    const next=compileMermaid(value,presentation);
    imported=next; importedSelection=null;zoomMode="width";
    selectImported(next.roots[0]);
    if(next.flow){
      next.layoutMode=Object.keys(next.nodes).length>=15?"steps":"auto";
      layoutSelect.value=next.layoutMode;autoLayout(next);
      beginSteps(next);if(next.layoutMode==="steps")updateStepSelection();
    }
    errorLine.hidden=true; editor.open=false; root.removeAttribute("data-invalid");
    renderView();
    const first=next.nodes[next.roots[0]];
    viewport.scrollLeft=Math.max(0,first.x-viewport.clientWidth/2);
    viewport.scrollTop=Math.max(0,first.y-viewport.clientHeight/2);updatePan();
    return true;
  } catch(error) {
    const msg=String(error?.message||error),loc=error?.hash?.loc?.first_line||msg.match(/line\s+(\d+)/i)?.[1];
    errorLine.textContent=loc?loc+"행 부근의 Mermaid 문법을 확인해 주세요. "+(error?.hash?.text||""):msg;
    errorLine.hidden=false;editor.open=true;return false;
  }
}
editor.querySelector("form").addEventListener("submit", event => {
  event.preventDefault();
  if (applyCode(field.value)) {
    board.querySelector('[aria-current="step"]')?.focus({preventScroll:true});
  }
});
window.addEventListener("message",ev=>{
  if(parent===window || ev.source!==parent || document.documentElement.dataset.presentation!=="standalone")return;
  if(ev.data?.type==="mermaid-flow:render" && typeof ev.data.source==="string"){field.value=ev.data.source;applyCode(field.value);}
});
