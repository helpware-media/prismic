"use strict";exports.id=412,exports.ids=[412],exports.modules={5824:(e,t,n)=>{n.d(t,{v:()=>M});var l=n(5344);let r=(...e)=>(...t)=>{for(let n=0;n<e.length;n++){let l=e[n];if(l){let e=l(...t);if(null!=e)return e}}},i={listItem:"list-item",oListItem:"o-list-item",list:"group-list-item",oList:"group-o-list-item",span:"span"},s={[i.listItem]:"listItem",[i.oListItem]:"oListItem",[i.list]:"list",[i.oList]:"oList"},o=e=>(t,n,l,r,i)=>{let o=e[s[t]||t];if(o)return o({type:t,node:n,text:l,children:r,key:i})};var a=n(3729);let u=()=>(++u.i).toString();u.i=0;let p=e=>{let t=h(e),n=[];for(let e=0;e<t.length;e++)n.push(f(t[e]));return{key:u(),children:n}},d=(e,t=[])=>({key:u(),type:e.type,text:"text"in e?e.text:void 0,node:e,children:t}),m=e=>d({type:i.span,text:e,spans:[]}),h=e=>{let t=e.slice(0);for(let e=0;e<t.length;e++){let n=t[e];if(n.type===i.listItem||n.type===i.oListItem){let l=[n];for(;t[e+1]&&t[e+1].type===n.type;)l.push(t[e+1]),t.splice(e,1);n.type===i.listItem?t[e]={type:i.list,items:l}:t[e]={type:i.oList,items:l}}}return t},f=e=>{if("text"in e)return d(e,x(e.spans,e));if("items"in e){let t=[];for(let n=0;n<e.items.length;n++)t.push(f(e.items[n]));return d(e,t)}return d(e)},x=(e,t,n)=>{if(!e.length)return[m(t.text)];let l=e.slice(0);l.sort((e,t)=>e.start-t.start||t.end-e.end);let r=[];for(let e=0;e<l.length;e++){let i=l[e],s=n&&n.start||0,o=i.start-s,a=i.end-s,u=t.text.slice(o,a),p=[];for(let t=e;t<l.length;t++){let e=l[t];e!==i&&(e.start>=i.start&&e.end<=i.end?(p.push(e),l.splice(t,1),t--):e.start<i.end&&e.end>i.start&&(p.push({...e,end:i.end}),l[t]={...e,start:i.end}))}0===e&&o>0&&r.push(m(t.text.slice(0,o)));let h={...i,text:u};r.push(d(h,x(p,{...t,text:u},i))),a<t.text.length&&r.push(m(t.text.slice(a,l[e+1]?l[e+1].start-s:void 0)))}return r},c=(e,t)=>g(p(e).children,t),g=(e,t)=>{let n=[];for(let l=0;l<e.length;l++){let r=e[l],i=t(r.type,r.node,r.text,g(r.children,t),r.key);null!=i&&n.push(i)}return n},y=e=>{let t=/^(\/(?!\/)|#)/.test(e),n=!t&&!/^https?:\/\//.test(e);return t&&!n},j={Any:"Any",Document:"Document",Media:"Media",Web:"Web"},v=e=>{var t;return{link_type:j.Document,id:e.id,uid:e.uid||void 0,type:e.type,tags:e.tags,lang:e.lang,url:null==e.url?void 0:e.url,slug:null==(t=e.slugs)?void 0:t[0],...e.data&&Object.keys(e.data).length>0?{data:e.data}:{}}},k=(e,...t)=>{let n;if(!e)return null;let l="link_type"in e?e:v(e),[r]=t;switch(n="function"==typeof r||null==r?{linkResolver:r}:{...r},l.link_type){case j.Media:case j.Web:return"url"in l?l.url:null;case j.Document:if("id"in l&&n.linkResolver){let e=n.linkResolver(l);if(null!=e)return e}if("url"in l&&l.url)return l.url;return null;case j.Any:default:return null}};var b=n(666);let L=(e,t={})=>{if(e&&("link_type"in e?(0,b.p4)(e):e)){let n="target"in e?e.target:void 0,l=k(e,t.linkResolver),r=null==l?void 0:l,i="string"==typeof r&&!y(r),s=t.rel?t.rel({href:r,isExternal:i,target:n}):i?"noreferrer":void 0;return{href:r,target:n,rel:null==s?void 0:s}}return{}},C=e=>{let t=/^(\/(?!\/)|#)/.test(e),n=!t&&!/^https?:\/\//.test(e);return t&&!n},I=a.forwardRef(function({field:e,document:t,linkResolver:n,internalComponent:r,externalComponent:i,...s},o){let{href:a,rel:u,...p}=L(e??t,{linkResolver:n,rel:"function"==typeof s.rel?s.rel:void 0}),d=u;"rel"in s&&"function"!=typeof s.rel&&(d=s.rel);let m=("href"in s?s.href:a)||"",h=m&&C(m)?r||"a":i||"a";return(0,l.jsx)(h,{ref:o,...p,...s,href:m,rel:d})}),_=e=>o({heading1:({children:e,key:t})=>(0,l.jsx)("h1",{children:e},t),heading2:({children:e,key:t})=>(0,l.jsx)("h2",{children:e},t),heading3:({children:e,key:t})=>(0,l.jsx)("h3",{children:e},t),heading4:({children:e,key:t})=>(0,l.jsx)("h4",{children:e},t),heading5:({children:e,key:t})=>(0,l.jsx)("h5",{children:e},t),heading6:({children:e,key:t})=>(0,l.jsx)("h6",{children:e},t),paragraph:({children:e,key:t})=>(0,l.jsx)("p",{children:e},t),preformatted:({node:e,key:t})=>(0,l.jsx)("pre",{children:e.text},t),strong:({children:e,key:t})=>(0,l.jsx)("strong",{children:e},t),em:({children:e,key:t})=>(0,l.jsx)("em",{children:e},t),listItem:({children:e,key:t})=>(0,l.jsx)("li",{children:e},t),oListItem:({children:e,key:t})=>(0,l.jsx)("li",{children:e},t),list:({children:e,key:t})=>(0,l.jsx)("ul",{children:e},t),oList:({children:e,key:t})=>(0,l.jsx)("ol",{children:e},t),image:({node:t,key:n})=>{let r=(0,l.jsx)("img",{src:t.url,alt:t.alt??void 0,"data-copyright":t.copyright?t.copyright:void 0});return(0,l.jsx)("p",{className:"block-img",children:t.linkTo?(0,l.jsx)(I,{linkResolver:e.linkResolver,internalComponent:e.internalLinkComponent,externalComponent:e.externalLinkComponent,field:t.linkTo,children:r}):r},n)},embed:({node:e,key:t})=>(0,l.jsx)("div",{"data-oembed":e.oembed.embed_url,"data-oembed-type":e.oembed.type,"data-oembed-provider":e.oembed.provider_name,dangerouslySetInnerHTML:{__html:e.oembed.html??""}},t),hyperlink:({node:t,children:n,key:r})=>(0,l.jsx)(I,{field:t.data,linkResolver:e.linkResolver,internalComponent:e.internalLinkComponent,externalComponent:e.externalLinkComponent,children:n},r),label:({node:e,children:t,key:n})=>(0,l.jsx)("span",{className:e.data.label,children:t},n),span:({text:e,key:t})=>{let n=[],r=0;for(let t of e.split("\n"))r>0&&n.push((0,l.jsx)("br",{},`${r}__break`)),n.push((0,l.jsx)(a.Fragment,{children:t},`${r}__line`)),r++;return(0,l.jsx)(a.Fragment,{children:n},t)}});function R({linkResolver:e,field:t,fallback:n,components:i,externalLinkComponent:s,internalLinkComponent:u,...p}){return a.useMemo(()=>{if(!(0,b.qO)(t))return null!=n?(0,l.jsx)(l.Fragment,{children:n}):null;{let n=r("object"==typeof i?o(i):i,_({linkResolver:e,internalLinkComponent:u,externalLinkComponent:s})),p=c(t,(e,t,l,r,i)=>{let s=n(e,t,l,r,i);return a.isValidElement(s)&&null==s.key?a.cloneElement(s,{key:i}):s});return(0,l.jsx)(l.Fragment,{children:p})}},[t,u,s,i,e,n])}let T=a.createContext({}),A=()=>a.useContext(T)||{},M=function({components:e,...t}){let n=A(),i=r("object"==typeof e?o(e):e,"object"==typeof n.richTextComponents?o(n.richTextComponents):n.richTextComponents);return(0,l.jsx)(R,{components:i,internalLinkComponent:n.internalLinkComponent,externalLinkComponent:n.externalLinkComponent,...t})}},666:(e,t,n)=>{n.d(t,{p4:()=>i,qO:()=>r});let l=e=>null!=e,r=e=>!!l(e)&&(1===e.length&&"text"in e[0]?!!e[0].text:!!e.length),i=e=>l(e)&&("id"in e||"url"in e)},6815:(e,t,n)=>{n.d(t,{Z:()=>l});let l=function(){for(var e,t,n=0,l="",r=arguments.length;n<r;n++)(e=arguments[n])&&(t=function e(t){var n,l,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t){if(Array.isArray(t)){var i=t.length;for(n=0;n<i;n++)t[n]&&(l=e(t[n]))&&(r&&(r+=" "),r+=l)}else for(l in t)t[l]&&(r&&(r+=" "),r+=l)}return r}(e))&&(l&&(l+=" "),l+=t);return l}}};