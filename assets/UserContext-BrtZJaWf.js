import{j as n,c as t,b as i,r as c}from"./index-BNxIl-zQ.js";function x(r){const{tabs:a,selectedIndex:e,onSelect:o}=r;return n.jsx("div",{className:t.header,children:a.map((d,s)=>{const l=i(t.tabHeader,s===e&&t.selected);return n.jsx("div",{className:l,onClick:()=>o(s),children:d},d)})})}function j({tabs:r,children:a}){const[e,o]=c.useState(0),s=c.Children.toArray(a)[e];return n.jsxs("div",{className:t.container,children:[n.jsx(x,{tabs:r,selectedIndex:e,onSelect:o}),s]})}const u=3,m=c.createContext(u);function C(){return c.useContext(m)}export{j as T,C as u};
