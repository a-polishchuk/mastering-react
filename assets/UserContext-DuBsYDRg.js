import{j as a,c as r,b as x,r as n}from"./index-D3_Ce0cp.js";function h(c){const{tabs:o,selectedIndex:e,onSelect:s}=c;return a.jsx("div",{className:r.header,children:o.map((t,d)=>{const l=x(r.tabHeader,d===e&&r.selected);return a.jsx("div",{className:l,onClick:()=>s(d),children:t},t)})})}function b({tabs:c,children:o,onSelect:e}){const[s,t]=n.useState(0),l=n.Children.toArray(o)[s],u=i=>{t(i),e==null||e(i)};return a.jsxs("div",{className:r.container,children:[a.jsx(h,{tabs:c,selectedIndex:s,onSelect:u}),l]})}const m=3,j=n.createContext(m);function p(){return n.useContext(j)}export{b as T,p as u};