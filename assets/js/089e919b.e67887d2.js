"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[3974],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},77875:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={layout:"default",title:"Texture Command"},i="The Texture command",c={unversionedId:"commands/texture",id:"commands/texture",title:"Texture Command",description:"In order to use this feature, Server Resource Packs must be accepted on the Minecraft client when connecting to the server.",source:"@site/docs/commands/texture.md",sourceDirName:"commands",slug:"/commands/texture",permalink:"/TARDIS-Docs/commands/texture",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/commands/texture.md",tags:[],version:"current",frontMatter:{layout:"default",title:"Texture Command"},sidebar:"docs",previous:{title:"TARDIS Commands",permalink:"/TARDIS-Docs/commands/tardis"},next:{title:"Time Travel Command",permalink:"/TARDIS-Docs/commands/travel"}},l={},s=[{value:"Setting texture packs",id:"setting-texture-packs",level:2},{value:"Enabling and disabling",id:"enabling-and-disabling",level:2},{value:"Video",id:"video",level:2}],u={toc:s},d="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-texture-command"},"The Texture command"),(0,a.kt)("p",null,"In order to use this feature, ",(0,a.kt)("em",{parentName:"p"},"Server Resource Packs")," must be accepted on the Minecraft client when connecting to the server.\nEnable ",(0,a.kt)("inlineCode",{parentName:"p"},"Server Resource Packs: Prompt")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Server Resource Packs: Enabled")," in the ",(0,a.kt)("strong",{parentName:"p"},"Edit Server Info")," settings."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"TARDIS",src:r(36411).Z,width:"600",height:"353"})),(0,a.kt)("h2",{id:"setting-texture-packs"},"Setting texture packs"),(0,a.kt)("p",null,"You can set a texture pack for the TARDIS interior, and one for the regular world outside:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/tardistexture in [url]\n/tardistexture out [url]\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"[url]")," must be a valid link to a texture pack file,\ne.g.: ",(0,a.kt)("a",{parentName:"p",href:"https://dl.dropboxusercontent.com/s/utka3zxmer7f19g/Default.zip"},"https://dl.dropboxusercontent.com/s/utka3zxmer7f19g/Default.zip")),(0,a.kt)("p",null,"To reset the outside texture pack back to the Minecraft default:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/tardistexture out default\n")),(0,a.kt)("h2",{id:"enabling-and-disabling"},"Enabling and disabling"),(0,a.kt)("p",null,"To turn resource pack switching on and off use the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/tardistexture [on|off]\n")),(0,a.kt)("h2",{id:"video"},"Video"),(0,a.kt)("iframe",{src:"https://player.vimeo.com/video/66056277",width:"600",height:"366",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0}))}p.isMDXComponent=!0},36411:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/servertextureson-b12d7a94e13965c3f3957f9ab26a68a4.jpg"}}]);