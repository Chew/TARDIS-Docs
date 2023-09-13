"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[9363],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=d(n),g=r,k=u["".concat(p,".").concat(g)]||u[g]||m[g]||l;return n?a.createElement(k,i(i({ref:e},s),{},{components:n})):a.createElement(k,i({ref:e},s))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},58823:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={layout:"default",title:"Storage configuration options"},i="Storage configuration options",o={unversionedId:"configuration/configuration-storage",id:"configuration/configuration-storage",title:"Storage configuration options",description:"These are the plugin storage configuration options.",source:"@site/docs/configuration/configuration-storage.md",sourceDirName:"configuration",slug:"/configuration/configuration-storage",permalink:"/TARDIS-Docs/configuration/configuration-storage",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/configuration/configuration-storage.md",tags:[],version:"current",frontMatter:{layout:"default",title:"Storage configuration options"},sidebar:"docs",previous:{title:"Room configuration",permalink:"/TARDIS-Docs/configuration/configuration-rooms"},next:{title:"Travel Configuration Options",permalink:"/TARDIS-Docs/configuration/configuration-travel"}},p={},d=[],s={toc:d},u="wrapper";function m(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"storage-configuration-options"},"Storage configuration options"),(0,r.kt)("p",null,"These are the plugin storage configuration options."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="/plugins/TARDIS/config.yml"',title:'"/plugins/TARDIS/config.yml"'},'storage:\n  database: sqlite\n  mysql:\n    host: localhost\n    port: 3306\n    database: TARDIS\n    user: bukkit\n    password: mysecurepassword\n    prefix: ""\n    useSSL: false\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"storage:"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xa0","\xa0",(0,r.kt)("inlineCode",{parentName:"td"},"database")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sqlite"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the database type the plugin uses. Valid values are ",(0,r.kt)("inlineCode",{parentName:"td"},"sqlite")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"mysql")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xa0","\xa0",(0,r.kt)("inlineCode",{parentName:"td"},"mysql:")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Only applicable if ",(0,r.kt)("inlineCode",{parentName:"td"},"database")," is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"mysql"),", otherwise this section can be ignored"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,r.kt)("inlineCode",{parentName:"td"},"host")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"localhost"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the host of the mysql database, where:",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"localhost")," = the ip address or hostname of the MySQL server (if the MySQL server is on the same server as the Spigot server, you can usually use ",(0,r.kt)("inlineCode",{parentName:"td"},"localhost")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,r.kt)("inlineCode",{parentName:"td"},"port")),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"3306"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the mysql server port, where:",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"3306")," = the port on which the MySQL server is running (usually 3306)"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,r.kt)("inlineCode",{parentName:"td"},"database")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TARDIS"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the name of the database to connect to, where:",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"TARDIS")," = the name of the database where the TARDIS data will be stored"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,r.kt)("inlineCode",{parentName:"td"},"user")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bukkit"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the user that connects to the mysql database"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,r.kt)("inlineCode",{parentName:"td"},"password")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mysecurepassword"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the password to connect to the mysql database"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,r.kt)("inlineCode",{parentName:"td"},"prefix")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"''"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the prefix added to the table names used in the mysql database. Spigot servers will generally only use one database, so to distinguish the TARDIS tables from other plugins this should probably be set to something like ",(0,r.kt)("inlineCode",{parentName:"td"},"tardis_")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,r.kt)("inlineCode",{parentName:"td"},"use_SSL")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Sets whether to use an SSL connection to the MySQL database"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"category/plugin-configuration"},"Back to main configuration page")))}m.isMDXComponent=!0}}]);