import{j as r,c as n,b as x,r as c}from"./index-CtVDp8-c.js";function h(a){const{tabs:o,selectedIndex:e,onSelect:s}=a;return r.jsx("div",{className:n.header,children:o.map((t,d)=>{const l=x(n.tabHeader,d===e&&n.selected);return r.jsx("div",{className:l,onClick:()=>s(d),children:t},t)})})}function b({tabs:a,children:o,onSelect:e}){const[s,t]=c.useState(0),l=c.Children.toArray(o)[s],u=i=>{t(i),e==null||e(i)};return r.jsxs("div",{className:n.container,children:[r.jsx(h,{tabs:a,selectedIndex:s,onSelect:u}),l]})}const m=3,j=c.createContext(m);function p(){return c.useContext(j)}export{b as T,p as u};
