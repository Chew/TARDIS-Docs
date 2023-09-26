"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[2336],{27263:(e,t,n)=>{n.d(t,{Z:()=>l,w:()=>r});var o=n(67294),a=n(34360),m=n(12699);const r=e=>{const{children:t}=e;return t};function s(e){let{yml:t,cmd:n}=e,a=t[n].aliases;const m="object"==typeof a?a.join(", "):a;return o.createElement(o.Fragment,null,o.createElement("tr",null,o.createElement("td",{className:"indent0",id:n},o.createElement("code",null,"/",n)),o.createElement("td",null,o.createElement("code",null,m)),o.createElement("td",null,o.createElement("code",null,t[n].permission))),o.createElement("tr",null,o.createElement("td",{colSpan:3},t[n].description)),o.createElement("tr",null,o.createElement("td",{colSpan:3},o.createElement("code",null,t[n].usage.replace("<command>",n)))))}function c(e){let{ymlKey:t,value:n,cmd:a}=e,s=n.permission,c=null!=s?"__Permission:__ `"+s+"`":"";return o.createElement(o.Fragment,null,o.createElement("tr",null,o.createElement("td",{className:"indent1"},o.createElement("code",null,t)),o.createElement("td",null,o.createElement(m.D,{children:n.description,components:{p:r}}),o.createElement("br",null),o.createElement(m.D,{children:c,components:{p:r}})),o.createElement("td",null,o.createElement("code",null,n.usage.replace("<command>",a)))))}function l(e){let{data:t,args:n,cmd:m,extra:r}=e;const l=(0,a.Qc)(t),d=(0,a.Qc)(n);let i="",u="";return"false"==r&&(i=o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"Command"),o.createElement("th",null,"Aliases"),o.createElement("th",null,"Permission"))),u=o.createElement(s,{key:m,yml:l,cmd:m})),o.createElement(o.Fragment,null,o.createElement("div",{className:"table-responsive"},o.createElement("table",{className:"table table-striped table-bordered"},i,o.createElement("tbody",null,u,o.createElement("tr",null,o.createElement("th",null,"Arguments"),o.createElement("th",null,"Description"),o.createElement("th",null,"Usage")),Object.entries(d).map((e=>{let[t,n]=e;return o.createElement(c,{key:t,ymlKey:t,value:n,indent:0,cmd:m})}))))))}},92743:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var o=n(87462),a=(n(67294),n(3905)),m=n(27263);const r={layout:"default",title:"Room Command"},s="Room Commands",c={unversionedId:"commands/room",id:"commands/room",title:"Room Command",description:"Commands to add and configure TARDIS rooms.",source:"@site/docs/commands/room.mdx",sourceDirName:"commands",slug:"/commands/room",permalink:"/TARDIS-Docs/commands/room",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/commands/room.mdx",tags:[],version:"current",frontMatter:{layout:"default",title:"Room Command"},sidebar:"docs",previous:{title:"Remote Command",permalink:"/TARDIS-Docs/commands/remote"},next:{title:"Schematic Command",permalink:"/TARDIS-Docs/commands/schematic"}},l={},d=[{value:"<code>/tardisroom</code>",id:"tardisroom",level:2}],i={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"room-commands"},"Room Commands"),(0,a.kt)("p",null,"Commands to add and configure TARDIS rooms."),(0,a.kt)("h2",{id:"tardisroom"},(0,a.kt)("inlineCode",{parentName:"h2"},"/tardisroom")),(0,a.kt)(m.Z,{data:"tardisroom:\n    aliases: troom\n    description: Set TARDIS room configuration options, and add new rooms.\n    permission: tardis.create\n    usage: /<command> [subcommand] [options...]\n    ",args:"\n    add:\n      description: Add a new custom room schematic.\n      permission: tardis.admin\n      usage: /<command> add [schematic name]\n    blocks:\n      description: List the blocks needed to grow a room. If a room name is given, the block list will be shown in the chat/console. If `save` is specified, a text file is created the the _plugins/TARDIS/_ folder for each room that is enabled on the server.\n      usage: /<command> blocks [room name|save]\n    cost:\n      description: Set the cost of a custom room.\n      permission: tardis.admin\n      usage: /<command> add [schematic name]\n    enabled:\n      description: Set the custom room as active/inactive.\n      permission: tardis.admin\n      usage: /<command> [schematic name] [true|false]\n    offset:\n      description: Set the offset of a custom room.\n      permission: tardis.admin\n      usage: /<command> [schematic name] [negative amount]\n    required:\n      description: List the blocks needed to grow a room.\n      usage: /<command> required [room name]\n    seed:\n      description: Set the seed block of a custom room.\n      permission: tardis.admin\n      usage: /<command> [schematic name] [material]\n    ",cmd:"tardisroom",extra:"false",mdxType:"CommandTable"}))}p.isMDXComponent=!0}}]);