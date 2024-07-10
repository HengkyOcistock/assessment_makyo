import{importShared as me}from"../__federation_fn_import-Dg2vhaGT.js";import{_ as Ie,u as ze,a as Ce}from"../emotion-use-insertion-effect-with-fallbacks.browser.esm-CF6ETvdI.js";import{g as Je}from"../_commonjsHelpers-BosuxZz1.js";import{g as Fe,s as J,r as je,i as ye}from"../emotion-serialize.browser.esm-CRBRKS8D.js";function Qe(e){if(e.sheet)return e.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===e)return document.styleSheets[r]}function Xe(e){var r=document.createElement("style");return r.setAttribute("data-emotion",e.key),e.nonce!==void 0&&r.setAttribute("nonce",e.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var er=function(){function e(n){var t=this;this._insertTag=function(a){var s;t.tags.length===0?t.insertionPoint?s=t.insertionPoint.nextSibling:t.prepend?s=t.container.firstChild:s=t.before:s=t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(a,s),t.tags.push(a)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var r=e.prototype;return r.hydrate=function(t){t.forEach(this._insertTag)},r.insert=function(t){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Xe(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var s=Qe(a);try{s.insertRule(t,s.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(t));this.ctr++},r.flush=function(){this.tags.forEach(function(t){return t.parentNode&&t.parentNode.removeChild(t)}),this.tags=[],this.ctr=0},e}(),$="-ms-",Z="-moz-",f="-webkit-",We="comm",pe="rule",ve="decl",rr="@import",Le="@keyframes",tr="@layer",nr=Math.abs,Q=String.fromCharCode,ar=Object.assign;function sr(e,r){return w(e,0)^45?(((r<<2^w(e,0))<<2^w(e,1))<<2^w(e,2))<<2^w(e,3):0}function De(e){return e.trim()}function ir(e,r){return(e=r.exec(e))?e[0]:e}function u(e,r,n){return e.replace(r,n)}function le(e,r){return e.indexOf(r)}function w(e,r){return e.charCodeAt(r)|0}function q(e,r,n){return e.slice(r,n)}function k(e){return e.length}function ge(e){return e.length}function H(e,r){return r.push(e),e}function cr(e,r){return e.map(r).join("")}var X=1,W=1,qe=0,E=0,g=0,L="";function ee(e,r,n,t,a,s,i){return{value:e,root:r,parent:n,type:t,props:a,children:s,line:X,column:W,length:i,return:""}}function D(e,r){return ar(ee("",null,null,"",null,null,0),e,{length:-e.length},r)}function or(){return g}function fr(){return g=E>0?w(L,--E):0,W--,g===10&&(W=1,X--),g}function A(){return g=E<qe?w(L,E++):0,W++,g===10&&(W=1,X++),g}function M(){return w(L,E)}function U(){return E}function K(e,r){return q(L,e,r)}function Y(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ye(e){return X=W=1,qe=k(L=e),E=0,[]}function Ke(e){return L="",e}function G(e){return De(K(E-1,he(e===91?e+2:e===40?e+1:e)))}function ur(e){for(;(g=M())&&g<33;)A();return Y(e)>2||Y(g)>3?"":" "}function lr(e,r){for(;--r&&A()&&!(g<48||g>102||g>57&&g<65||g>70&&g<97););return K(e,U()+(r<6&&M()==32&&A()==32))}function he(e){for(;A();)switch(g){case e:return E;case 34:case 39:e!==34&&e!==39&&he(g);break;case 40:e===41&&he(e);break;case 92:A();break}return E}function hr(e,r){for(;A()&&e+g!==57;)if(e+g===84&&M()===47)break;return"/*"+K(r,E-1)+"*"+Q(e===47?e:A())}function dr(e){for(;!Y(M());)A();return K(e,E)}function mr(e){return Ke(V("",null,null,null,[""],e=Ye(e),0,[0],e))}function V(e,r,n,t,a,s,i,c,o){for(var d=0,y=0,h=i,P=0,_=0,T=0,p=1,x=1,v=1,S=0,R="",B=a,z=s,N=t,m=R;x;)switch(T=S,S=A()){case 40:if(T!=108&&w(m,h-1)==58){le(m+=u(G(S),"&","&\f"),"&\f")!=-1&&(v=-1);break}case 34:case 39:case 91:m+=G(S);break;case 9:case 10:case 13:case 32:m+=ur(T);break;case 92:m+=lr(U()-1,7);continue;case 47:switch(M()){case 42:case 47:H(yr(hr(A(),U()),r,n),o);break;default:m+="/"}break;case 123*p:c[d++]=k(m)*v;case 125*p:case 59:case 0:switch(S){case 0:case 125:x=0;case 59+y:v==-1&&(m=u(m,/\f/g,"")),_>0&&k(m)-h&&H(_>32?Oe(m+";",t,n,h-1):Oe(u(m," ","")+";",t,n,h-2),o);break;case 59:m+=";";default:if(H(N=Ae(m,r,n,d,y,a,c,R,B=[],z=[],h),s),S===123)if(y===0)V(m,r,N,N,B,s,h,c,z);else switch(P===99&&w(m,3)===110?100:P){case 100:case 108:case 109:case 115:V(e,N,N,t&&H(Ae(e,N,N,0,0,a,c,R,a,B=[],h),z),a,z,h,c,t?B:z);break;default:V(m,N,N,N,[""],z,0,c,z)}}d=y=_=0,p=v=1,R=m="",h=i;break;case 58:h=1+k(m),_=T;default:if(p<1){if(S==123)--p;else if(S==125&&p++==0&&fr()==125)continue}switch(m+=Q(S),S*p){case 38:v=y>0?1:(m+="\f",-1);break;case 44:c[d++]=(k(m)-1)*v,v=1;break;case 64:M()===45&&(m+=G(A())),P=M(),y=h=k(R=m+=dr(U())),S++;break;case 45:T===45&&k(m)==2&&(p=0)}}return s}function Ae(e,r,n,t,a,s,i,c,o,d,y){for(var h=a-1,P=a===0?s:[""],_=ge(P),T=0,p=0,x=0;T<t;++T)for(var v=0,S=q(e,h+1,h=nr(p=i[T])),R=e;v<_;++v)(R=De(p>0?P[v]+" "+S:u(S,/&\f/g,P[v])))&&(o[x++]=R);return ee(e,r,n,a===0?pe:c,o,d,y)}function yr(e,r,n){return ee(e,r,n,We,Q(or()),q(e,2,-2),0)}function Oe(e,r,n,t){return ee(e,r,n,ve,q(e,0,t),q(e,t+1,-1),t)}function j(e,r){for(var n="",t=ge(e),a=0;a<t;a++)n+=r(e[a],a,e,r)||"";return n}function pr(e,r,n,t){switch(e.type){case tr:if(e.children.length)break;case rr:case ve:return e.return=e.return||e.value;case We:return"";case Le:return e.return=e.value+"{"+j(e.children,t)+"}";case pe:e.value=e.props.join(",")}return k(n=j(e.children,t))?e.return=e.value+"{"+n+"}":""}function vr(e){var r=ge(e);return function(n,t,a,s){for(var i="",c=0;c<r;c++)i+=e[c](n,t,a,s)||"";return i}}function gr(e){return function(r){r.root||(r=r.return)&&e(r)}}var Re=function(r){var n=new WeakMap;return function(t){if(n.has(t))return n.get(t);var a=r(t);return n.set(t,a),a}},br=function(r,n,t){for(var a=0,s=0;a=s,s=M(),a===38&&s===12&&(n[t]=1),!Y(s);)A();return K(r,E)},wr=function(r,n){var t=-1,a=44;do switch(Y(a)){case 0:a===38&&M()===12&&(n[t]=1),r[t]+=br(E-1,n,t);break;case 2:r[t]+=G(a);break;case 4:if(a===44){r[++t]=M()===58?"&\f":"",n[t]=r[t].length;break}default:r[t]+=Q(a)}while(a=A());return r},Sr=function(r,n){return Ke(wr(Ye(r),n))},Ne=new WeakMap,$r=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var n=r.value,t=r.parent,a=r.column===t.column&&r.line===t.line;t.type!=="rule";)if(t=t.parent,!t)return;if(!(r.props.length===1&&n.charCodeAt(0)!==58&&!Ne.get(t))&&!a){Ne.set(r,!0);for(var s=[],i=Sr(n,s),c=t.props,o=0,d=0;o<i.length;o++)for(var y=0;y<c.length;y++,d++)r.props[d]=s[o]?i[o].replace(/&\f/g,c[y]):c[y]+" "+i[o]}}},xr=function(r){if(r.type==="decl"){var n=r.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(r.return="",r.value="")}};function Be(e,r){switch(sr(e,r)){case 5103:return f+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return f+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return f+e+Z+e+$+e+e;case 6828:case 4268:return f+e+$+e+e;case 6165:return f+e+$+"flex-"+e+e;case 5187:return f+e+u(e,/(\w+).+(:[^]+)/,f+"box-$1$2"+$+"flex-$1$2")+e;case 5443:return f+e+$+"flex-item-"+u(e,/flex-|-self/,"")+e;case 4675:return f+e+$+"flex-line-pack"+u(e,/align-content|flex-|-self/,"")+e;case 5548:return f+e+$+u(e,"shrink","negative")+e;case 5292:return f+e+$+u(e,"basis","preferred-size")+e;case 6060:return f+"box-"+u(e,"-grow","")+f+e+$+u(e,"grow","positive")+e;case 4554:return f+u(e,/([^-])(transform)/g,"$1"+f+"$2")+e;case 6187:return u(u(u(e,/(zoom-|grab)/,f+"$1"),/(image-set)/,f+"$1"),e,"")+e;case 5495:case 3959:return u(e,/(image-set\([^]*)/,f+"$1$`$1");case 4968:return u(u(e,/(.+:)(flex-)?(.*)/,f+"box-pack:$3"+$+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+f+e+e;case 4095:case 3583:case 4068:case 2532:return u(e,/(.+)-inline(.+)/,f+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(k(e)-1-r>6)switch(w(e,r+1)){case 109:if(w(e,r+4)!==45)break;case 102:return u(e,/(.+:)(.+)-([^]+)/,"$1"+f+"$2-$3$1"+Z+(w(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~le(e,"stretch")?Be(u(e,"stretch","fill-available"),r)+e:e}break;case 4949:if(w(e,r+1)!==115)break;case 6444:switch(w(e,k(e)-3-(~le(e,"!important")&&10))){case 107:return u(e,":",":"+f)+e;case 101:return u(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+f+(w(e,14)===45?"inline-":"")+"box$3$1"+f+"$2$3$1"+$+"$2box$3")+e}break;case 5936:switch(w(e,r+11)){case 114:return f+e+$+u(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return f+e+$+u(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return f+e+$+u(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return f+e+$+e+e}return e}var Er=function(r,n,t,a){if(r.length>-1&&!r.return)switch(r.type){case ve:r.return=Be(r.value,r.length);break;case Le:return j([D(r,{value:u(r.value,"@","@"+f)})],a);case pe:if(r.length)return cr(r.props,function(s){switch(ir(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return j([D(r,{props:[u(s,/:(read-\w+)/,":"+Z+"$1")]})],a);case"::placeholder":return j([D(r,{props:[u(s,/:(plac\w+)/,":"+f+"input-$1")]}),D(r,{props:[u(s,/:(plac\w+)/,":"+Z+"$1")]}),D(r,{props:[u(s,/:(plac\w+)/,$+"input-$1")]})],a)}return""})}},Pr=[Er],Tr=function(r){var n=r.key;if(n==="css"){var t=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(t,function(p){var x=p.getAttribute("data-emotion");x.indexOf(" ")!==-1&&(document.head.appendChild(p),p.setAttribute("data-s",""))})}var a=r.stylisPlugins||Pr,s={},i,c=[];i=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(p){for(var x=p.getAttribute("data-emotion").split(" "),v=1;v<x.length;v++)s[x[v]]=!0;c.push(p)});var o,d=[$r,xr];{var y,h=[pr,gr(function(p){y.insert(p)})],P=vr(d.concat(a,h)),_=function(x){return j(mr(x),P)};o=function(x,v,S,R){y=S,_(x?x+"{"+v.styles+"}":v.styles),R&&(T.inserted[v.name]=!0)}}var T={key:n,sheet:new er({key:n,container:i,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:s,registered:{},insert:o};return T.sheet.hydrate(c),T},He={exports:{}},l={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b=typeof Symbol=="function"&&Symbol.for,be=b?Symbol.for("react.element"):60103,we=b?Symbol.for("react.portal"):60106,re=b?Symbol.for("react.fragment"):60107,te=b?Symbol.for("react.strict_mode"):60108,ne=b?Symbol.for("react.profiler"):60114,ae=b?Symbol.for("react.provider"):60109,se=b?Symbol.for("react.context"):60110,Se=b?Symbol.for("react.async_mode"):60111,ie=b?Symbol.for("react.concurrent_mode"):60111,ce=b?Symbol.for("react.forward_ref"):60112,oe=b?Symbol.for("react.suspense"):60113,Cr=b?Symbol.for("react.suspense_list"):60120,fe=b?Symbol.for("react.memo"):60115,ue=b?Symbol.for("react.lazy"):60116,Ar=b?Symbol.for("react.block"):60121,Or=b?Symbol.for("react.fundamental"):60117,Rr=b?Symbol.for("react.responder"):60118,Nr=b?Symbol.for("react.scope"):60119;function O(e){if(typeof e=="object"&&e!==null){var r=e.$$typeof;switch(r){case be:switch(e=e.type,e){case Se:case ie:case re:case ne:case te:case oe:return e;default:switch(e=e&&e.$$typeof,e){case se:case ce:case ue:case fe:case ae:return e;default:return r}}case we:return r}}}function Ue(e){return O(e)===ie}l.AsyncMode=Se;l.ConcurrentMode=ie;l.ContextConsumer=se;l.ContextProvider=ae;l.Element=be;l.ForwardRef=ce;l.Fragment=re;l.Lazy=ue;l.Memo=fe;l.Portal=we;l.Profiler=ne;l.StrictMode=te;l.Suspense=oe;l.isAsyncMode=function(e){return Ue(e)||O(e)===Se};l.isConcurrentMode=Ue;l.isContextConsumer=function(e){return O(e)===se};l.isContextProvider=function(e){return O(e)===ae};l.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===be};l.isForwardRef=function(e){return O(e)===ce};l.isFragment=function(e){return O(e)===re};l.isLazy=function(e){return O(e)===ue};l.isMemo=function(e){return O(e)===fe};l.isPortal=function(e){return O(e)===we};l.isProfiler=function(e){return O(e)===ne};l.isStrictMode=function(e){return O(e)===te};l.isSuspense=function(e){return O(e)===oe};l.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===re||e===ie||e===ne||e===te||e===oe||e===Cr||typeof e=="object"&&e!==null&&(e.$$typeof===ue||e.$$typeof===fe||e.$$typeof===ae||e.$$typeof===se||e.$$typeof===ce||e.$$typeof===Or||e.$$typeof===Rr||e.$$typeof===Nr||e.$$typeof===Ar)};l.typeOf=O;He.exports=l;var kr=He.exports,$e=kr,Mr={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},_r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ir={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ge={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},xe={};xe[$e.ForwardRef]=Ir;xe[$e.Memo]=Ge;function ke(e){return $e.isMemo(e)?Ge:xe[e.$$typeof]||Mr}var zr=Object.defineProperty,Fr=Object.getOwnPropertyNames,Me=Object.getOwnPropertySymbols,jr=Object.getOwnPropertyDescriptor,Wr=Object.getPrototypeOf,_e=Object.prototype;function Ve(e,r,n){if(typeof r!="string"){if(_e){var t=Wr(r);t&&t!==_e&&Ve(e,t,n)}var a=Fr(r);Me&&(a=a.concat(Me(r)));for(var s=ke(e),i=ke(r),c=0;c<a.length;++c){var o=a[c];if(!_r[o]&&!(n&&n[o])&&!(i&&i[o])&&!(s&&s[o])){var d=jr(r,o);try{zr(e,o,d)}catch{}}}}return e}var Lr=Ve;const Dr=Je(Lr);var qr=function(e,r){return Dr(e,r)};const C=await me("react"),{useContext:Ze,forwardRef:Yr}=await me("react");var Ee={}.hasOwnProperty,Pe=C.createContext(typeof HTMLElement<"u"?Tr({key:"css"}):null),at=Pe.Provider,st=function(){return Ze(Pe)},Te=function(r){return Yr(function(n,t){var a=Ze(Pe);return r(n,a,t)})},F=C.createContext({}),it=function(){return C.useContext(F)},Kr=function(r,n){if(typeof n=="function"){var t=n(r);return t}return Ie({},r,n)},Br=Re(function(e){return Re(function(r){return Kr(e,r)})}),ct=function(r){var n=C.useContext(F);return r.theme!==n&&(n=Br(n)(r.theme)),C.createElement(F.Provider,{value:n},r.children)};function ot(e){var r=e.displayName||e.name||"Component",n=function(s,i){var c=C.useContext(F);return C.createElement(e,Ie({theme:c,ref:i},s))},t=C.forwardRef(n);return t.displayName="WithTheme("+r+")",qr(t,e)}var de="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Hr=function(r,n){var t={};for(var a in n)Ee.call(n,a)&&(t[a]=n[a]);return t[de]=r,t},Ur=function(r){var n=r.cache,t=r.serialized,a=r.isStringTag;return je(n,t,a),ze(function(){return ye(n,t,a)}),null},Gr=Te(function(e,r,n){var t=e.css;typeof t=="string"&&r.registered[t]!==void 0&&(t=r.registered[t]);var a=e[de],s=[t],i="";typeof e.className=="string"?i=Fe(r.registered,s,e.className):e.className!=null&&(i=e.className+" ");var c=J(s,void 0,C.useContext(F));i+=r.key+"-"+c.name;var o={};for(var d in e)Ee.call(e,d)&&d!=="css"&&d!==de&&(o[d]=e[d]);return o.ref=n,o.className=i,C.createElement(C.Fragment,null,C.createElement(Ur,{cache:r,serialized:c,isStringTag:typeof a=="string"}),C.createElement(a,o))}),Vr=Gr;const I=await me("react");var ft=function(r,n){var t=arguments;if(n==null||!Ee.call(n,"css"))return I.createElement.apply(void 0,t);var a=t.length,s=new Array(a);s[0]=Vr,s[1]=Hr(r,n);for(var i=2;i<a;i++)s[i]=t[i];return I.createElement.apply(null,s)},ut=Te(function(e,r){var n=e.styles,t=J([n],void 0,I.useContext(F)),a=I.useRef();return Ce(function(){var s=r.key+"-global",i=new r.sheet.constructor({key:s,nonce:r.sheet.nonce,container:r.sheet.container,speedy:r.sheet.isSpeedy}),c=!1,o=document.querySelector('style[data-emotion="'+s+" "+t.name+'"]');return r.sheet.tags.length&&(i.before=r.sheet.tags[0]),o!==null&&(c=!0,o.setAttribute("data-emotion",s),i.hydrate([o])),a.current=[i,c],function(){i.flush()}},[r]),Ce(function(){var s=a.current,i=s[0],c=s[1];if(c){s[1]=!1;return}if(t.next!==void 0&&ye(r,t.next,!0),i.tags.length){var o=i.tags[i.tags.length-1].nextElementSibling;i.before=o,i.flush()}r.insert("",t,i,!1)},[r,t.name]),null});function Zr(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return J(r)}var lt=function(){var r=Zr.apply(void 0,arguments),n="animation-"+r.name;return{name:n,styles:"@keyframes "+n+"{"+r.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Jr=function e(r){for(var n=r.length,t=0,a="";t<n;t++){var s=r[t];if(s!=null){var i=void 0;switch(typeof s){case"boolean":break;case"object":{if(Array.isArray(s))i=e(s);else{i="";for(var c in s)s[c]&&c&&(i&&(i+=" "),i+=c)}break}default:i=s}i&&(a&&(a+=" "),a+=i)}}return a};function Qr(e,r,n){var t=[],a=Fe(e,t,n);return t.length<2?n:a+r(t)}var Xr=function(r){var n=r.cache,t=r.serializedArr;return ze(function(){for(var a=0;a<t.length;a++)ye(n,t[a],!1)}),null},ht=Te(function(e,r){var n=!1,t=[],a=function(){for(var d=arguments.length,y=new Array(d),h=0;h<d;h++)y[h]=arguments[h];var P=J(y,r.registered);return t.push(P),je(r,P,!1),r.key+"-"+P.name},s=function(){for(var d=arguments.length,y=new Array(d),h=0;h<d;h++)y[h]=arguments[h];return Qr(r.registered,a,Jr(y))},i={css:a,cx:s,theme:I.useContext(F)},c=e.children(i);return n=!0,I.createElement(I.Fragment,null,I.createElement(Xr,{cache:r,serializedArr:t}),c)});export{at as CacheProvider,ht as ClassNames,ut as Global,F as ThemeContext,ct as ThemeProvider,st as __unsafe_useEmotionCache,Tr as c,ft as createElement,Zr as css,ft as jsx,lt as keyframes,it as useTheme,Te as withEmotionCache,ot as withTheme};