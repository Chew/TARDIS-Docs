"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[3010],{39446:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(34360),l=n(12699);const o=e=>{const{children:t}=e;return t};function s(e){let{data:t,ymlKey:n,value:r,indent:i=0}=e;const d=typeof r,u="object"===d;n=n.trim().split(".").pop();const c=u?Object.entries(r).map((e=>{let[n,r]=e;return a.createElement(s,{data:t,key:n,ymlKey:n,value:r,indent:i+1})})):null,p=t.split("\n").find((e=>e.trim().startsWith(n+":")));let m=null;p.includes("#")&&(m=p.split("#")[1]);let f="indent"+i;if(u)return a.createElement(a.Fragment,null,a.createElement("tr",null,a.createElement("td",{colSpan:3,class:f,id:n.toString()},a.createElement("code",null,n,":"))),c);const h=a.createElement("tr",null,a.createElement("td",{class:f,id:n.toString()},a.createElement("code",null,n.toString())),a.createElement("td",null,a.createElement("code",null,d.toString())),a.createElement("td",null,a.createElement("code",null,r.toString())));return m?a.createElement(a.Fragment,null,h,a.createElement("tr",null,a.createElement("td",{colSpan:3,class:f},a.createElement(l.D,{children:m,components:{p:o}})))):h}function i(e){let{data:t}=e;const n=(0,r.Qc)(t);return a.createElement(a.Fragment,null,a.createElement("div",{className:"table-responsive"},a.createElement("table",{className:"table table-striped table-bordered"},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Config"),a.createElement("th",null,"Type"),a.createElement("th",null,"Default"))),a.createElement("tbody",null,Object.entries(n).map((e=>{let[n,r]=e;return a.createElement(s,{data:t,key:n,ymlKey:n,value:r,indent:0})}))))))}},51881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),l=n(39446);const o={layout:"default",title:"Planet configuration options"},s="Planet configuration options",i={unversionedId:"configuration/planets",id:"configuration/planets",title:"Planet configuration options",description:"Worlds are added and removed automatically when the plugin is enabled \u2014 it will find newly added worlds, and",source:"@site/docs/configuration/planets.mdx",sourceDirName:"configuration",slug:"/configuration/planets",permalink:"/TARDIS-Docs/configuration/planets",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/configuration/planets.mdx",tags:[],version:"current",frontMatter:{layout:"default",title:"Planet configuration options"},sidebar:"docs",previous:{title:"Monsters configuration",permalink:"/TARDIS-Docs/configuration/monsters"},next:{title:"TARDIS preferences configuration option",permalink:"/TARDIS-Docs/configuration/prefs"}},d={},u=[],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"planet-configuration-options"},"Planet configuration options"),(0,r.kt)("p",null,"Worlds are added and removed automatically when the plugin is enabled \u2014 it will find newly added worlds, and\nremove worlds that no longer exist."),(0,r.kt)("p",null,"You should rarely need to edit this section, as worlds can be included or excluded using\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"/tardisadmin include [world]")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"/tardisadmin exclude [world]")," commands."),(0,r.kt)("p",null,"These are the plugin planet configuration options."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="/plugins/TARDIS/planets.yml"',title:'"/plugins/TARDIS/planets.yml"'},"switch_resource_packs: false\nset_pack_on_join: true\ndefault_resource_pack: 'https://www.dropbox.com/s/utka3zxmer7f19g/Default.zip?dl=1'\ncolour_skies: true\nplanets:\n  TARDIS_TimeVortex:\n    enabled: true\n    resource_pack: default\n    gamemode: SURVIVAL\n    time_travel: false\n    world_type: FLAT\n    environment: NORMAL\n    void: true\n    generator: TARDIS:void\n    gamerules:\n      doWeatherCycle: false\n      doDaylightCycle: false\n    keep_spawn_in_memory: false\n    allow_portals: false\n    alias: TimeVortex\n    icon: CRYING_OBSIDIAN\n  TARDIS_Zero_Room:\n    enabled: false\n    resource_pack: default\n    gamemode: SURVIVAL\n    time_travel: false\n    world_type: FLAT\n    environment: NORMAL\n    void: true\n    generator: TARDIS:void\n    gamerules:\n      doWeatherCycle: false\n      doDaylightCycle: false\n      announceAdvancements: false\n    keep_spawn_in_memory: false\n    allow_portals: false\n    alias: ZeroRoom\n    icon: PINK_WOOL\n  skaro:\n    enabled: false\n    resource_pack: default\n    acid: true\n    acid_damage: 5\n    acid_potions:\n      - WEAKNESS\n      - POISON\n    rust: true\n    flying_daleks: true\n    gamemode: SURVIVAL\n    time_travel: true\n    world_type: NORMAL\n    environment: NORMAL\n    generator: TARDIS:skaro\n    keep_spawn_in_memory: false\n    spawn_other_mobs: true\n    gamerules:\n      doTraderSpawning: false\n      doPatrolSpawning: false\n    allow_portals: false\n    alias: Skaro\n    icon: FIRE_CORAL_BLOCK\n  siluria:\n    enabled: false\n    resource_pack: default\n    gamemode: SURVIVAL\n    time_travel: true\n    world_type: NORMAL\n    environment: NORMAL\n    generator: TARDIS:siluria\n    keep_spawn_in_memory: false\n    spawn_other_mobs: true\n    gamerules:\n      doTraderSpawning: false\n      doPatrolSpawning: false\n    allow_portals: false\n    alias: Siluria\n    icon: BAMBOO_MOSAIC\n  gallifrey:\n    enabled: false\n    resource_pack: default\n    gamemode: SURVIVAL\n    time_travel: true\n    world_type: NORMAL\n    environment: NORMAL\n    generator: TARDIS:gallifrey\n    keep_spawn_in_memory: false\n    spawn_other_mobs: true\n    gamerules:\n      doTraderSpawning: false\n      doPatrolSpawning: false\n    allow_portals: false\n    alias: Gallifrey\n    icon: RED_SAND\n\n")),(0,r.kt)(l.Z,{data:"\nswitch_resource_packs: false # To make the a world look a little different than a regular world, TARDIS can change the resource pack when you switch worlds (you must enable server resource packs in the Minecraft client).\nset_pack_on_join: true # If players join the server in a world managed by TARDIS, setting this to `true` will switch the resource pack for them.                                                                      \ndefault_resource_pack: https://www.dropbox.com/s/utka3zxmer7f19g/Default.zip?dl=1 # This is just an empty resource pack (954 bytes). It is needed to revert back to the default (or other installed) resource pack colours. You can either host your own, or use the one provided. Worlds not listed in the `planets` section will use this.\ncolour_skies: true # Whether to send biome change packets for the Gallifrey and Skaro worlds so that the sky, water, fog, and foliage colours are different than regular worlds.\nplanets:\n    # This is a list of worlds on your server. If you want to use the world resource pack switching feature for other server worlds, you can add them here. Use the `TARDIS_TimeVortex` entry as an example.                                                   \n    planet name:\n        enabled: false # Whether this world should be loaded and managed by TARDIS.\n        time_travel: false # Whether this world can be travelled to using the TARDIS.\n        resource_pack: Default # This is where you specify the URL to the resource pack you want to switch to when entering the world. Host your own, or use the one provided.\n        gamemode: SURVIVAL # The game mode that this world should use. It should be uppercase and one of: `SURVIVAL`, `CREATIVE`, `ADVENTURE`, `SPECTATOR`\n        world_type: NORMAL # The type of world that is generated. Should be uppercase, and one of: `NORMAL` or `FLAT`.\n        environment: NORMAL # The environment of the world that is generated. Should be uppercase, and one of: `NORMAL`, `THE_END`, `NETHER`.\n        generator: DEFAULT # The name of the generator for the world. Should be the name of the plugin that is used or `DEFAULT`.\n        game_rules:\n            example rule: false # A list of game rules that should be applied to the world \u2014 such as: `doWeatherCycle`, `doDaylightCycle` \u2014 values must be `true` or `false`. See [https://minecraft.fandom.com/wiki/Commands/gamerule](https://minecraft.fandom.com/wiki/Commands/gamerule)\n        generate_structures: true # Whether the world should generate vanilla structures \u2014 you would set this to `false` for example, if the generator was set to the Terra World Generator plugin e.g. `Terra:TARTARUS`.\n",mdxType:"ConfigTable"}),(0,r.kt)("p",null,"Each world on your server has their own section in _planets.yml__, however there are TARDIS specific worlds as\nwell:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"planets#planet-skaro"},"Skaro")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"planets#planet-siluria"},"Siluria")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"planets#planet-gallifrey"},"Gallifrey"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"category/plugin-configuration"},"Back to main configuration page")))}m.isMDXComponent=!0}}]);