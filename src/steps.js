// A step keeps the selected history above the active choices and their immediate future below.
function beginSteps(graph){
  const rootId=graph.roots[0],initial=[],seen=new Set();
  let id=rootId;
  while(!seen.has(id) && graph.nodes[id].kind!=="decision" && graph.outgoing.get(id).length===1){
    seen.add(id);const e=graph.outgoing.get(id)[0];initial.push(e.id);id=e.to;
  }
  graph.initialTrail=graph.nodes[id].kind==="decision"?initial:[];
  graph.stepTrail=[...graph.initialTrail];
}
function stepState(graph){
  const trail=graph.stepTrail,current=trail.length?graph.byEdge.get(trail.at(-1)).to:graph.roots[0];
  const terminal=!graph.outgoing.get(current).length && trail.length>0;
  const prefix=terminal?trail.slice(0,-1):trail;
  const center=prefix.length?graph.byEdge.get(prefix.at(-1)).to:graph.roots[0];
  return {current,center,prefix,prev:prefix.length?graph.byEdge.get(prefix.at(-1)):null};
}
function stepBoard(graph,available){
  const {center,prefix}=stepState(graph),links=graph.outgoing.get(center);
  const width=Math.max(320,Math.min(820,available)),narrow=width<510;
  const nodes=Object.create(null),edges=[],boxes=new Map(),rows=[];
  const cross=id=>{
    const n=graph.nodes[id],p=graph.sourceCenters?.[n.sourceId];
    const horizontal=["LR","RL"].includes(graph.dir);
    return p?.[horizontal?1:0]??(horizontal?n.y:n.x);
  };
  const targets=[...new Set(links.map(e=>e.to))].sort((a,b)=>cross(a)-cross(b));
  const fixed=new Set([center,...targets]);
  const extra=[];
  for(const key of prefix.slice(-2).reverse()){
    const e=graph.byEdge.get(key);
    if(fixed.has(e.from))break;
    extra.unshift(e);fixed.add(e.from);
  }
  // A step is identified by its Mermaid ID, including shared destinations and returns.
  const beyond=new Map(),future=[];
  for(const id of targets)for(const e of graph.outgoing.get(id)){
    future.push(e);
    if(fixed.has(e.to))continue;
    if(!beyond.has(e.to))beyond.set(e.to,new Set());
    beyond.get(e.to).add(id);
  }
  function addRow(ids,context,desired){
    if(!ids.length)return;
    const row=rows.length,room=width-24,gutter=narrow?14:26;
    const maxWidth=(room-(ids.length-1)*gutter)/ids.length;
    const list=ids.map((id,index)=>{
      const original=graph.nodes[id],decision=original.kind==="decision";
      const cap=context?(decision?172:160):(decision?208:178);
      const w=Math.min(maxWidth,cap,Math.max(decision?148:115,original.naturalWidth||original.w));
      const h=context?(decision?66:43):(decision?85:53);
      const n={...original,w,h,x:Math.max(12+w/2,Math.min(width-12-w/2,desired[index])),context};
      nodes[id]=n;
      return {id,n,rank:row};
    });
    for(let i=1;i<list.length;i++){
      const a=list[i-1].n,b=list[i].n;b.x=Math.max(b.x,a.x+(a.w+b.w)/2+gutter);
    }
    const last=list.at(-1).n;last.x=Math.min(last.x,width-12-last.w/2);
    for(let i=list.length-2;i>=0;i--){
      const a=list[i].n,b=list[i+1].n;a.x=Math.min(a.x,b.x-(a.w+b.w)/2-gutter);
    }
    rows.push(list);
  }
  for(const e of extra)addRow([e.from],"before",[width/2]);
  addRow([center],null,[width/2]);
  const limit=width<590?2:width<725?3:4;
  for(let i=0;i<targets.length;i+=limit){
    const part=targets.slice(i,i+limit);
    const pitch=Math.min(narrow?width*.51:width*.38,(width-24)/part.length);
    addRow(part,null,part.map((_,j)=>width/2+(j-(part.length-1)/2)*pitch));
  }
  const previews=[...beyond].map(([id,parents])=>{
    let anchor=0;
    for(const p of parents){
      const siblings=[...beyond].filter(([,sources])=>sources.has(p)).map(([k])=>k).sort((a,b)=>cross(a)-cross(b));
      const pitch=narrow?Math.min(126,width*.31):Math.min(nodes[p].w+62,width*.38);
      anchor+=nodes[p].x+(siblings.indexOf(id)-(siblings.length-1)/2)*pitch;
    }
    return {id,x:anchor/parents.size};
  }).sort((a,b)=>a.x-b.x||cross(a.id)-cross(b.id));
  for(let i=0;i<previews.length;i+=limit){
    const part=previews.slice(i,i+limit);addRow(part.map(p=>p.id),"after",part.map(p=>p.x));
  }
  let bottom=10;
  for(const row of rows){
    const half=Math.max(...row.map(b=>b.n.h))/2;
    for(const b of row){b.n.y=bottom+half;boxes.set(b.id,{...b.n,id:b.id,rank:b.rank});}
    bottom+=2*half+42;
  }
  for(const e of links)edges.push({...e,context:null});
  for(const e of extra)edges.push({...e,context:"before"});
  for(const e of future)if(nodes[e.to] && !edges.some(other=>other.id===e.id))edges.push({...e,context:"after"});
  const bounds={left:12,right:width-12,top:8,bottom:bottom-32};
  const list=[...boxes.values()],painted=[],sides={N:"N",S:"S",E:"E",W:"W"};
  for(const e of edges){
    const a=boxes.get(e.from),b=boxes.get(e.to);
    const outgoing=edges.filter(o=>o.from===e.from&&o.context===e.context);
    const preferred=outgoing.length<2||Math.abs(a.x-b.x)<20?"S":b.x<a.x?"W":"E";
    const line=routeHierarchyEdge(a,b,list,bounds,preferred,b.rank<=a.rank,painted,sides);
    e.sections=[line.points];e.out=line.out;e.into=line.into;e.slot=0;
    for(let i=1;i<line.points.length;i++)painted.push([line.points[i-1],line.points[i]]);
  }
  const result={...graph,nodes,edges,width,height:Math.ceil(bottom-25),isStep:true};
  placeHierarchyLabels(result);
  fitHierarchyBounds(result,true);
  return result;
}
function updateStepSelection(){
  const {current}=stepState(imported),n=imported.nodes[current];
  importedSelection={path:[...imported.stepTrail],node:current,title:n.title,text:n.description};
}
function changeStep(trail){
  imported.stepTrail=trail;updateStepSelection();renderView();
}
function followStep(e){
  const s=stepState(imported);
  if(e.from===s.center){changeStep([...s.prefix,e.id]);return true;}
  if(s.prev?.id===e.id){changeStep(s.prefix.slice(0,-1));return true;}
  return false;
}
function stepNode(id){
  const s=stepState(imported);
  if(id===s.center)return false;
  const matches=imported.outgoing.get(s.center).filter(e=>e.to===id);
  if(matches.length===1){followStep(matches[0]);return true;}
  if(s.prev?.from===id){changeStep(s.prefix.slice(0,-1));return true;}
  return false;
}
