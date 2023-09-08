"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[1478],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),k=r,d=m["".concat(s,".").concat(k)]||m[k]||u[k]||a;return n?o.createElement(d,i(i({ref:t},c),{},{components:n})):o.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},77982:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={layout:"default",title:"Timelore books"},i="Timelore books",l={unversionedId:"books",id:"books",title:"Timelore books",description:"TARDIS books allow you to inform players about TARDIS use and how to gain TARDIS",source:"@site/docs/books.md",sourceDirName:".",slug:"/books",permalink:"/TARDIS-Docs/books",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/books.md",tags:[],version:"current",frontMatter:{layout:"default",title:"Timelore books"},sidebar:"docs",previous:{title:"Achievements",permalink:"/TARDIS-Docs/achievements"},next:{title:"Schematics",permalink:"/TARDIS-Docs/schematics"}},s={},p=[{value:"Editing the book files",id:"editing-the-book-files",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"timelore-books"},"Timelore books"),(0,r.kt)("p",null,"TARDIS books allow you to inform players about TARDIS use and how to gain TARDIS\n",(0,r.kt)("a",{parentName:"p",href:"achievements"},"achievements"),"."),(0,r.kt)("p",null,"TARDIS books are fully customisable by editing the text files found in the\n",(0,r.kt)("em",{parentName:"p"},"plugins/TARDIS/books")," folder. Currently there are seven books:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"tardis")," \u2014 contains basic information about creating a TARDIS. It is given to\nthe player automatically when they first login to the server if they have the\npermission ",(0,r.kt)("inlineCode",{parentName:"li"},"tardis.create")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"travel")," \u2014 a book explaining the \u2018travel\u2019 achievement goals"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"rooms")," \u2014 a book explaining the \u2018rooms\u2019 achievement goals"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"farm")," \u2014 a book explaining the \u2018farm\u2019 achievement goals"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"energy")," \u2014 a book explaining the \u2018energy\u2019 achievement goals"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"friends")," \u2014 a book explaining the \u2018friends\u2019 achievement goals"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"kill")," \u2014 a book explaining the \u2018kill\u2019 achievement goals")),(0,r.kt)("p",null,"You can view a list of available books ingame with the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/tardisbook list\n")),(0,r.kt)("p",null,"To get a book, use the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/tardisbook [book name] get\n")),(0,r.kt)("p",null,"To use the commands a player must have the ",(0,r.kt)("inlineCode",{parentName:"p"},"tardis.book")," permission, or the\nparent node ",(0,r.kt)("inlineCode",{parentName:"p"},"tardis.use"),"."),(0,r.kt)("h2",{id:"editing-the-book-files"},"Editing the book files"),(0,r.kt)("p",null,"When editing the book files, keep these points in mind:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Books can have a maximum of 256 characters per page. In the text file separate\npages with a double line space (hit enter/return twice)"),(0,r.kt)("li",{parentName:"ul"},"You can use the placeholder ",(0,r.kt)("inlineCode",{parentName:"li"},"@p")," to insert the player\u2019s name automatically when\nthey get the book"),(0,r.kt)("li",{parentName:"ul"},"You can use standard ",(0,r.kt)("a",{parentName:"li",href:"http://www.minecraftwiki.net/wiki/Formatting_codes"},"Minecraft formatting codes"),".\nThey must be proceeded by the section sign (",(0,r.kt)("inlineCode",{parentName:"li"},"\xa7"),") \u2014 on Windows use ",(0,r.kt)("em",{parentName:"li"},"ALT+21"),",\non a Mac use ",(0,r.kt)("em",{parentName:"li"},"Option+6"))))}u.isMDXComponent=!0}}]);