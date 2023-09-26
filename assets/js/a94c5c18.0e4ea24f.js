"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[9946],{27263:(e,n,a)=>{a.d(n,{Z:()=>d,w:()=>r});var t=a(67294),s=a(34360),o=a(12699);const r=e=>{const{children:n}=e;return n};function i(e){let{yml:n,cmd:a}=e,s=n[a].aliases;const o="object"==typeof s?s.join(", "):s;return t.createElement(t.Fragment,null,t.createElement("tr",null,t.createElement("td",{className:"indent0",id:a},t.createElement("code",null,"/",a)),t.createElement("td",null,t.createElement("code",null,o)),t.createElement("td",null,t.createElement("code",null,n[a].permission))),t.createElement("tr",null,t.createElement("td",{colSpan:3},n[a].description)),t.createElement("tr",null,t.createElement("td",{colSpan:3},t.createElement("code",null,n[a].usage.replace("<command>",a)))))}function m(e){let{ymlKey:n,value:a,cmd:s}=e,i=a.permission,m=null!=i?"__Permission:__ `"+i+"`":"";return t.createElement(t.Fragment,null,t.createElement("tr",null,t.createElement("td",{className:"indent1"},t.createElement("code",null,n)),t.createElement("td",null,t.createElement(o.D,{children:a.description,components:{p:r}}),t.createElement("br",null),t.createElement(o.D,{children:m,components:{p:r}})),t.createElement("td",null,t.createElement("code",null,a.usage.replace("<command>",s)))))}function d(e){let{data:n,args:a,cmd:o,extra:r}=e;const d=(0,s.Qc)(n),c=(0,s.Qc)(a);let l="",p="";return"false"==r&&(l=t.createElement("thead",null,t.createElement("tr",null,t.createElement("th",null,"Command"),t.createElement("th",null,"Aliases"),t.createElement("th",null,"Permission"))),p=t.createElement(i,{key:o,yml:d,cmd:o})),t.createElement(t.Fragment,null,t.createElement("div",{className:"table-responsive"},t.createElement("table",{className:"table table-striped table-bordered"},l,t.createElement("tbody",null,p,t.createElement("tr",null,t.createElement("th",null,"Arguments"),t.createElement("th",null,"Description"),t.createElement("th",null,"Usage")),Object.entries(c).map((e=>{let[n,a]=e;return t.createElement(m,{key:n,ymlKey:n,value:a,indent:0,cmd:o})}))))))}},25129:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>m,toc:()=>c});var t=a(87462),s=(a(67294),a(3905)),o=a(27263);const r={layout:"default",title:"Big list of TARDIS sub commands"},i="TARDIS sub commands",m={unversionedId:"commands/tardis-commands-table",id:"commands/tardis-commands-table",title:"Big list of TARDIS sub commands",description:"A list of all the /tardis sub commands.",source:"@site/docs/commands/tardis-commands-table.mdx",sourceDirName:"commands",slug:"/commands/tardis-commands-table",permalink:"/TARDIS-Docs/commands/tardis-commands-table",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/commands/tardis-commands-table.mdx",tags:[],version:"current",frontMatter:{layout:"default",title:"Big list of TARDIS sub commands"},sidebar:"docs",previous:{title:"Sudo Command",permalink:"/TARDIS-Docs/commands/sudo"},next:{title:"TARDIS Commands",permalink:"/TARDIS-Docs/commands/tardis"}},d={},c=[{value:"<code>/tardis</code>",id:"tardis",level:2}],l={toc:c},p="wrapper";function u(e){let{components:n,...a}=e;return(0,s.kt)(p,(0,t.Z)({},l,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"tardis-sub-commands"},"TARDIS sub commands"),(0,s.kt)("p",null,"A list of all the ",(0,s.kt)("inlineCode",{parentName:"p"},"/tardis")," sub commands."),(0,s.kt)("h2",{id:"tardis"},(0,s.kt)("inlineCode",{parentName:"h2"},"/tardis")),(0,s.kt)(o.Z,{data:"tardis:\n        aliases: tt\n        description: Manipulate TARDISs (TARDISes?) with various arguments (list, save, find, help, etc).\n        usage: /<command> [subcommand] [options]...\n        permission: tardis.use\n    ",args:"\n    abandon:\n      description: Abandon your current TARDIS.\n      permission: tardis.abandon\n      usage: /<command> abandon\n    abort:\n      description: Stop growing a TARDIS room.\n      permission: tardis.room\n      usage: /<command> abort [task ID number]\n    add:\n      description: Add a companion that can travel with you in your TARDIS.\n      permission: tardis.add\n      usage: /<command> add [player name]\n    arch_time:\n      description: Display the time that a player must remain Chameleon arched.\n      permission: tardis.chameleonarch\n      usage: /<command> arch_time\n    archive:\n      description: Archive your current TARDIS console.\n      permission: tardis.archive\n      usage: /<command> archive [scan | add | remove | update | description | y] [name] <y_value>\n    arsremove:\n      description: Remove the TARDIS' ARS records so that manual room growing can be used.\n      permission: tardis.use\n      usage: /<command> arsremove\n    bell:\n      description: Toggle the TARDIS Cloister Bell on and off.\n      permission: tardis.use\n      usage: /<command> bell [on | off]\n    check_loc:\n      description: Checks the location the player is targeting is suitable for landing the TARDIS.\n      permission: tardis.use\n      usage: /<command> check_loc\n    colourise:\n      aliases:\n      - colorize\n      description: Allows a player to change the colour of their TARDIS beacon glass with a Sonic Screwdriver.\n      permission: tardis.upgrade\n      usage: /<command> colourise\n    comehere:\n      description: Make the TARDIS come to the block you are looking at.\n      permission: tardis.timetravel\n      usage: /<command> comehere\n    construct:\n      description: Set the sign text of the TARDIS CONSTRUCT Chameleon preset.\n      permission: tardis.use\n      usage: /<command> construct [line number] [text with optional colour code]\n    cube:\n      description: Show a list of players who are carrying a Siege Cube.\n      permission: tardis.find\n      usage: /<command> cube\n    desktop:\n      aliases:\n      - theme\n      - upgrade\n      description: Open the Desktop Theme GUI.\n      permission: tardis.upgrade\n      usage: /<command> desktop\n    direction:\n      description: Change the direction the Police Box door is facing.\n      permission: tardis.timetravel\n      usage: /<command> direction [north | west | south | east]\n    door:\n      description: Opens or closes the TARDIS door.\n      permission: tardis.use\n      usage: /<command> door [open | close]\n    egg:\n      description: Play the Doctor Who Theme (requires TARDIS Resource Pack).\n      permission: tardis.use\n      usage: /<command> egg [SIXTY_THREE | ZERO_FIVE | TWENTY_TWENTY | RANDOM]\n    eject:\n      description: Allows a player to eject entities from their TARDIS.\n      permission: tardis.eject\n      usage: /<command> eject\n    ep1:\n      description: Allows a player to make Emergency Programme One appear.\n      permission: tardis.use\n      usage: /<command> abandon\n    erase:\n      description: Allows a player to erase the TARDIS Storage Disk they have in their hand.\n      permission: tardis.storage\n      usage: /<command> erase\n    excite:\n      description: Allows a player to initiate atmospheric exitation around their TARDIS.\n      permission: tardis.atmospheric\n      usage: /<command> excite\n    exterminate:\n      description: Delete your TARDIS.\n      permission: tardis.exterminate\n      usage: /<command> exterminate\n    find:\n      description: Shows you the location of your TARDIS.\n      permission: tardis.find\n      usage: /<command> find\n    handbrake:\n      description: Allows a player to toggle the TARDIS handbrake on or off.\n      permission: tardis.use\n      usage: /<command> handbrake [on | off]\n    help:\n      description: View TARDIS help pages.\n      usage: /<command> help [command]\n    hide:\n      description: Hide the TARDIS Police Box.\n      permission: tardis.rebuild\n      usage: /<command> hide\n    home:\n      aliases:\n      - sethome\n      description: Save a time travel location as home.\n      permission: tardis.home\n      usage: /<command> home\n    inside:\n      description: List players inside your TARDIS.\n      permission: tardis.use\n      usage: /<command> inside\n    item:\n      description: Allows a player to update TARDIS circuits from previous versions to the newer custom model data item.\n      permission: tardis.use\n      usage: /<command> item [hand | inventory]\n    jettison:\n      description: Remove a TARDIS room.\n      permission: tardis.room\n      usage: /<command> jettison [room type]\n    lamps:\n      description: Scan the main control room for new or moved lamp blocks.\n      permission: tardis.use\n      usage: /<command> lamps\n    list:\n      description: List saved time travel locations, companions, areas and rechargers.\n      permission: tardis.list\n      usage: /<command> list [saves | companions | areas | rechargers]\n    make_her_blue:\n      description: Makes the TARDIS visible again if it was using the INVISIBLE preset.\n      permission: tardis.use\n      usage: /<command> make_her_blue\n    monsters:\n      description: Reset monster spawning or kill all monsters in the TARDIS.\n      permission: tardis.use\n      usage: /<command> monsters [ reset | kill ]\n    namekey:\n      description: Rename the TARDIS key Item.\n      permission: tardis.timetravel\n      usage: Hold the key in your hand, then type /<command> namekey [new name]\n    occupy:\n      description: Toggle TARDIS occupation.\n      permission: tardis.timetravel\n      usage: /<command> occupy\n    rebuild:\n      description: Rebuild the TARDIS.\n      permission: tardis.rebuild\n      usage: /<command> rebuild\n    remove:\n      description: Remove a companion from your TARDIS.\n      permission: tardis.add\n      usage: /<command> remove [ player name | all ]\n    removesave:\n      description: Delete a saved destination.\n      permission: tardis.save\n      usage: /<command> removesave [name]\n    renamesave:\n      description: Rename a saved destination.\n      permission: tardis.save\n      usage: /<command> renamesave [old name] [new name]\n    reordersave:\n      description: Reorder a saved destination in the TARDIS Saves GUI.\n      permission: tardis.save\n      usage: /<command> reordersave [name] [slot number]\n    rescue:\n      description: Rescue a player in the TARDIS.\n      permission: tardis.timetravel.rescue\n      usage: /<command> rescue [player]\n    room:\n      description: Grow a TARDIS room.\n      permission: tardis.room\n      usage: /<command> room [room type | help]\n    save:\n      description: Save the current location of the TARDIS Police Box.\n      permission: tardis.save\n      usage: /<command> save [name] <true>\n    save_player:\n      description: Allows a player to save a Player to a blank TARDIS Storage Disk.\n      permission: tardis.storage\n      usage: /<command> save_player [player]\n    saveicon:\n      description: Change a saved destinations icon in the TARDIS Saves GUI.\n      permission: tardis.save\n      usage: /<command> saveicon [save] [material]\n    secondary:\n      description: Set secondary TARDIS controls.\n      permission: tardis.update\n      usage: /<command> secondary [ button | world-repeater | x-repeater | z-repeater | y-repeater | artron | handbrake | door ]\n    section:\n      description: Open the TARDIS Update chat GUI.\n      permission: tardis.update\n      usage: /<command> section\n    setdest:\n      description: Save a destination determined by the block you are looking at.\n      permission: tardis.save\n      usage: /<command> setdest [name]\n    tagtheood:\n      description: Display the 'Tag the Ood' game statistics.\n      permission: tardis.tag\n      usage: /<command> tagtheood\n    transmat:\n      description: Teleports to or sets an internal TARDIS transmat location.\n      permission: tardis.transmat\n      usage: /<command> transmat [ tp | add | update | remove | list ] [name]\n    update:\n      description: Modify the interior of the TARDIS.\n      permission: tardis.update\n      usage:  | \n        /<command> update [ advanced | ars | artron | back | backdoor | beacon | bell | button | chameleon | condenser | control | creeper |  direction | dispenser | door | eps | farm | flight | forcefield | frame | fuel | generator | handbrake | hinge | igloo | info | keyboard | light |  map | monitor | monitor-frame | rail | rotor | save-sign | scanner | siege | smelt | stable | stall | storage | telepathic | temporal |  terminal | throttle | toggle-wool | vault | village | weather | world-repeater | x-repeater | y-repeater | z-repeater | zero ]\n    version:\n      description: Display the TARDIS plugin and CraftBukkit version.\n      usage: /<command> version\n    ",cmd:"tardis",extra:"false",mdxType:"CommandTable"}))}u.isMDXComponent=!0}}]);