"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[5958],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,h=d["".concat(c,".").concat(u)]||d[u]||p[u]||i;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},96771:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={layout:"default",title:"Schematic Command"},o="TARDIS Schematic command",s={unversionedId:"commands/schematic",id:"commands/schematic",title:"Schematic Command",description:"As of version 3.0-beta-1, TARDIS now uses its own JSON schematic format. To create a TARDIS schematic (.tschm) file, you",source:"@site/docs/commands/schematic.md",sourceDirName:"commands",slug:"/commands/schematic",permalink:"/TARDIS-Docs/commands/schematic",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/commands/schematic.md",tags:[],version:"current",frontMatter:{layout:"default",title:"Schematic Command"},sidebar:"docs",previous:{title:"Remote Command",permalink:"/TARDIS-Docs/commands/remote"},next:{title:"Sudo Command",permalink:"/TARDIS-Docs/commands/sudo"}},c={},l=[{value:"Command use",id:"command-use",level:2},{value:"Saving",id:"saving",level:4},{value:"Loading",id:"loading",level:4},{value:"Pasting",id:"pasting",level:4},{value:"Miscellaneous",id:"miscellaneous",level:4}],m={toc:l},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tardis-schematic-command"},"TARDIS Schematic command"),(0,r.kt)("p",null,"As of version 3.0-beta-1, TARDIS now uses its own JSON schematic format. To create a TARDIS schematic (.tschm) file, you\nuse the ",(0,r.kt)("inlineCode",{parentName:"p"},"/tardisschematic")," command."),(0,r.kt)("h2",{id:"command-use"},"Command use"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/tardisschematic [save|load|paste] [name]\n")),(0,r.kt)("h4",{id:"saving"},"Saving"),(0,r.kt)("p",null,"In order to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"save")," argument, you must first define the schematic region start and end points with the TARDIS\nschematic wand (",(0,r.kt)("inlineCode",{parentName:"p"},"/tardisgive [player] schematic_wand 1"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/tardisschematic save custom\n")),(0,r.kt)("h4",{id:"loading"},"Loading"),(0,r.kt)("p",null,"To use the ",(0,r.kt)("inlineCode",{parentName:"p"},"load")," argument, you must specify the folder and file ",(0,r.kt)("inlineCode",{parentName:"p"},"[name]")," of the schematic you want to use. You don\u2019t need to add the file extension."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/tardisschematic load [folder] [schematic]\n")),(0,r.kt)("p",null,"There are four ",(0,r.kt)("inlineCode",{parentName:"p"},"[folder]")," locations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"user")," - this is the loaction for user made schematics found at ",(0,r.kt)("em",{parentName:"li"},"plugins/TARDIS/user","_","schematcis"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"console")," - this contains all the plugin's interior schematics."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"room")," - this contains all the plugin's room schematics."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"structure")," - this contains all the plugin's structure schematics used in TARDIS worlds.")),(0,r.kt)("h4",{id:"pasting"},"Pasting"),(0,r.kt)("p",null,"Once loaded the schematic can be pasted back into the world with the ",(0,r.kt)("inlineCode",{parentName:"p"},"paste")," argument."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/tardisschematic paste\n")),(0,r.kt)("p",null,"Pasting should be relatively lag free, as the number of blocks being placed per tick is restricted. A progress bar will\nappear to give you an indication of how long the schematic will take to process."),(0,r.kt)("h4",{id:"miscellaneous"},"Miscellaneous"),(0,r.kt)("p",null,"There are two sub-commands to deal with custom display item light blocks:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/tardisschematic convert [light] [material]\n")),(0,r.kt)("p",null,"eg use ",(0,r.kt)("inlineCode",{parentName:"p"}," /tardisschematic convert TENTH REDSTONE_LAMP")," to convert all redstone lamps in the selected area to Tenth TARDIS lights."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/tardisschematic remove\n")),(0,r.kt)("p",null,"Removes TARDIS light blocks and replaces them with redstone lamps."),(0,r.kt)("hr",null),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"While it is possible to paste schematics, it is still recommended to use a plugin such as WorldEdit to do this\nsort of work.")))}p.isMDXComponent=!0}}]);