function b(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var C=!0;function E(t,e,n){var r="";return n.split(" ").forEach(function(f){t[f]!==void 0?e.push(t[f]+";"):r+=f+" "}),r}var w=function(e,n,r){var f=e.key+"-"+n.name;(r===!1||C===!1)&&e.registered[f]===void 0&&(e.registered[f]=n.styles)},R=function(e,n,r){w(e,n,r);var f=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var o=n;do e.insert(n===o?"."+f:"",o,e.sheet,!0),o=o.next;while(o!==void 0)}};function S(t){for(var e=0,n,r=0,f=t.length;f>=4;++r,f-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(f){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var p={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},g=/[A-Z]|^ms/g,O=/_EMO_([^_]+?)_([^]*?)_EMO_/g,v=function(e){return e.charCodeAt(1)===45},d=function(e){return e!=null&&typeof e!="boolean"},c=b(function(t){return v(t)?t:t.replace(g,"-$&").toLowerCase()}),x=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(O,function(r,f,o){return i={name:f,styles:o,next:i},f})}return p[e]!==1&&!v(e)&&typeof n=="number"&&n!==0?n+"px":n};function u(t,e,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return i={name:n.name,styles:n.styles,next:i},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)i={name:r.name,styles:r.styles,next:i},r=r.next;var f=n.styles+";";return f}return A(t,e,n)}case"function":{if(t!==void 0){var o=i,a=n(t);return i=o,u(t,e,a)}break}}if(e==null)return n;var s=e[n];return s!==void 0?s:n}function A(t,e,n){var r="";if(Array.isArray(n))for(var f=0;f<n.length;f++)r+=u(t,e,n[f])+";";else for(var o in n){var a=n[o];if(typeof a!="object")e!=null&&e[a]!==void 0?r+=o+"{"+e[a]+"}":d(a)&&(r+=c(o)+":"+x(o,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(e==null||e[a[0]]===void 0))for(var s=0;s<a.length;s++)d(a[s])&&(r+=c(o)+":"+x(o,a[s])+";");else{var l=u(t,e,a);switch(o){case"animation":case"animationName":{r+=c(o)+":"+l+";";break}default:r+=o+"{"+l+"}"}}}return r}var h=/label:\s*([^\s;\n{]+)\s*(;|$)/g,i,G=function(e,n,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var f=!0,o="";i=void 0;var a=e[0];a==null||a.raw===void 0?(f=!1,o+=u(r,n,a)):o+=a[0];for(var s=1;s<e.length;s++)o+=u(r,n,e[s]),f&&(o+=a[s]);h.lastIndex=0;for(var l="",m;(m=h.exec(o))!==null;)l+="-"+m[1];var y=S(o)+l;return{name:y,styles:o,next:i}};export{E as g,R as i,b as m,w as r,G as s};
