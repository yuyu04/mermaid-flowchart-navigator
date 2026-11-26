// All coordinates are CSS pixels before the final fit to the note column.
function positionFlow(graph, available, cycle) {
  const {nodes, edges, roots, outgoing, incoming}=graph;
  const width=Math.max(320,Math.min(available,820));
  graph.fittedAt=available;graph.layoutBasis="compact";
  const narrow=width<520;
  for(const n of Object.values(nodes)){
    n.naturalWidth??=n.w;
    n.w=Math.min(n.naturalWidth,n.kind==="decision"?(narrow?154:215):(narrow?142:182));
    n.h=n.kind==="decision"?96:54;
  }
  for(const e of edges){e.slot=0;delete e.labelAt;delete e.sections;}
  if(cycle || roots.length!==1 || graph.layoutMode==="vertical" || !["TD","TB"].includes(graph.dir) || Object.keys(nodes).length>14)return false;
  const root=roots[0], branch=outgoing.get(root);
  const link=(e,out,into,slot=0)=>Object.assign(e,{out,into,slot});
  const at=(id,x,y,w,h)=>Object.assign(nodes[id],{x,y,w,h});
  // A preparation checklist can stop at the same cause from several decisions.
  const hub=Object.keys(nodes).find(id=>incoming.get(id).length===4 && outgoing.get(id).length===1);
  if(graph.layoutMode!=="vertical" && available>=650 && hub && Object.keys(nodes).length===8){
    const end=outgoing.get(hub)[0], steps=[],chain=[];
    for(let id=root;id && !steps.includes(id);){
      steps.push(id);const next=outgoing.get(id).filter(e=>e.to!==hub);
      if(next.length!==1)break;
      chain.push(next[0]);id=next[0].to;
    }
    if(steps.length===6 && new Set([...steps,hub,end.to]).size===8 &&
        [0,2,3,4].every(i=>incoming.get(hub).some(e=>e.from===steps[i]))){
      const w=Math.max(832,Math.min(1040,available)),x=[.108,.366,.62,.874].map(f=>w*f);
      steps.slice(0,4).forEach((id,i)=>at(id,x[i],57,Math.min(nodes[id].w,w*.194),nodes[id].h));
      at(steps[4],x[3],259,Math.min(198,w*.205),90);at(steps[5],x[2],347,Math.min(168,w*.175),52);
      at(hub,x[1],182,Math.min(166,w*.18),52);at(end.to,x[0],294,Math.min(170,w*.18),52);
      chain.slice(0,3).forEach(e=>link(e,"E","W"));link(chain[3],"S","N");link(chain[4],"S","E");
      chain[3].labelAt=[x[3]+20,211];chain[4].labelAt=[x[3]-32,333];
      link(end,"S","E");
      for(const e of incoming.get(hub)){
        const i=steps.indexOf(e.from);
        if(i===4){link(e,"W","S",30);e.labelAt=[(x[1]+x[3])/2,244];}
        else {link(e,"S",i===0?"W":"E",i===3?-9:0);e.labelAt=[x[i]+25,134];}
      }
      graph.width=w;graph.height=391;return true;
    }
  }
  // A three-way fork whose two decisions both return to the same outcome.
  // Recognize the topology, including parallel edges, independently of the Mermaid IDs.
  const common=branch.find(e=>!outgoing.get(e.to).length && incoming.get(e.to).length===4);
  if(Object.keys(nodes).length===7 && edges.length===9 && branch.length===3 && common){
    const joins=e=>outgoing.get(e.to).filter(next=>next.to===common.to).length;
    const left=branch.find(e=>joins(e)===2),right=branch.find(e=>joins(e)===1);
    if(left && right && outgoing.get(left.to).length===3 && outgoing.get(right.to).length===3){
      const [first,second]=outgoing.get(left.to).filter(e=>e.to===common.to);
      const only=outgoing.get(left.to).find(e=>e.to!==common.to);
      const [lower,other]=outgoing.get(right.to).filter(e=>e.to!==common.to);
      const meet=outgoing.get(right.to).find(e=>e.to===common.to);
      if(only && lower && other && new Set([root,common.to,left.to,right.to,only.to,lower.to,other.to]).size===7){
        if(narrow){
          const w=Math.max(362,width), l=73,c=w/2,r=w-73;
          graph.width=w;graph.height=494;
          at(root,c,53,157,85);at(left.to,l,190,136,84);at(right.to,r,190,136,84);
          at(common.to,c,325,122,50);at(only.to,l,387,128,50);
          at(other.to,c,407,118,50);at(lower.to,r,463,128,50);
          link(left,"W","N");link(right,"E","N");link(common,"S","N");
          link(only,"S","N");link(first,"S","W");link(second,"E","N",-26);
          link(lower,"S","N");link(other,"S","E");link(meet,"W","N",26);
          common.labelAt=[c+29,124];first.labelAt=[(l+c-69)/2,313];
          second.labelAt=[c-48,251];meet.labelAt=[c+49,251];
          only.labelAt=[l-22,351];other.labelAt=[(r+c+60)/2,394];lower.labelAt=[r+18,435];
        }else{
          graph.width=700;graph.height=381;
          at(root,360,57,200,89);at(left.to,182,193,186,86);at(right.to,506,193,186,86);
          at(common.to,349,335,148,52);at(only.to,82,335,150,52);
          at(lower.to,535,335,144,52);at(other.to,616,60,142,52);
          link(left,"W","N");link(right,"E","N");link(common,"S","N",11);
          link(only,"W","N",-27);link(first,"S","W");link(second,"E","N",-38);
          link(lower,"S","N",-29);link(other,"E","S",28);link(meet,"W","N",38);
          common.labelAt=[392,138];first.labelAt=[218,320];
          second.labelAt=[284,254];meet.labelAt=[414,254];
        }
        return true;
      }
    }
  }
  // Very small panes can stack the side outcomes of a simple tree below each question.
  const tree=Object.keys(nodes).every(id=>incoming.get(id).length<=1 &&
    outgoing.get(id).filter(e=>outgoing.get(e.to).length).length<=1);
  if(!narrow || !tree)return false;
  const l=width*.245,r=width-l;
  let id=root,y=56;
  while(id){
    const n=nodes[id];n.x=l;n.y=y;
    const children=outgoing.get(id);
    const main=children.find(e=>outgoing.get(e.to).length)||children.at(-1);
    if(!main)break;
    let sideY=y+72;
    for(const e of children.filter(e=>e!==main)){
      const leaf=nodes[e.to];leaf.x=r;leaf.y=sideY;
      link(e,"S","W");e.labelAt=[(l+r-leaf.w/2-10)/2,sideY-15];sideY+=76;
    }
    link(main,"S","N");
    const nextY=Math.max(y+125,sideY+22);
    main.labelAt=[l+23,nextY-nodes[main.to].h/2-23];
    id=main.to;y=nextY;
  }
  graph.width=width;graph.height=Math.ceil(Math.max(...Object.values(nodes).map(n=>n.y+n.h/2))+17);
  return true;
}
