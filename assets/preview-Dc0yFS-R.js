const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DocsRenderer-PKQXORMH-eIQNqVD-.js","./index-CRDY4QUn.js","./__federation_fn_import-BfhoStnj.js","./react-18-CEPR8Ksy.js","./__federation_shared_react-dom-BxqGBSTk.js","./_commonjsHelpers-BosuxZz1.js","./__federation_shared_react-CvClEUjg.js","./index-D-8MO0q_.js","./extends-BFqQA52f.js","./assertThisInitialized-BxLMe1Nt.js","./isArray-BqLR8_Yl.js","./index-DrFu-skq.js"])))=>i.map(i=>d[i]);
import{_ as a}from"./index-CRDY4QUn.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),l={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-PKQXORMH-eIQNqVD-.js").then(r=>r.ai),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]),import.meta.url);return new e},stories:{filter:e=>(e.tags||[]).filter(r=>_[r]).length===0&&!e.parameters.docs?.disable}}};export{l as parameters};