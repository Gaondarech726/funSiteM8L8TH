import{j as t,L as p,d as n,b as d}from"./index-mHww9zLL.js";import{C as x,b as m,c as u,d as l}from"./ProductList.styled-D8---dy2.js";import{H as h}from"./index-BaVqj8mc.js";const j=({products:r})=>t.jsx(x,{children:r.map(e=>t.jsx(m,{children:t.jsx(p,{to:`${e.id}`,children:t.jsx(u,{children:e.name})})},e.id))}),g=n.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;
`,P=n.input`
  padding: 10px 32px 10px 10px;
  border-radius: 4px;
  font: inherit;
  border: transparent;
`,f=n(h)`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 6px;
`,b=({value:r,onChange:e})=>t.jsxs(g,{children:[t.jsx(f,{}),t.jsx(P,{type:"text",value:r,onChange:a=>e(a.target.value),placeholder:"Введіть назву альбому"})]}),w=()=>{const r=l(),[e,a]=d(),o=e.get("name")??"",i=r.filter(s=>s.name.toLowerCase().includes(o.toLowerCase())),c=s=>{a(s!==""?{name:s}:{})};return t.jsxs("main",{children:[t.jsx(b,{value:o,onChange:c}),t.jsx(j,{products:i})]})};export{w as default};
