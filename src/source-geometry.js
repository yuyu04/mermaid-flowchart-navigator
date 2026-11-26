// Read layout coordinates only. Original SVG content and links stay in their own document.
function mermaidNodeCenters(svg) {
  if(!svg)return null;
  const centers=Object.create(null);
  for(const group of svg.querySelectorAll("g.pele-node, g.node")){
    const key=group.getAttribute("data-id")||group.id.match(/^flowchart-(.+)-\d+$/)?.[1];
    if(!key)continue;
    let x=0,y=0;
    for(let el=group;el && el!==svg;el=el.parentElement){
      const transforms=el.transform?.baseVal;
      for(let i=(transforms?.numberOfItems||0)-1;i>=0;i--){
        const m=transforms.getItem(i).matrix;
        [x,y]=[m.a*x+m.c*y+m.e,m.b*x+m.d*y+m.f];
      }
    }
    if(Number.isFinite(x) && Number.isFinite(y))centers[key]=[x,y];
  }
  return Object.keys(centers).length?centers:null;
}
