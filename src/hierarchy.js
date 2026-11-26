// Lay out each rank in source order, then route links in the whitespace between ranks.
function layOutHierarchy(graph,available){
  const {nodes,edges}=graph,ids=Object.keys(nodes);
  const inputDir=({TD:"TB",BT:"BT",LR:"LR",RL:"RL"})[graph.dir]||"TB";
  const dir=graph.layoutMode==="vertical"?"TB":inputDir;
  const horizontal=dir==="LR"||dir==="RL",tight=available<500;
  const canonical=(x,y,d)=>d==="LR"?[y,x]:d==="RL"?[y,-x]:d==="BT"?[x,-y]:[x,y];
  const physical=([x,y])=>dir==="LR"?[y,x]:dir==="RL"?[-y,x]:dir==="BT"?[x,-y]:[x,y];
  const sideMap=dir==="LR"?{N:"W",S:"E",W:"N",E:"S"}:dir==="RL"?{N:"E",S:"W",W:"N",E:"S"}:
    dir==="BT"?{N:"S",S:"N",W:"W",E:"E"}:{N:"N",S:"S",W:"W",E:"E"};
  const boxes=new Map(ids.map(id=>{
    const n=nodes[id];n.naturalWidth??=n.w;
    n.w=Math.min(n.naturalWidth,n.kind==="decision"?(tight?158:208):(tight?143:175));
    n.h=n.kind==="decision"?(tight?82:86):54;
    return [id,{id,kind:n.kind,w:horizontal?n.h:n.w,h:horizontal?n.w:n.h}];
  }));
  const hints=graph.sourceCenters;
  const fromSource=ids.every(id=>{
    const p=hints?.[nodes[id].sourceId];return Array.isArray(p)&&p.length===2&&p.every(Number.isFinite);
  }) && new Set(ids.map(id=>hints[nodes[id].sourceId].join(","))).size===ids.length;
  let centers;
  if(fromSource){
    centers=new Map(ids.map(id=>[id,canonical(...hints[nodes[id].sourceId],inputDir)]));
  }else{
    const basisKey=(horizontal?"h":"v")+(tight?"n":"w");
    graph.layerCache??=new Map();
    centers=graph.layerCache.get(basisKey);
    if(!centers){
      const g=new dagre.graphlib.Graph({multigraph:true}).setGraph({rankdir:"TB",ranksep:50,nodesep:50,edgesep:18});
      for(const [id,b] of boxes)g.setNode(id,{width:b.w,height:b.h});
      for(const e of edges)g.setEdge(e.from,e.to,{weight:1},e.id);
      dagre.layout(g);
      centers=new Map(ids.map(id=>[id,[g.node(id).x,g.node(id).y]]));
      graph.layerCache.set(basisKey,centers);
    }
  }
  graph.layoutBasis=fromSource?"mermaid":"dagre";
  const ranks=[];
  for(const [id,[x,y]] of [...centers].sort((a,b)=>a[1][1]-b[1][1]||a[1][0]-b[1][0])){
    let rank=ranks.at(-1);
    if(!rank || y-rank.depth>2){rank={depth:y,items:[]};ranks.push(rank);}
    const b=boxes.get(id);b.refX=x;b.rank=ranks.length-1;rank.items.push(b);
  }
  let bottom=0;
  for(const rank of ranks){
    const items=rank.items.sort((a,b)=>a.refX-b.refX);
    const half=Math.max(...items.map(b=>b.h))/2;
    const y=bottom+half+52;
    for(const b of items){
      b.y=y;b.x=b.refX;
      const incoming=graph.incoming.get(b.id).filter(e=>boxes.get(e.from).rank<b.rank);
      if(incoming.length>1){
        const trunk=incoming.map(e=>boxes.get(e.from)).find(p=>Math.abs(p.refX-b.refX)<22 &&
          graph.outgoing.get(p.id).filter(e=>boxes.get(e.to).rank>p.rank).length===1);
        if(trunk)b.x=trunk.x;
      }
      if(incoming.length!==1)continue;
      const parent=boxes.get(incoming[0].from),delta=b.refX-parent.refX;
      const branches=graph.outgoing.get(parent.id).filter(e=>boxes.get(e.to).rank>parent.rank);
      if(branches.length<2){b.x=parent.x+(Math.abs(delta)<22?0:delta);continue;}
      if(Math.abs(delta)>22){
        const clearance=parent.w/2+gap+38;
        b.x=parent.x+Math.sign(delta)*Math.max(Math.abs(delta),clearance);
      }else b.x=parent.x;
    }
    // Isotonic packing expands only conflicting siblings, keeping their median positions.
    const pools=[];let minimum=0;
    items.forEach((b,i)=>{
      if(i)minimum+=(items[i-1].w+b.w)/2+(tight?30:43);
      b.minimum=minimum;
      pools.push({start:i,end:i,sum:b.x-minimum,count:1});
      while(pools.length>1){
        const last=pools.at(-1),prev=pools.at(-2);
        if(prev.sum/prev.count<=last.sum/last.count)break;
        prev.sum+=last.sum;prev.count+=last.count;prev.end=last.end;pools.pop();
      }
    });
    for(const p of pools)for(let i=p.start;i<=p.end;i++)items[i].x=items[i].minimum+p.sum/p.count;
    bottom=y+half;
  }
  const boxList=[...boxes.values()],bounds={
    left:Math.min(...boxList.map(b=>b.x-b.w/2)),right:Math.max(...boxList.map(b=>b.x+b.w/2)),
    top:Math.min(...boxList.map(b=>b.y-b.h/2)),bottom:Math.max(...boxList.map(b=>b.y+b.h/2))
  };
  const preferred=new Map();
  for(const b of boxList){
    const next=graph.outgoing.get(b.id).filter(e=>boxes.get(e.to).rank>b.rank)
      .sort((a,c)=>boxes.get(a.to).x-boxes.get(c.to).x);
    next.forEach((e,i)=>{
      const dx=boxes.get(e.to).x-b.x;
      preferred.set(e.id,next.length===1||Math.abs(dx)<20?"S":i===0&&dx<0?"W":i===next.length-1&&dx>0?"E":"S");
    });
  }
  const painted=[];
  const feedback=e=>boxes.get(e.from).rank>=boxes.get(e.to).rank;
  for(const e of [...edges].sort((a,b)=>Number(feedback(a))-Number(feedback(b)))){
    const a=boxes.get(e.from),b=boxes.get(e.to),back=feedback(e);
    const path=routeHierarchyEdge(a,b,boxList,bounds,preferred.get(e.id)||(a.kind==="decision"?"E":"N"),back,painted,sideMap);
    e.out=sideMap[path.out];e.into=sideMap[path.into];e.slot=0;
    e.sections=[path.points.map(physical)];e.feedback=back;
    for(let i=1;i<path.points.length;i++)painted.push([path.points[i-1],path.points[i]]);
  }
  for(const b of boxList)[nodes[b.id].x,nodes[b.id].y]=physical([b.x,b.y]);
  placeHierarchyLabels(graph);
  fitHierarchyBounds(graph);
}

function fitHierarchyBounds(graph,keepFrame=false){
  const all=Object.values(graph.nodes),edges=graph.edges,pad=keepFrame?5:12;
  let x0=Math.min(...all.map(n=>n.x-n.w/2)),x1=Math.max(...all.map(n=>n.x+n.w/2));
  let y0=Math.min(...all.map(n=>n.y-n.h/2)),y1=Math.max(...all.map(n=>n.y+n.h/2));
  if(keepFrame){
    x0=Math.min(x0,pad);x1=Math.max(x1,graph.width-pad);
    y0=Math.min(y0,pad);y1=Math.max(y1,graph.height-pad);
  }
  for(const e of edges){
    for(const [x,y] of e.sections[0]){x0=Math.min(x0,x);x1=Math.max(x1,x);y0=Math.min(y0,y);y1=Math.max(y1,y);}
    if(e.label){const [x,y]=e.labelAt,w=hierarchyLabelWidth(e.label)/2;x0=Math.min(x0,x-w);x1=Math.max(x1,x+w);y0=Math.min(y0,y-9);y1=Math.max(y1,y+9);}
  }
  const move=p=>[p[0]-x0+pad,p[1]-y0+pad];
  for(const n of all)[n.x,n.y]=move([n.x,n.y]);
  for(const e of edges){e.sections=[e.sections[0].map(move)];e.labelAt=move(e.labelAt);}
  graph.width=Math.ceil(x1-x0+2*pad);graph.height=Math.ceil(y1-y0+2*pad);
}

const hierarchyLabelWidth=text=>Math.max(11,Array.from(text).reduce((w,c)=>w+(c.charCodeAt(0)>255?12:7),0));
const intervalOverlap=(a,b,c,d)=>Math.min(Math.max(a,b),Math.max(c,d))-Math.max(Math.min(a,b),Math.min(c,d));
function throughBox(a,b,n,pad){
  return Math.max(a[0],b[0])>n.x-n.w/2-pad && Math.min(a[0],b[0])<n.x+n.w/2+pad &&
         Math.max(a[1],b[1])>n.y-n.h/2-pad && Math.min(a[1],b[1])<n.y+n.h/2+pad;
}
function cleanTurns(points){
  const out=[];
  for(const p of points){
    const b=out.at(-1),a=out.at(-2);
    if(b && Math.abs(b[0]-p[0])<.01 && Math.abs(b[1]-p[1])<.01)continue;
    if(a && (a[0]===b[0]&&b[0]===p[0] || a[1]===b[1]&&b[1]===p[1])){
      if((b[0]-a[0])*(p[0]-b[0])+(b[1]-a[1])*(p[1]-b[1])<0)return null;
      out.pop();
    }
    out.push(p);
  }
  return out.length>1?out:null;
}
function routeHierarchyEdge(from,to,boxes,bounds,preferred,back,painted,sideMap){
  const boundary=(n,side,slot)=>{
    const [dx,dy]=normals[side],s=sideMap[side],cut=n.kind==="io"&&(s==="W"||s==="E")?slant/2:0;
    return [n.x+dx*(n.w/2+gap-cut)+(dy?slot:0),n.y+dy*(n.h/2+gap-cut)+(dx?slot:0)];
  };
  const extend=(p,n,d)=>[p[0]+n[0]*d,p[1]+n[1]*d];
  const opposite={N:"S",S:"N",E:"W",W:"E"};
  const signSide=to.x<from.x?"W":"E";
  const outs=[...new Set([preferred,signSide,"S","E","W","N"])].filter(s=>from.kind!=="decision"||sideMap[s]!=="N");
  const preferredIn=back?"S":"N",ins=[preferredIn,opposite[signSide],signSide,opposite[preferredIn]];
  const returnLanes=[bounds.left-24,bounds.right+24];
  const arrivalLanes=[to.y-to.h/2-26,to.y+to.h/2+26];
  if(back){
    const children=boxes.filter(b=>b.rank===to.rank+1);
    if(children.length)arrivalLanes.push(Math.max(...children.map(b=>b.y+b.h/2))+22);
    const barriers=boxes.filter(b=>b.rank>to.rank && b.rank<from.rank)
      .map(b=>[b.x-b.w/2-14,b.x+b.w/2+14]).sort((a,b)=>a[0]-b[0]);
    let left=bounds.left;
    for(const [start,end] of [...barriers,[bounds.right,bounds.right]]){
      if(start-left>5)returnLanes.push((left+start)/2);
      left=Math.max(left,end);
    }
  }
  let best=null;
  function consider(points,out,into,penalty){
    const line=cleanTurns(points);if(!line)return;
    const s=line[0],u=line[1],t=line.at(-1),v=line.at(-2),dn=normals[out],an=normals[into];
    if((u[0]-s[0])*dn[0]+(u[1]-s[1])*dn[1]<3 || (v[0]-t[0])*an[0]+(v[1]-t[1])*an[1]<9)return;
    let score=penalty+(line.length-2)*135;
    for(let i=1;i<line.length;i++){
      const a=line[i-1],b=line[i],h=a[1]===b[1];
      if(boxes.some(n=>throughBox(a,b,n,3)))return;
      score+=Math.abs(a[0]-b[0])+Math.abs(a[1]-b[1]);
      if(best && score>=best.score)return;
      for(const [c,d] of painted){
        const otherHorizontal=c[1]===d[1];
        if(h===otherHorizontal){
          const coord=h?0:1,dist=Math.abs(a[1-coord]-c[1-coord]);
          if(dist>=9)continue;
          const overlap=intervalOverlap(a[coord],b[coord],c[coord],d[coord]);
          if(overlap>3)score+=(dist<2?4500:95)+overlap*(dist<2?8:2);
        }else{
          const x=h?c[0]:a[0],y=h?a[1]:c[1];
          if(intervalOverlap(a[0],b[0],x,x)>=0&&intervalOverlap(c[0],d[0],x,x)>=0&&
             intervalOverlap(a[1],b[1],y,y)>=0&&intervalOverlap(c[1],d[1],y,y)>=0)score+=back?530:360;
        }
      }
    }
    if(!best||score<best.score)best={points:line,out,into,score};
  }
  for(const out of outs)for(const into of ins){
    // Keep a decision's side ports free for its answers when entering from an earlier rank.
    const sideCost=(out===preferred?0:42)+(into===preferredIn?0:(!back&&to.kind==="decision"?320:18));
    const a=boundary(from,out,0),b=boundary(to,into,0);
    if(a[0]===b[0]||a[1]===b[1])consider([a,b],out,into,sideCost);
    consider([a,[b[0],a[1]],b],out,into,sideCost);
    consider([a,[a[0],b[1]],b],out,into,sideCost);
    if(best && best.score<Math.abs(b[0]-a[0])+Math.abs(b[1]-a[1])+sideCost+55)continue;
    const s=extend(a,normals[out],14),t=extend(b,normals[into],14);
    const ys=[(s[1]+t[1])/2,s[1],t[1],from.y+from.h/2+25,to.y-to.h/2-25];
    const xs=[(s[0]+t[0])/2,s[0],t[0],from.x-from.w/2-25,from.x+from.w/2+25,
      bounds.left-24,bounds.right+24];
    for(const y of ys)consider([a,s,[s[0],y],[t[0],y],t,b],out,into,sideCost);
    for(const x of xs)consider([a,s,[x,s[1]],[x,t[1]],t,b],out,into,sideCost);
    if(back || !best){
      for(const x of returnLanes)for(const y of arrivalLanes){
        consider([a,s,[x,s[1]],[x,y],[t[0],y],t,b],out,into,sideCost+8);
        consider([a,s,[s[0],from.y+from.h/2+26],[x,from.y+from.h/2+26],[x,y],[t[0],y],t,b],out,into,sideCost+8);
      }
    }
  }
  if(!best){
    // The bands above and below a whole rank are clear, including in a dense fan-in.
    const out=sideMap.S==="N" && from.kind==="decision"?"E":"S",into=back?"S":"N";
    const a=boundary(from,out,0),b=boundary(to,into,0),s=extend(a,normals[out],14);
    const rankEdge=(box,dir)=>dir>0?Math.max(...boxes.filter(n=>n.rank===box.rank).map(n=>n.y+n.h/2))+25:Math.min(...boxes.filter(n=>n.rank===box.rank).map(n=>n.y-n.h/2))-25;
    const y=rankEdge(from,1),z=rankEdge(to,back?1:-1),x=bounds.right+32;
    const points=cleanTurns([a,s,[s[0],y],[x,y],[x,z],[b[0],z],b]);
    if(!points)throw Error("연결을 배치할 수 없습니다.");
    best={out,into,points};
  }
  return best;
}
function placeHierarchyLabels(graph){
  const nodes=Object.values(graph.nodes),occupied=[],wires=graph.edges.flatMap(e=>e.sections[0].slice(1).map((b,i)=>[e.sections[0][i],b]));
  for(const e of graph.edges){
    const pts=e.sections[0];e.labelAt=pts[0].slice();if(!e.label)continue;
    const w=hierarchyLabelWidth(e.label)+4,h=16;let best=null,distance=0;
    for(let i=1;i<pts.length;i++){
      const a=pts[i-1],b=pts[i],horizontal=a[1]===b[1],length=Math.abs(b[0]-a[0])+Math.abs(b[1]-a[1]);
      for(const f of [.5,.28,.72])for(const side of [-1,1]){
        const x=a[0]+(b[0]-a[0])*f+(horizontal?0:side*(w/2+7)),y=a[1]+(b[1]-a[1])*f+(horizontal?side*14:0);
        const box={x,y,w,h};
        let score=(distance+f*length)*.22+(horizontal?0:2)+(side===(horizontal?-1:1)?0:1);
        if(graph.isStep && (x-w/2<3 || x+w/2>graph.width-3 || y-h/2<0 || y+h/2>graph.height))score+=400;
        for(const n of [...nodes,...occupied])if(Math.abs(x-n.x)<(n.w+w)/2+3 && Math.abs(y-n.y)<(n.h+h)/2+3)score+=20000;
        for(const [c,d] of wires)if(throughBox(c,d,box,1))score+=2000;
        if(!best||score<best.score)best={box,score};
      }
      distance+=length;
    }
    if(best){occupied.push(best.box);e.labelAt=[best.box.x,best.box.y];}
  }
}
