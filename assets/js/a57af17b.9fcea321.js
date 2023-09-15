"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[6432],{39446:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),a=n(34360),o=n(12699);const l=e=>{const{children:t}=e;return t};function i(e){let{data:t,ymlKey:n,value:a,indent:s=0}=e;const c=typeof a,u="object"===c;n=n.trim().split(".").pop(),console.debug("data: ",t,"ymlKey: ",n,"value: ",a,"valueType: ",c,"isParent: ",u);const h=u?Object.entries(a).map((e=>{let[n,a]=e;return r.createElement(i,{data:t,key:n,ymlKey:n,value:a,indent:s+1})})):null,d=t.split("\n").find((e=>(console.log("Checking row: ",e,"for: ",n),e.trim().startsWith(n+":"))));let p=null;if(d.includes("#")&&(p=d.split("#")[1]),u)return r.createElement(r.Fragment,null,r.createElement("tr",null,r.createElement("td",{colSpan:3},r.createElement("code",null,n,":"))),h);let m="";for(let r=0;r<s;r++)m+="&nbsp;";const f=r.createElement("tr",null,r.createElement("td",null,r.createElement("span",{dangerouslySetInnerHTML:{__html:m}}),r.createElement("code",null,n.toString())),r.createElement("td",null,r.createElement("code",null,c.toString())),r.createElement("td",null,r.createElement("code",null,a.toString())));return p?r.createElement(r.Fragment,null,f,r.createElement("tr",null,r.createElement("td",{colSpan:3},r.createElement("span",{dangerouslySetInnerHTML:{__html:m}}),r.createElement(o.D,{children:p,components:{p:l}})))):f}function s(e){let{name:t,data:n}=e;console.log(t,n);const o=(0,a.Qc)(n);console.log(o);Object.entries(o).map((e=>{let[t,n]=e;return"object"===typeof n?`${t}:\n  ${Object.entries(n).map((e=>{let[t,n]=e;return`${t}: ${n}`})).join("\n  ")}`:`${t}: ${n}`}));return r.createElement(r.Fragment,null,r.createElement("div",{className:"table-responsive"},r.createElement("table",{className:"table table-striped table-bordered"},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Config"),r.createElement("th",null,"Type"),r.createElement("th",null,"Default"))),r.createElement("tbody",null,Object.entries(o).map((e=>{let[t,a]=e;return r.createElement(i,{data:n,key:t,ymlKey:t,value:a,indent:0})}))))))}},64965:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),o=n(39446);const l={layout:"default",title:"Allow/Restrictions Configuration Options"},i="TARDIS Allow/Restrictions configuration options",s={unversionedId:"configuration/configuration-allow",id:"configuration/configuration-allow",title:"Allow/Restrictions Configuration Options",description:"These are the plugin restriction configuration options, found under allow.",source:"@site/docs/configuration/configuration-allow.mdx",sourceDirName:"configuration",slug:"/configuration/configuration-allow",permalink:"/TARDIS-Docs/configuration/configuration-allow",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/configuration/configuration-allow.mdx",tags:[],version:"current",frontMatter:{layout:"default",title:"Allow/Restrictions Configuration Options"},sidebar:"docs",previous:{title:"Plugin Configuration",permalink:"/TARDIS-Docs/category/plugin-configuration"},next:{title:"creation configuration options",permalink:"/TARDIS-Docs/configuration/configuration-creation"}},c={},u=[],h={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tardis-allowrestrictions-configuration-options"},"TARDIS Allow/Restrictions configuration options"),(0,a.kt)("p",null,"These are the plugin restriction configuration options, found under ",(0,a.kt)("inlineCode",{parentName:"p"},"allow"),".\nA sample is provided below, while the table at the bottom of the page lists all the options and their default values."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="/plugins/TARDIS/config.yml"',title:'"/plugins/TARDIS/config.yml"'},"allow:\n  mob_farming: true\n  spawn_eggs: true\n  emergency_npc: true\n  external_gravity: false\n  achievements: true\n  autonomous: true\n  hads: true\n  tp_switch: true\n  all_blocks: false\n  sfx: true\n  wg_flag_set: true\n  zero_room: false\n  power_down: true\n  power_down_on_quit: false\n  player_difficulty: true\n  invisibility: true\n  guardians: false\n  village_travel: false\n  3d_doors: false\n  repair: true\n  weather_set: false\n  force_field: 8\n  admin_bypass: false\n  perception_filter: true\n")),(0,a.kt)(o.Z,{name:"/plugins/TARDIS/config.yml",data:"allow:\n      mob_farming: true # Sets whether players can [farm mobs](farming) when entering the TARDIS.\n      spawn_eggs: true # Sets whether the player receives mob spawn eggs when TARDIS mob farming (and there is no farm room grown).\n      emergency_npc: true # Sets whether the [Emergency Program One](emergency-program-one) feature is enabled.\n      external_gravity: false # Sets whether the [Gravity Wells](gravity-wells) can be set up outside of the TARDIS.\n      achievements: true # Sets whether players can gain [TARDIS achievements](achievements).\n      autonomous: true # Sets whether players can use the [autonomous function](autonomous).\n      hads: true # Sets whether the TARDIS can [escape hostile](hads) actions.\n      tp_switch: true # Sets whether players can set and switch resource packs when entering and exiting the TARDIS.\n      all_blocks: false # Sets whether the chameleon circuit is allowed to use precious blocks such as GOLD and DIAMOND. This also affects whether players are allowed to change the TARDIS Key to any item \u2014 if set to `false`, then keys are restricted to the items listed under `keys:` in _blocks.yml_.\n      sfx: true # Sets whether sound effects are played in the TARDIS interior \u2014 this overrides user preferences if turned off.\n      wg_flag_set: true # Sets whether players can set the build flag (allow, deny) in their TARDIS region.\n      zero_room: false # Sets whether players can grow a Zero room. If this is set to true using the `/tardisconfig zero_room true` command, the plugin wil attempt to create the `TARDIS_Zero_Room` world if it doesn\u2019t yet exist.\n      power_down: true # Sets whether players can power down their TARDIS.\n      power_down_on_quit: false # Sets whether a player\u2019s TARDIS automatically powers down when the player leaves the server.\n      player_difficulty: true # Sets whether players can use the `/tardisprefs difficulty [easy | hard]` command to change their personal difficulty setting. See [this ticket](https://dev.bukkit.org/bukkit-plugins/tardis/tickets/689-tardis-console-modes/) for the reasoning behind it all.\n      invisibility: true # Sets whether players can use the invisibility Chameleon preset. See [Invisibility](invisibility) for more info.\n      guardians: false # Sets whether players can farm guardians when entering the TARDIS, and whether guardians will randomly spawn in the pool room if the door is left open.\n      village_travel: false # Sets whether players can use the `/tardistravel [structure|village]` command to time travel to a village or other Minecraft structure.\n      3d_doors: false # Sets whether TARDIS owners can see their door when the exterior is set to the INVISIBLE preset. They must be wearing 3D Glasses and looking at the block that the door would normally be placed on.\n      repair: true # Sets whether players can repair a damaged TARDIS interior.\n      weather_set: false # Sets whether players can use the `/tardisweather` command or the TARDIS Weather GUI.\n      force_field: 8 # If set to greater than `0`, determines whether players can activate the TARDIS force field and sets the range of the force field effect. Set to `0` to disable.\n      admin_bypass: false # Sets whether players the permission `tardis.admin` can bypass TARDIS travel location and plugin protection checks.\n      perception_filter: true # Sets whether players can use the [perception filter](perception-filter).\n    ",mdxType:"ConfigTable"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/category/plugin-configuration"},"Back to main configuration page")))}p.isMDXComponent=!0}}]);