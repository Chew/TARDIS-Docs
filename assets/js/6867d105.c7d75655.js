"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[3201],{42498:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var a=n(67294),l=n(84173),r=n(9547),o=n(52263),c=n(87462),s=n(39960);const i={flex:"flex__eIO",project:"project_r_IU",projectGitHub:"projectGitHub_igUy",projects:"projects_AiCc",projectsContainer:"projectsContainer_dtla"};function m(e){return a.createElement("div",{className:i.project},a.createElement("div",{className:i.flex},a.createElement(s.Z,{className:i.projectGitHub,to:e.html_url},e.name),a.createElement("p",null,e.body)),a.createElement("div",null,a.createElement(s.Z,{className:"button button--primary",to:e.assets[0].browser_download_url},"Download")))}function u(e){return e=Object.values(e),a.createElement("section",{className:i.projects},a.createElement("div",{className:i.projectsContainer},e.map(((e,t)=>(e.body=0==t?"Latest build from the Jenkins server.":"TARDIS for Spigot / Paper "+e.tag_name+".",a.createElement(m,(0,c.Z)({key:e.id},e)))))))}function d(){const{siteConfig:e}=(0,o.Z)();return a.createElement("header",{className:r.Z.heroBanner},a.createElement("div",{className:"container"},a.createElement("h1",{className:"hero__title"},"Download TARDIS"),a.createElement("p",{className:"hero__subtitle"},e.tagline)))}function p(){const[e,t]=(0,a.useState)([]),[n,r]=(0,a.useState)(!1),[o,c]=(0,a.useState)(null);return(0,a.useEffect)((()=>{fetch("https://api.github.com/repos/eccentricdevotion/TARDIS/releases",{method:"GET"}).then((e=>e.json())).then((e=>{t(e),r(!0),console.log("let's retrieve the data",e)}),(e=>{r(!0),c(e)}))}),[]),n?(console.log("let's show the data",e),a.createElement(l.Z,{title:"Download",description:"Download TARDIS"},a.createElement(d,null),a.createElement("main",null,a.createElement(u,e)))):a.createElement(l.Z,{title:"Download",description:"Download TARDIS"},a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"50vh",fontSize:"20px"}},a.createElement("div",null,a.createElement("p",null,"Download TARDIS"),a.createElement("p",null,"Grabbing builds..."))))}},9547:(e,t,n)=>{n.d(t,{Z:()=>a});const a={heroBanner:"heroBanner__Akg",buttons:"buttons_HJQ5"}}}]);