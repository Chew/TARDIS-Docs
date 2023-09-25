"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[4177],{85162:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(67294),s=t(86010);const o={tabItem:"tabItem_Ymn6"};function a(e){let{children:n,hidden:t,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,s.Z)(o.tabItem,a),hidden:t},n)}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var r=t(87462),s=t(67294),o=t(86010),a=t(12466),i=t(16550),l=t(91980),p=t(67392),c=t(50012);function d(e){return function(e){return s.Children.map(e,(e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}function u(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??d(t);return function(e){const n=(0,p.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(o),(0,s.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=u(e),[a,i]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[l,p]=g({queryString:t,groupId:r}),[d,h]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,c.Nk)(t);return[r,(0,s.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),f=(()=>{const e=l??d;return m({value:e,tabValues:o})?e:null})();(0,s.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),h(e)}),[p,h,o]),tabValues:o}}var f=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function A(e){let{className:n,block:t,selectedValue:i,selectValue:l,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.o5)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),r=p[t].value;r!==i&&(d(n),l(r))},m=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},p.map((e=>{let{value:n,label:t,attributes:a}=e;return s.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>c.push(e),onKeyDown:m,onClick:u},a,{className:(0,o.Z)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":i===n})}),t??n)})))}function E(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return s.createElement("div",{className:"margin-top--md"},o.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r}))))}function y(e){const n=h(e);return s.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},s.createElement(A,(0,r.Z)({},e,n)),s.createElement(E,(0,r.Z)({},e,n)))}function w(e){const n=(0,f.Z)();return s.createElement(y,(0,r.Z)({key:String(n)},e))}},8209:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(67294),s=t(34360),o=t(12699),a=t(74866),i=t(85162);const l=e=>{const{children:n}=e;return n};function p(e){let{ymlKey:n,value:t}=e,s=t.folder,p=t.image,c="!["+n+"](/images/"+s+"/vanilla/"+p+")",d="!["+n+"](/images/"+s+"/tardis/"+p+")";return r.createElement(r.Fragment,null,r.createElement("h2",null,n),r.createElement("p",null,r.createElement(o.D,{children:t.description,components:{p:l}})),r.createElement(a.Z,{groupId:"images"},r.createElement(i.Z,{value:"vanilla",label:"vanilla",default:!0},r.createElement(o.D,{children:c,components:{p:l}})),r.createElement(i.Z,{value:"tardis",label:"tardis"},r.createElement(o.D,{children:d,components:{p:l}}))))}function c(e){let{imgs:n}=e;const t=(0,s.Qc)(n);return r.createElement(r.Fragment,null,r.createElement("div",{className:"table-responsive"},Object.entries(t).map((e=>{let[n,t]=e;return r.createElement(p,{key:n,ymlKey:n,value:t})}))))}},40016:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(87462),s=(t(67294),t(3905)),o=t(8209);const a={layout:"default",title:"Chameleon Presets"},i="Chameleon Presets",l={unversionedId:"presets",id:"presets",title:"Chameleon Presets",description:"Chameleon Presets can be selected and applied in the Chameleon Circuit GUI. There are 64",source:"@site/docs/presets.mdx",sourceDirName:".",slug:"/presets",permalink:"/TARDIS-Docs/presets",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/presets.mdx",tags:[],version:"current",frontMatter:{layout:"default",title:"Chameleon Presets"},sidebar:"docs",previous:{title:"The Chameleon Circuit",permalink:"/TARDIS-Docs/chameleon-circuit"},next:{title:"The Shell Room",permalink:"/TARDIS-Docs/shell-room"}},p={},c=[{value:"Page one",id:"page-one",level:2},{value:"Page two",id:"page-two",level:2},{value:"Custom model presets",id:"custom-model-presets",level:2}],d={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,s.kt)(u,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"chameleon-presets"},"Chameleon Presets"),(0,s.kt)("p",null,"Chameleon Presets can be selected and applied in the ",(0,s.kt)("a",{parentName:"p",href:"chameleon-circuit"},"Chameleon Circuit")," GUI. There are 64\npresets in total on two pages, plus one special hidden preset, and one custom preset that server admins can set up\nthemselves \u2014 see the ",(0,s.kt)("a",{parentName:"p",href:"custom-preset"},"Custom preset page.")),(0,s.kt)("p",null,"There are also some adaptive presets that are selected by biome when the Chameleon Circuit is set to Adaptive Biome mode.\nYou can view those on the ",(0,s.kt)("a",{parentName:"p",href:"adaptive-presets"},"Adaptive Presets page"),"."),(0,s.kt)("h2",{id:"page-one"},"Page one"),(0,s.kt)("p",null,"These presets use regular Minecraft blocks. When materialising they cycle through stained glass and regular glass for their animation."),(0,s.kt)(o.Z,{imgs:"\nSTAINED:\n  folder: presets\n  image: stained_block.jpg\n  description: The stained glass materialisation animation state.\nGLASS:\n  folder: presets\n  image: glass_block.jpg\n  description: The clear glass materialisation animation state.\nGUI:\n  folder: chameleon\n  image: presets_gui_1.jpg\n  description: The Chameleon Preset GUI.\nANGEL:\n  folder: presets\n  image: angel.jpg\n  description: A weeping angel. Each time it materialises it wings can be either up or down, and its head faces a random direction.\nAPPERTURE:\n  folder: presets\n  image: apperture.jpg\n  description: An Apperture Science portal or two.\nCAKE:\n  folder: presets\n  image: cake.jpg\n  description: A birthday cake.\nCANDY:\n  folder: presets\n  image: candy.jpg\n  description: A candy cane. Brush teeth after use.\nCHALICE:\n  folder: presets\n  image: chalice.jpg\n  description: A quartz chalice. It has water in the top.\nCREEPY:\n  folder: presets\n  image: creepy.jpg\n  description: A creepy preset.\nDESERT:\n  folder: presets\n  image: desert.jpg\n  description: A desert temple.\nDUCK:\n  folder: presets\n  image: duck.jpg\n  description: Rubber ducky, you\u2019re the one, you make bath time so much fun. Rubber ducky I\u2019m awfully fond of you...\nFACTORY:\n  folder: presets\n  image: factory.jpg\n  description: A factory fresh TARDIS, straight of the Gallifrean production line.\nFENCE:\n  folder: presets\n  image: fence.jpg\n  description: A random fence.\nFLOWER:\n  folder: presets\n  image: flower.jpg\n  description: A flower. The petals on this preset turn a random colour each time it materialises.\nGAZEBO:\n  folder: presets\n  image: gazebo.jpg\n  description: A gazebo for your garden.\nGRAVESTONE:\n  folder: presets\n  image: gravestone.jpg\n  description: Here lies a Time Lord.\nHELIX:\n  folder: presets\n  image: helix.jpg\n  description: A double helix.\nJAIL:\n  folder: presets\n  image: jail.jpg\n  description: Go directly to jail!\nJUNGLE:\n  folder: presets\n  image: jungle.jpg\n  description: A jungle temple.\nLAMP:\n  folder: presets\n  image: lamp.jpg\n  description: A lamp post.\nLIBRARY:\n  folder: presets\n  image: library.jpg\n  description: A Time Lord\u2019s library.\nLIGHTHOUSE:\n  folder: presets\n  image: lighthouse.jpg\n  description: A tiny lighthouse.\nMINESHAFT:\n  folder: presets\n  image: mineshaft.jpg\n  description: A mineshaft complete with torches and cobweb.\nNETHER:\n  folder: presets\n  image: nether.jpg\n  description: A small nether fortress.\nNEW:\n  folder: presets\n  image: new.jpg\n  description: The new taller style Police Box. This is the default preset. If the Chameleon Circuit is ON, this will blend in with its surroundings.\nCIRCUIT ON:\n  folder: presets\n  image: chameleonON.jpg\n  description: The NEW preset with the Chameleon Circuit turned on.\nOLD:\n  folder: presets\n  image: old.jpg\n  description: The old style Police Box from the early days of the plugin. If the Chameleon Circuit is ON, this will blend in with its surroundings.\nPARTY:\n  folder: presets\n  image: party.jpg\n  description: A party tent. Bring on the disco sheep. This preset turns a random colour each time it materialises.\nPEANUT:\n  folder: presets\n  image: peanut.jpg\n  description: A peanut butter jar.\nPINE:\n  folder: presets\n  image: pine.jpg\n  description: A snowy spruce tree.\nPORTAL:\n  folder: presets\n  image: portal.jpg\n  description: A nether portal.\nPUNKED:\n  folder: presets\n  image: punked.jpg\n  description: A steam punked exterior.\nROBOT:\n  folder: presets\n  image: robot.jpg\n  description: A robot with a head that faces a random direction.\nSHROOM:\n  folder: presets\n  image: shroom.jpg\n  description: A brown mushroom.\nSNOWMAN:\n  folder: presets\n  image: snowman.jpg\n  description: A snowman, takes one to snow one :)\nSTONE:\n  folder: presets\n  image: column.jpg\n  description: A stone brick column.\nSUBMERGED:\n  folder: presets\n  image: submerged.jpg\n  description: A partially submerged home. If the Chameleon Circuit is ON, this will blend in with its surroundings.\nSWAMP:\n  folder: presets\n  image: swamp.jpg\n  description: A swamp hut.\nTELEPHONE:\n  folder: presets\n  image: telephone.jpg\n  description: A red telephone box.\nTOILET:\n  folder: presets\n  image: toilet.jpg\n  description: A toilet, for when you just need to go...\nTOPSYTURVEY:\n  folder: presets\n  image: topsy.jpg\n  description: An upside down Police Box.\nTORCH:\n  folder: presets\n  image: torch.jpg\n  description: A flaming torch. Be careful where you park!\nVILLAGE:\n  folder: presets\n  image: village.jpg\n  description: A village house of stone and wood.\nWELL:\n  folder: presets\n  image: well.jpg\n  description: A mossy well, the door is inside the well.\nWINDMILL:\n  folder: presets\n  image: windmill.jpg\n  description: A miniature windmill.\nYELLOW:\n  folder: presets\n  image: yellow_sub.jpg\n  description: A yellow submarine.\n",mdxType:"TabbedImages"}),(0,s.kt)("h2",{id:"page-two"},"Page two"),(0,s.kt)("p",null,"Page two contains mostly police box presets in all the Minecraft colours. All these presets use custom item models on an\nArmour Stand. They have custom block models for the materialisation animation as well. These presets can be used to fly\nthe TARDIS exterior see ",(0,s.kt)("a",{parentName:"p",href:"flying"},"Flying the TARDIS"),"."),(0,s.kt)(o.Z,{imgs:"\nTRANSPARENT COLOURED POLICE BOX:\n  folder: presets\n  image: stained.jpg\n  description: The stained transparent materialisation animation state.\nTRANSPARENT POLICE BOX:\n  folder: presets\n  image: glass.jpg\n  description: The transparent materialisation animation state.\nPresets GUI page 2:\n  folder: chameleon\n  image: presets_gui_2.jpg\n  description: The second page of the Chameleon Presets GUI\nPOLICE_BOX_BLUE:\n  folder: presets\n  image: blue.jpg\n  description: A standard blue police box.\nPOLICE_BOX_WHITE:\n  folder: presets\n  image: white.jpg\n  description: A white police box.\nPOLICE_BOX_ORANGE:\n  folder: presets\n  image: orange.jpg\n  description: An orange police box.\nPOLICE_BOX_MAGENTA:\n  folder: presets\n  image: magenta.jpg\n  description: A magenta police box.\nPOLICE_BOX_LIGHT_BLUE:\n  folder: presets\n  image: light_blue.jpg\n  description: A light blue police box.\nPOLICE_BOX_YELLOW:\n  folder: presets\n  image: yellow.jpg\n  description: A yellow police box.\nPOLICE_BOX_LIME:\n  folder: presets\n  image: lime.jpg\n  description: A lime police box.\nPOLICE_BOX_PINK:\n  folder: presets\n  image: pink.jpg\n  description: A pink police box.\nPOLICE_BOX_GRAY:\n  folder: presets\n  image: gray.jpg\n  description: A gray police box.\nPOLICE_BOX_LIGHT_GRAY:\n  folder: presets\n  image: light_gray.jpg\n  description: A light gray police box.\nPOLICE_BOX_CYAN:\n  folder: presets\n  image: cyan.jpg\n  description: A cyan police box.\nPOLICE_BOX_PURPLE:\n  folder: presets\n  image: purple.jpg\n  description: A purple police box.\nPOLICE_BOX_BROWN:\n  folder: presets\n  image: brown.jpg\n  description: A brown police box.\nPOLICE_BOX_GREEN:\n  folder: presets\n  image: green.jpg\n  description: A green police box.\nPOLICE_BOX_RED:\n  folder: presets\n  image: red.jpg\n  description: A red police box.\nPOLICE_BOX_BLACK:\n  folder: presets\n  image: black.jpg\n  description: A black police box.\nWEEPING_ANGEL:\n  folder: presets\n  image: weeping.jpg\n  description: A weeping angel.\nCOLOUR PICKER:\n  description: Mix your own colour police box! Use the colour picker to mix your own favourite colour.\n  folder: chameleon\n  image: colour_picker_gui.jpg\nANY COLOUR:\n  description: Any colour!\n  folder: presets\n  image: any_colour_police_box.jpg\nPANDORICA:\n  folder: presets\n  image: pandorica.jpg\n  description: The Pandorica. This preset has animated opening doors.\n",mdxType:"TabbedImages"}),(0,s.kt)("h2",{id:"custom-model-presets"},"Custom model presets"),(0,s.kt)("p",null,"You can add your own custom models to the plugin - see the ",(0,s.kt)("a",{parentName:"p",href:"custom-model-presets"},"Custom model presets")," page for\nmore details. These presets will appear on page two.\nThe plugin includes two example models (both of which can be flown):"),(0,s.kt)(o.Z,{imgs:"\nType 40:\n  description: A Type 40 time travel capsule.\n  folder: presets\n  image: type_40.jpg\nBad Wolf:\n  folder: presets\n  image: bad_wolf.jpg\n  description: The Bad Wolf TARDIS from new Who Series 1.\n",mdxType:"TabbedImages"}))}m.isMDXComponent=!0}}]);