"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[420],{39446:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),o=n(34360),s=n(12699);const r=e=>{const{children:t}=e;return t};function l(e){let{data:t,ymlKey:n,value:o,indent:i=0}=e;const c=typeof o,u="object"===c;n=n.trim().split(".").pop();const d=u?Object.entries(o).map((e=>{let[n,o]=e;return a.createElement(l,{data:t,key:n,ymlKey:n,value:o,indent:i+1})})):null,m=t.split("\n").find((e=>e.trim().startsWith(n+":")));let p=null;m.includes("#")&&(p=m.split("#")[1]);let g="indent"+i;if(u)return a.createElement(a.Fragment,null,a.createElement("tr",null,a.createElement("td",{colSpan:3,class:g,id:n.toString()},a.createElement("code",null,n,":"))),d);const h=a.createElement("tr",null,a.createElement("td",{class:g,id:n.toString()},a.createElement("code",null,n.toString())),a.createElement("td",null,a.createElement("code",null,c.toString())),a.createElement("td",null,a.createElement("code",null,o.toString())));return p?a.createElement(a.Fragment,null,h,a.createElement("tr",null,a.createElement("td",{colSpan:3,class:g},a.createElement(s.D,{children:p,components:{p:r}})))):h}function i(e){let{data:t}=e;const n=(0,o.Qc)(t);return a.createElement(a.Fragment,null,a.createElement("div",{className:"table-responsive"},a.createElement("table",{className:"table table-striped table-bordered"},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Config"),a.createElement("th",null,"Type"),a.createElement("th",null,"Default"))),a.createElement("tbody",null,Object.entries(n).map((e=>{let[n,o]=e;return a.createElement(l,{data:t,key:n,ymlKey:n,value:o,indent:0})}))))))}},58414:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=n(87462),o=(n(67294),n(3905)),s=n(39446);const r={layout:"default",title:"Storage configuration options"},l="Storage configuration options",i={unversionedId:"configuration/storage",id:"configuration/storage",title:"Storage configuration options",description:"These are the plugin storage configuration options.",source:"@site/docs/configuration/storage.mdx",sourceDirName:"configuration",slug:"/configuration/storage",permalink:"/TARDIS-Docs/configuration/storage",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/configuration/storage.mdx",tags:[],version:"current",frontMatter:{layout:"default",title:"Storage configuration options"},sidebar:"docs",previous:{title:"Room configuration",permalink:"/TARDIS-Docs/configuration/rooms"},next:{title:"Travel Configuration Options",permalink:"/TARDIS-Docs/configuration/travel"}},c={},u=[],d={toc:u},m="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"storage-configuration-options"},"Storage configuration options"),(0,o.kt)("p",null,"These are the plugin storage configuration options."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="/plugins/TARDIS/config.yml"',title:'"/plugins/TARDIS/config.yml"'},'storage:\n  database: sqlite\n  mysql:\n    host: localhost\n    port: 3306\n    database: TARDIS\n    user: bukkit\n    password: mysecurepassword\n    prefix: ""\n    useSSL: false\n')),(0,o.kt)(s.Z,{name:"/plugins/TARDIS/config.yml",data:"storage:                                        \n      database: sqlite # Sets the database type the plugin uses. Valid values are `sqlite` and `mysql`\n      mysql: # Only applicable if `database` is set to `mysql`, otherwise this section can be ignored\n       host: localhost # Sets the host of the mysql database, where: `localhost` = the ip address or hostname of the MySQL server (if the MySQL server is on the same server as the Spigot server, you can usually use `localhost`\n       port: 3306 # Sets the mysql server port, where: `3306` = the port on which the MySQL server is running (usually 3306)\n       database: TARDIS # Sets the name of the database to connect to, where: `TARDIS` = the name of the database where the TARDIS data will be stored\n       user: bukkit # Sets the user that connects to the mysql database\n       password: mysecurepassword # Sets the password to connect to the mysql database\n       prefix: '' # Sets the prefix added to the table names used in the mysql database. Spigot servers will generally only use one database, so to distinguish the TARDIS tables from other plugins this should probably be set to something like `tardis_`\n       use_SSL: false # Sets whether to use an SSL connection to the MySQL database\n    ",mdxType:"ConfigTable"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"category/plugin-configuration"},"Back to main configuration page")))}p.isMDXComponent=!0}}]);