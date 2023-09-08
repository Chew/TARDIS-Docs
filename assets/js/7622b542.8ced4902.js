"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[242],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),c=i,f=u["".concat(l,".").concat(c)]||u[c]||m[c]||a;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},67443:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={layout:"default",title:"Add permissions"},o="Add permissions",s={unversionedId:"add-permissions",id:"add-permissions",title:"Add permissions",description:"If you are using a permissions manager that has per world config files, you",source:"@site/docs/add-permissions.md",sourceDirName:".",slug:"/add-permissions",permalink:"/TARDIS-Docs/add-permissions",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/add-permissions.md",tags:[],version:"current",frontMatter:{layout:"default",title:"Add permissions"},sidebar:"docs",previous:{title:"Recipes",permalink:"/TARDIS-Docs/recipes"},next:{title:"TARDIS Areas",permalink:"/TARDIS-Docs/tardis-areas"}},l={},p=[{value:"Example permissions.txt",id:"example-permissionstxt",level:3}],d={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"add-permissions"},"Add permissions"),(0,i.kt)("p",null,"If you are using a permissions manager that has per world config files, you\nwould normally need to manually add permissions for players when they create a\nTARDIS in its own world. By setting ",(0,i.kt)("inlineCode",{parentName:"p"},"add_perms: true")," in the TARDIS config file,\nyou can get the plugin to automatically add permissions groups with your desired\npermissions attached to them."),(0,i.kt)("p",null,"To do this:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"With TARDIS installed, run the server once so that it creates its default files"),(0,i.kt)("li",{parentName:"ol"},"Stop the server and edit ",(0,i.kt)("em",{parentName:"li"},"plugins/TARDIS/permissions.txt")),(0,i.kt)("li",{parentName:"ol"},"Use the example (in file and) below:")),(0,i.kt)("h3",{id:"example-permissionstxt"},"Example permissions.txt"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"#first_group\ntardis.use\ntardis.room\ntardis.timetravel.player\ntardis.timetravel.location\n-tardis.exile\n#second_group\ntardis.enter\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Groups names ",(0,i.kt)("strong",{parentName:"li"},"MUST")," start with a ",(0,i.kt)("inlineCode",{parentName:"li"},"#")),(0,i.kt)("li",{parentName:"ul"},"The first line is the name of the permissions group the player should be\nadded to, so it would be something like: ",(0,i.kt)("em",{parentName:"li"},"Timelord")," or ",(0,i.kt)("em",{parentName:"li"},"Donor")),(0,i.kt)("li",{parentName:"ul"},"Then it's just one permission per line (any permission, not just TARDIS ones)\nthat you want to give this group"),(0,i.kt)("li",{parentName:"ul"},"Add a minus in front of the permissions to make it false."),(0,i.kt)("li",{parentName:"ul"},"If you want to add other groups, put the group name (with a ",(0,i.kt)("inlineCode",{parentName:"li"},"#")," at the start)\nand add the permissions for the players in that group")),(0,i.kt)("p",null,"In the example above the ",(0,i.kt)("inlineCode",{parentName:"p"},"first_group")," is the one that the TARDIS owner will be\nadded to. The ",(0,i.kt)("inlineCode",{parentName:"p"},"second_group")," would be used for any companions that the ",(0,i.kt)("inlineCode",{parentName:"p"},"first_group"),"\nplayer might want to tag along (they can\u2019t build TARDISes, but can enter anyone\nelse's if they are a companion)."),(0,i.kt)("p",null,"This feature supports Essentials GroupManager and bPermissions only at this stage."))}m.isMDXComponent=!0}}]);