"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[8095],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=d(n),u=r,k=c["".concat(p,".").concat(u)]||c[u]||m[u]||l;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},25287:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={layout:"default",title:"TARDIS HUD Display"},i="TARDIS Display",o={unversionedId:"display",id:"display",title:"TARDIS HUD Display",description:"TARDIS can provide a heads up display (HUD) for players that shows various information:",source:"@site/docs/display.md",sourceDirName:".",slug:"/display",permalink:"/TARDIS-Docs/display",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/display.md",tags:[],version:"current",frontMatter:{layout:"default",title:"TARDIS HUD Display"}},p={},d=[{value:"Permissions",id:"permissions",level:2},{value:"Use",id:"use",level:2},{value:"Configuration",id:"configuration",level:2}],s={toc:d},c="wrapper";function m(e){let{components:t,...l}=e;return(0,r.kt)(c,(0,a.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tardis-display"},"TARDIS Display"),(0,r.kt)("p",null,"TARDIS can provide a heads up display (HUD) for players that shows various information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the biome the player is in"),(0,r.kt)("li",{parentName:"ul"},"the player's current coordinates"),(0,r.kt)("li",{parentName:"ul"},"the direction the player is facing"),(0,r.kt)("li",{parentName:"ul"},"the type of block the player is targeting"),(0,r.kt)("li",{parentName:"ul"},"a combination of the above")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"TARDIS Display",src:n(62418).Z,width:"600",height:"352"})),(0,r.kt)("h2",{id:"permissions"},"Permissions"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"tardis.display")," lets players use the TARDIS HUD."),(0,r.kt)("h2",{id:"use"},"Use"),(0,r.kt)("p",null,"Activate the HUD with the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/tardisdisplay [ALL|BIOME|COORDS|DIRECTION|TARGET_BLOCK]\n")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"There is one config option which uses colour codes and placeholders to show information for the ",(0,r.kt)("inlineCode",{parentName:"p"},"ALL")," option:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# HUD display\ndisplay:\n   all: '&6X&7%X% &6Y&7%Y% &6Z&7%Z% &6F&7%FACING% (%FACING_XZ%) %TARGET_BLOCK%'\n")),(0,r.kt)("p",null,"The placeholders that can be used are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%WORLD%")),(0,r.kt)("td",{parentName:"tr",align:null},"the world the player is in")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%X%")),(0,r.kt)("td",{parentName:"tr",align:null},"the ",(0,r.kt)("inlineCode",{parentName:"td"},"x")," coordinate of the player\u2019s location")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%Y%")),(0,r.kt)("td",{parentName:"tr",align:null},"the ",(0,r.kt)("inlineCode",{parentName:"td"},"y")," coordinate of the player\u2019s location")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%Z%")),(0,r.kt)("td",{parentName:"tr",align:null},"the ",(0,r.kt)("inlineCode",{parentName:"td"},"z")," coordinate of the player\u2019s location")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%PITCH%")),(0,r.kt)("td",{parentName:"tr",align:null},"the ",(0,r.kt)("inlineCode",{parentName:"td"},"pitch")," component of the player\u2019s location")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%YAW%")),(0,r.kt)("td",{parentName:"tr",align:null},"the ",(0,r.kt)("inlineCode",{parentName:"td"},"yaw")," component of the player\u2019s location")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%FACING%")),(0,r.kt)("td",{parentName:"tr",align:null},"the direction the player is facing (",(0,r.kt)("inlineCode",{parentName:"td"},"N"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"W"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"S"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"E"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%FACING_XZ%")),(0,r.kt)("td",{parentName:"tr",align:null},"the direction the player is facing (+/- ",(0,r.kt)("inlineCode",{parentName:"td"},"x"),", +/- ",(0,r.kt)("inlineCode",{parentName:"td"},"z"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%TARGET_BLOCK%")),(0,r.kt)("td",{parentName:"tr",align:null},"the type of block the player is targeting")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%BIOME% ")),(0,r.kt)("td",{parentName:"tr",align:null},"the biome the player is in")))),(0,r.kt)("p",null,"The other HUD display options use the following (not configurable):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'BIOME: "&6B&7%BIOME%"\nCOORDS: "&6X&7%X% &6Y&7%Y% &6Z&7%Z%"\nDIRECTION: "&6F&7%FACING% (%FACING_XZ%)"\nTARGET_BLOCK: "&6T&7%TARGET_BLOCK%"\n')))}m.isMDXComponent=!0},62418:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tardis-display-2ff1473759941a87792e7b2a490b6905.jpg"}}]);