"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[6900],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),m=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=m(t.components);return n.createElement(s.Provider,{value:e},t.children)},d="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=m(a),u=r,k=d["".concat(s,".").concat(u)]||d[u]||p[u]||o;return a?n.createElement(k,i(i({ref:e},c),{},{components:a})):n.createElement(k,i({ref:e},c))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[d]="string"==typeof t?t:r,i[1]=l;for(var m=2;m<o;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},84794:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const o={layout:"default",title:"TARDIS Transmat"},i="TARDIS Transmat",l={unversionedId:"transmat",id:"transmat",title:"TARDIS Transmat",description:"Transmat is a common technological form of instantaneous transport.",source:"@site/docs/transmat.md",sourceDirName:".",slug:"/transmat",permalink:"/TARDIS-Docs/transmat",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/transmat.md",tags:[],version:"current",frontMatter:{layout:"default",title:"TARDIS Transmat"}},s={},m=[{value:"Adding transmat loactions",id:"adding-transmat-loactions",level:3},{value:"Transmatting to saved locations",id:"transmatting-to-saved-locations",level:3},{value:"Modifying transmat locations",id:"modifying-transmat-locations",level:3},{value:"Binding transmats",id:"binding-transmats",level:3},{value:"Video",id:"video",level:3}],c={toc:m},d="wrapper";function p(t){let{components:e,...o}=t;return(0,r.kt)(d,(0,n.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tardis-transmat"},"TARDIS Transmat"),(0,r.kt)("p",null,"Transmat is a common technological form of instantaneous transport.\nIt was designed for matter transference, and is a subset of methodologies described as teleportation."),(0,r.kt)("p",null,"You can use the TARDIS Transmat feature to move quickly throughout your TARDIS."),(0,r.kt)("h3",{id:"adding-transmat-loactions"},"Adding transmat loactions"),(0,r.kt)("p",null,"To add transmat locations, stand at the location where you want to add a transmat location, then run the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/tardis transmat add [name]\n")),(0,r.kt)("h3",{id:"transmatting-to-saved-locations"},"Transmatting to saved locations"),(0,r.kt)("p",null,"You can transmat to a location in several ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use the transmat ",(0,r.kt)("em",{parentName:"p"},"command")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"/tardis transmat tp [name]"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use the ",(0,r.kt)("em",{parentName:"p"},"Transmat GUI")," found in the TARDIS Control Centre (this is the best option for Bedrock players)."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Click on a saved transmat location"),(0,r.kt)("li",{parentName:"ul"},"Click the Transmat button to teleport")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"TARDIS Transmats",src:a(66287).Z,width:"600",height:"337"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use the ",(0,r.kt)("em",{parentName:"li"},"TARDIS Map GUI")," (found in the TARDIS Control Centre or Sonic Preferences GUI)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Load the map"),(0,r.kt)("li",{parentName:"ul"},"Click on the room or console you want to teleport to"),(0,r.kt)("li",{parentName:"ul"},"Click the Transmat button")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"TARDIS Map",src:a(41768).Z,width:"600",height:"337"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use the transmat ",(0,r.kt)("em",{parentName:"li"},"command")," to open a list of clickable chat entries",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Run the command ",(0,r.kt)("inlineCode",{parentName:"li"},"/tardis transmat list")),(0,r.kt)("li",{parentName:"ul"},"Reopen the chat window and click on a transmat link")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Transmat list",src:a(83860).Z,width:"600",height:"129"})),(0,r.kt)("h3",{id:"modifying-transmat-locations"},"Modifying transmat locations"),(0,r.kt)("p",null,"You can update or remove a transmat location with the ",(0,r.kt)("inlineCode",{parentName:"p"},"tardis transmat")," command:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To update a saved location, move to the new desired location, then run the command:"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("inlineCode",{parentName:"p"},"/tardis transmat update [name]"),"\n")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To remove a saved transmat location, run the command:"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("inlineCode",{parentName:"p"},"/tardis transmat remove [name]")))),(0,r.kt)("h3",{id:"binding-transmats"},"Binding transmats"),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"/tardisbind add transmat [name]")," command to bind a transmat to a physical object (such bas a button).\nSee ",(0,r.kt)("a",{parentName:"p",href:"/TARDIS-Docs/commands/bind-commands"},"Bind commands")," for more detail."),(0,r.kt)("h3",{id:"video"},"Video"),(0,r.kt)("iframe",{width:"600",height:"366",src:"https://www.youtube.com/embed/lvkOCDjkcOc?rel=0",frameborder:"0",allowfullscreen:!0}))}p.isMDXComponent=!0},41768:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/map-0d92d08fb3464e89a7e530d05dbf2e9d.jpg"},66287:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/transmat-5d4ba3fa693d6429cd6e9b00cb685054.jpg"},83860:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/transmat_list-7a016f6bca8d8937536600c4d34d9373.jpg"}}]);