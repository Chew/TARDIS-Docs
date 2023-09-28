"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[4987],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),d=a,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58139:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={layout:"default",title:"Bug Reports and Feature Requests"},i="Bug Reports &amp; Feature Requests",s={unversionedId:"bug-reports",id:"bug-reports",title:"Bug Reports and Feature Requests",description:"Please post a GitHub issue for TARDIS plugin requests and bugs, thank you :)",source:"@site/docs/bug-reports.md",sourceDirName:".",slug:"/bug-reports",permalink:"/TARDIS-Docs/bug-reports",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/bug-reports.md",tags:[],version:"current",frontMatter:{layout:"default",title:"Bug Reports and Feature Requests"},sidebar:"docs",previous:{title:"Admin Stuff",permalink:"/TARDIS-Docs/category/admin-stuff"},next:{title:"Planets",permalink:"/TARDIS-Docs/planets"}},l={},u=[{value:"Bug reports",id:"bug-reports",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bug-reports--feature-requests"},"Bug Reports ","&"," Feature Requests"),(0,a.kt)("p",null,"Please post a GitHub ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/eccentricdevotion/TARDIS/issues"},"issue")," for TARDIS plugin requests and bugs, thank you :)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Use the ",(0,a.kt)("strong",{parentName:"p"},"New issue")," button on the top right of the issues page")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Select the type of issue you want create"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"New Issue",src:r(26202).Z,width:"600",height:"399"})))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Make sure you have read the ",(0,a.kt)("a",{parentName:"p",href:"faqs"},"FAQs")," first, as your question may already be answered there."),(0,a.kt)("p",{parentName:"admonition"},"You can also search for a previous issue with the same/similar problem. Use the ",(0,a.kt)("strong",{parentName:"p"},"Closed")," link, then type in the search field to enter your query."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("img",{alt:"Closed issues",src:r(11793).Z,width:"1045",height:"291"}))),(0,a.kt)("h2",{id:"bug-reports"},"Bug reports"),(0,a.kt)("p",null,"If you are going to create a BUG ticket you need to supply relevant information ","\u2014"," as a minimum you need:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Exact Spigot/Paper version i.e. NOT ",(0,a.kt)("em",{parentName:"li"},"the latest")," ","\u2014"," use the ",(0,a.kt)("inlineCode",{parentName:"li"},"/tardis version")," command if possible, and copy from server log"),(0,a.kt)("li",{parentName:"ul"},"Exact TARDIS version i.e. NOT ",(0,a.kt)("em",{parentName:"li"},"the latest")," ","\u2014"," use the ",(0,a.kt)("inlineCode",{parentName:"li"},"/tardis version")," command if possible, and copy from server log"),(0,a.kt)("li",{parentName:"ul"},"The server log showing the entire error (as a ",(0,a.kt)("a",{parentName:"li",href:"https://pastebin.com/"},"Pastebin")," or similar, or upload the actual log file ","\u2014"," ",(0,a.kt)("em",{parentName:"li"},"please DO NOT upload a screenshot"),") ","\u2014"," this should be the log from when the server starts up right through to when the error occurs")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The TARDIS plugin has a configuration option to turn on extra debug messages. Use the command ",(0,a.kt)("inlineCode",{parentName:"p"},"/tardisconfig debug true")," to enable this. When ",(0,a.kt)("inlineCode",{parentName:"p"},"debug")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," the plugin will also extract all TARDIS related messages and write them to ",(0,a.kt)("em",{parentName:"p"},"/plugins/TARDIS/filtered.log"),". If this file is available, please upload it to the issue.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If there is no error in the log, try the tip above first, otherwise a video of the bug happening or written step by step description; explain every step you took in a clear and unambiguous way. Numbering your steps really helps when communicating about the problem you encountered.. "),(0,a.kt)("li",{parentName:"ul"},"Attach your plugins/TARDIS/config.yml file or other configuration file if relevant"),(0,a.kt)("li",{parentName:"ul"},"Attach your plugins/TARDIS/TARDIS.db file if relevant"),(0,a.kt)("li",{parentName:"ul"},"List of other plugins on server")))}m.isMDXComponent=!0},11793:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/closed_issues-540dfd0449f8e5f0586517fa093bc851.png"},26202:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/new_issue-6ad2a5ca0af8a3604b179564ccd8894f.png"}}]);