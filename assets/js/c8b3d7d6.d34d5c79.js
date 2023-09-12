"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[307],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51627:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={layout:"default",title:"Interior Positioning System"},s="TARDIS Interior Positioning System",a={unversionedId:"tips",id:"tips",title:"Interior Positioning System",description:"By default the plugin sets up a special world called TARDIS\\_TimeVortex",source:"@site/docs/tips.md",sourceDirName:".",slug:"/tips",permalink:"/TARDIS-Docs/tips",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/tips.md",tags:[],version:"current",frontMatter:{layout:"default",title:"Interior Positioning System"},sidebar:"docs",previous:{title:"Localisation",permalink:"/TARDIS-Docs/localisation"},next:{title:"Permissions",permalink:"/TARDIS-Docs/permissions"}},l={},c=[{value:"T.I.P.S and Factions",id:"tips-and-factions",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tardis-interior-positioning-system"},"TARDIS Interior Positioning System"),(0,i.kt)("p",null,"By default the plugin sets up a special world called ",(0,i.kt)("strong",{parentName:"p"},"TARDIS","_","TimeVortex"),"\nthat uses the TARDIS Interior Positioning System. This is similar to the many skyblock and plots plugins, in that the\nTARDIS (when created) is placed in the middle of a 1024 x 1024 block square plot."),(0,i.kt)("p",null,"By default the T.I.P.S grid is 20 x 20 plots deep and wide, giving a total of 400 plots. When a TARDIS is deleted, the\nfree plot is reused."),(0,i.kt)("p",null,"If you need more slots, change the ",(0,i.kt)("inlineCode",{parentName:"p"},"creation.tips_limit")," config option to a multiple of 400."),(0,i.kt)("p",null,"If WorldGuard is also installed on the server, the entire plot is made a protected region, with the Time Lord of the\nTARDIS its owner. Access to the region is set to DENY for other players, so travel between plots is stopped. When a Time\nLord adds a companion, they are added as a region member."),(0,i.kt)("p",null,"If configured (",(0,i.kt)("inlineCode",{parentName:"p"},"allow: wg_flag_set: true"),"), Time Lords can grant or deny build rights to their companions by issuing the\ncommand ",(0,i.kt)("inlineCode",{parentName:"p"},"/tardisprefs build [on|off]")),(0,i.kt)("h3",{id:"tips-and-factions"},"T.I.P.S and Factions"),(0,i.kt)("p",null,"Because T.I.P.S uses WorldGuard to protect the TARDIS, claiming Factions in the TARDIS","_","TimeVortex will cause issues\nwhen the TARDIS is deleted. It is suggested that you disable Faction claiming in the TARDIS","_","TimeVortex world. To do\nthis, edit the ",(0,i.kt)("inlineCode",{parentName:"p"},"worldsClaimingEnabled")," setting in the Factions config file \u2014 it should look something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="server/mstore/factions_mconf/instance.json"',title:'"server/mstore/factions_mconf/instance.json"'},'"worldsClaimingEnabled": {\n   "standard": true,\n   "exceptions": ["TARDIS_TimeVortex"]\n},\n')))}u.isMDXComponent=!0}}]);