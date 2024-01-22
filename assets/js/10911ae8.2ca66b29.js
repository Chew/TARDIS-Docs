"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[2825],{27263:(e,t,a)=>{a.d(t,{Z:()=>m,w:()=>i});var n=a(67294),r=a(34360),l=a(12699);const i=e=>{const{children:t}=e;return t};function o(e){let{yml:t,cmd:a}=e,r=t[a].aliases;const l="object"==typeof r?r.join(", "):r;return n.createElement(n.Fragment,null,n.createElement("tr",null,n.createElement("td",{className:"indent0",id:a},n.createElement("code",null,"/",a)),n.createElement("td",null,n.createElement("code",null,l)),n.createElement("td",null,n.createElement("code",null,t[a].permission))),n.createElement("tr",null,n.createElement("td",{colSpan:3},t[a].description)),n.createElement("tr",null,n.createElement("td",{colSpan:3},n.createElement("code",null,t[a].usage.replace("<command>",a)))))}function s(e){let{ymlKey:t,value:a,cmd:r}=e,o=a.permission,s=null!=o?"__Permission:__ `"+o+"`":"";return n.createElement(n.Fragment,null,n.createElement("tr",null,n.createElement("td",{className:"indent1",id:t},n.createElement("code",null,t)),n.createElement("td",null,n.createElement(l.D,{children:a.description,components:{p:i}}),n.createElement("br",null),n.createElement(l.D,{children:s,components:{p:i}})),n.createElement("td",null,n.createElement("code",null,a.usage.replace("<command>",r)))))}function m(e){let{data:t,args:a,extra:l}=e;const i=(0,r.Qc)(t),m=(0,r.Qc)(a);let d=Object.keys(i)[0],c=n.createElement(n.Fragment,null),p=n.createElement(n.Fragment,null);return 0==l&&(c=n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Command"),n.createElement("th",null,"Aliases"),n.createElement("th",null,"Permission"))),p=n.createElement(o,{key:d,yml:i,cmd:d})),n.createElement(n.Fragment,null,n.createElement("div",{className:"table-responsive"},n.createElement("table",{className:"table table-striped table-bordered"},c,n.createElement("tbody",null,p,n.createElement("tr",null,n.createElement("th",null,"Arguments"),n.createElement("th",null,"Description"),n.createElement("th",null,"Usage")),Object.entries(m).map((e=>{let[t,a]=e;return n.createElement(s,{key:t,ymlKey:t,value:a,cmd:d})}))))))}},6560:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),l=a(27263);const i={layout:"default",title:"Time Travel Command"},o="Time Travel Commands",s={unversionedId:"commands/travel",id:"commands/travel",title:"Time Travel Command",description:"If the plugin difficulty is set to hard you will need to use the",source:"@site/docs/commands/travel.mdx",sourceDirName:"commands",slug:"/commands/travel",permalink:"/TARDIS-Docs/commands/travel",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/commands/travel.mdx",tags:[],version:"current",frontMatter:{layout:"default",title:"Time Travel Command"},sidebar:"docs",previous:{title:"Texture Command",permalink:"/TARDIS-Docs/commands/texture"},next:{title:"Modules",permalink:"/TARDIS-Docs/modules"}},m={},d=[{value:"<code>/tardistravel</code>",id:"tardistravel",level:2},{value:"Coordinates travel",id:"coordinates-travel",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"time-travel-commands"},"Time Travel Commands"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If the plugin difficulty is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"hard")," you will need to use the\nTARDIS ",(0,r.kt)("a",{parentName:"p",href:"advanced-console"},"Advanced Console")," instead of these commands.")),(0,r.kt)("p",null,"Some of these commands also require the appropriate permission before players can use them. See\nthe ",(0,r.kt)("a",{parentName:"p",href:"permissions#ttperms"},"Permissions")," page for more information."),(0,r.kt)("h2",{id:"tardistravel"},(0,r.kt)("inlineCode",{parentName:"h2"},"/tardistravel")),(0,r.kt)(l.Z,{data:"tardistravel:\n    aliases: ttravel\n    description: Travel to destinations in various ways, or cancel travelling.\n    permission: tardis.timetravel\n    usage: /<command> [subcommand] [options...]\n    ",args:"\n    area:\n      description: Time travel to a server defined TARDIS area.\n      permission: tardis.area.[area name]\n      usage: /<command> area [area name]\n    biome:\n      description: Time travel to the closest specified biome type.\n      permission: tardis.timetravel.biome\n      usage: /<command> biome [biome type]\n    cancel:\n      description: Removes the currently set travel destination.\n      usage: /<command> cancel\n    cave:\n      description: Time travel to an underground cave.\n      permission: tardis.timetravel.cave\n      usage: /<command> cave\n    coords:\n      description: Time travel to the specified coordinates.\n      permission: tardis.timetravel.location\n      usage: /<command> [world x y z]\n    costs:\n      description: Display a list of Artron Energy travel costs.\n      usage: /<command> costs\n    dest:\n      description: Time travel to a saved destination.\n      usage: /<command> dest [save name]\n    home:\n      description: Time travel to the TARDIS \u2018home\u2019 location.\n      usage: /<command> home\n    player:\n      description: Time travel to the specified player. A player can prevent other players from travelling to them by setting the player preference to \u2018Do Not Disturb\u2019 \u2014 to do this type `/tardisprefs dnd [on|off]` or use the Sonic Prefs Menu. To ask a player if you can travel to their protected region / claim, use the command `/tardistravel [player] ?`. To accept a travel request, type `tardis request accept` in chat.\n      permission: tardis.timetravel.player\n      usage: /<command> [player]\n    stop:\n      description: Stops travelling / materialising and returns to the home location. _Use in an emergency only!_\n      usage: /<command> stop\n    structure:\n      description: Time travel to a structure.\n      permission: tardis.timetravel.village\n      usage: /<command> structure [optional structure]\n    tpa:\n      description: Ask to time travel to the specified player.\n      permission: tardis.timetravel.player\n      usage: /<command> tpa [player]\n    village:\n      description: Time travel to a village or other structure.\n      permission: tardis.timetravel.village\n      usage: /<command> village [optional structure]\n    ",extra:"false",mdxType:"CommandTable"}),(0,r.kt)("h2",{id:"coordinates-travel"},"Coordinates travel"),(0,r.kt)("p",null,"To travel to specific coordinates, type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/tardistravel [world] [x] [y] [z]\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Usage"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/tardistravel New_New_York -319 64 277")),(0,r.kt)("td",{parentName:"tr",align:null},"to travel to coordinates in the ",(0,r.kt)("em",{parentName:"td"},"specified world"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/tardistravel ~ -319 64 277")),(0,r.kt)("td",{parentName:"tr",align:null},"to travel to coordinates in the ",(0,r.kt)("em",{parentName:"td"},"world that the TARDIS is currently in"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/tardistravel ~[x] ~[y] ~[z]\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Usage"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/tardistravel ~20 ~ ~-35")),(0,r.kt)("td",{parentName:"tr",align:null},"to travel to relative coordinates.")))),(0,r.kt)("admonition",{title:"Relative coordinates",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"All coordinates must be proceeded by the\ntilde character (",(0,r.kt)("inlineCode",{parentName:"p"},"~"),"). In this case the TARDIS would travel ",(0,r.kt)("inlineCode",{parentName:"p"},"20")," blocks in the x-direction (EAST), ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," blocks in the\ny-direction (UP/DOWN) and negative ",(0,r.kt)("inlineCode",{parentName:"p"},"35")," blocks in the z-direction (NORTH) from its current location.")))}u.isMDXComponent=!0}}]);