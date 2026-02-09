import {Viewer} from "@photo-sphere-viewer/core";
import {GalleryPlugin} from '@photo-sphere-viewer/gallery-plugin';
import React, {useEffect} from "react";
// import css
import "@photo-sphere-viewer/core/index.css";
import "@photo-sphere-viewer/gallery-plugin/index.css";
export function PhotoSphereGallery() {
    const id = "viewer";
    // when the component is mounted, create a new viewer
    useEffect(() => {
       const viewer = new Viewer({
            plugins: [
                [GalleryPlugin, {
                    visibleOnLoad: true,
                }],
            ],    
            container: id,
            panorama: "/images/spheres/ancient.jpg",
            defaultZoomLvl: 0,
        });
        
        const gallery = viewer.getPlugin(GalleryPlugin);
        
        gallery.setItems([
            {
                id: 'pano-ancient',
                name: 'Ancient',
                panorama: '/images/spheres/ancient.jpg',
                thumbnail: '/images/spheres/thumbs/ancient.jpg',
                options: {
                    caption: 'Ancient City TARDIS — inspired by the deep dark — <strong>Size:</strong> SMALL',
                },
            },
            {
                id: 'pano-ars',
                name: 'ARS',
                panorama: '/images/spheres/ars.jpg',
                thumbnail: '/images/spheres/thumbs/ars.jpg',
                options: {
                    caption: '‘ARS’ TARDIS — Lots of quartz — <strong>Size:</strong> SMALL',
                },
            },
            {
                id: 'pano-bone',
                name: 'BONE',
                panorama: '/images/spheres/bone.jpg',
                thumbnail: '/images/spheres/thumbs/bone.jpg',
                options: {
                    caption: 'An early style console — using bone blocks as roundels :) — <strong>Size:</strong> SMALL',
                },
            },
            {
                id: 'pano-budget',
                name: 'BUDGET',
                panorama: '/images/spheres/budget.jpg',
                thumbnail: '/images/spheres/thumbs/budget.jpg',
                options: {
                    caption: 'Default sized TARDIS — good if you don’t like walking too far to the console :) — <strong>Size:</strong> SMALL',
                },
            },
            {
                id: 'pano-bigger',
                name: 'BIGGER',
                panorama: '/images/spheres/bigger.jpg',
                thumbnail: '/images/spheres/thumbs/bigger.jpg',
                options: {
                    caption: 'Bigger TARDIS — you could swing a cat in here! — <strong>Size:</strong> MEDIUM',
                },
            },
            {
                id: 'pano-cave',
                name: 'CAVE',
                panorama: '/images/spheres/cave.jpg',
                thumbnail: '/images/spheres/thumbs/cave.jpg',
                options: {
                    caption: 'Cave TARDIS — you could be in a cave in your TARDIS! — <strong>Size:</strong> SMALL',
                },
            },
            {
                id: 'pano-copper',
                name: 'COPPER',
                panorama: '/images/spheres/copper.jpg',
                thumbnail: '/images/spheres/thumbs/copper.jpg',
                options: {
                    caption: 'Copper TARDIS — experience copper like you’ve never experienced before! — <strong>Size:</strong> MASSIVE',
                },
            },
            {
                id: 'pano-coral',
                name: 'CORAL',
                panorama: '/images/spheres/coral.jpg',
                thumbnail: '/images/spheres/thumbs/coral.jpg',
                options: {
                    caption: '‘Coral’ TARDIS — The Tenth Doctor’s TARDIS (thanks to vistaero) — <strong>Size:</strong> TALL',
                },
            },
            {
                id: 'pano-cursed',
                name: 'CURSED',
                panorama: '/images/spheres/cursed.jpg',
                thumbnail: '/images/spheres/thumbs/cursed.jpg',
                options: {
                    caption: '‘Cursed’ TARDIS — A dark version of the fifteenth Doctor’s TARDIS (thanks to airomis) — <strong>Size:</strong> MASSIVE',
                },
            },
            {
                id: 'pano-delta',
                name: 'DELTA',
                panorama: '/images/spheres/delta.jpg',
                thumbnail: '/images/spheres/thumbs/delta.jpg',
                options: {
                    caption: 'Nether Delta TARDIS — experience the nether delta inside your TARDIS! — <strong>Size:</strong> MEDIUM',
                },
            },
            {
                id: 'pano-deluxe',
                name: 'DELUXE',
                panorama: '/images/spheres/deluxe.jpg',
                thumbnail: '/images/spheres/thumbs/deluxe.jpg',
                options: {
                    caption: 'Deluxe TARDIS — luxury in a box — <strong>Size:</strong> TALL',
                },
            },
            {
                id: 'pano-diner',
                name: 'DINER',
                panorama: '/images/spheres/diner.jpg',
                thumbnail: '/images/spheres/thumbs/diner.jpg',
                options: {
                    caption: 'Clara&rsquo;s Diner — An interior inspired by the TV episodes &lsquo;Impossible Astronaut&rsquo; and &lsquo;Hell Bent&rsquo; — <strong>Size:</strong> WIDE',
                },
            },
            {
                id: 'pano-division',
                name: 'DIVISION',
                panorama: '/images/spheres/division.jpg',
                thumbnail: '/images/spheres/thumbs/division.jpg',
                options: {
                    caption: 'Division TARDIS — A TARDIS inspired by <a href="https://tardis.wiki/wiki/The_Division" target="_blank">The Division ship outpost</a> — <strong>Size:</strong> MEDIUM',
                },
            },
            {
                id: 'pano-eighth',
                name: 'EIGHTH',
                panorama: '/images/spheres/eighth.jpg',
                thumbnail: '/images/spheres/thumbs/eighth.jpg',
                options: {
                    caption: '‘Eighth’ TARDIS — 8th Doctor’s TARDIS (based on [designed by DT10](https://www.youtube.com/watch?v=dMZ-yqHJDLo)) — <strong>Size:</strong> MASSIVE',
                },
            },
            {
                id: 'pano-eleventh',
                name: 'ELEVENTH',
                panorama: '/images/spheres/eleventh.jpg',
                thumbnail: '/images/spheres/thumbs/eleventh.jpg',
                options: {
                    caption: '‘Eleventh’ TARDIS — It’s smaller on the outside... A TARDIS inspired by 11th Doctor’s TARDIS — <strong>Size:</strong> TALL',
                },
            },
            {
                id: 'pano-ender',
                name: 'ENDER',
                panorama: '/images/spheres/ender.jpg',
                thumbnail: '/images/spheres/thumbs/ender.jpg',
                options: {
                    caption: '‘Ender’ TARDIS — An End dimension inspired interior (thanks to ToppanaFIN) — <strong>Size:</strong> SMALL',
                },
            },
            {
                id: 'pano-factory',
                name: 'FACTORY',
                panorama: '/images/spheres/factory.jpg',
                thumbnail: '/images/spheres/thumbs/factory.jpg',
                options: {
                    caption: 'Factory TARDIS — The 1st Doctor’s Factory TARDIS (thanks to vistaero) — <strong>Size:</strong> MEDIUM',
                },
            },
            {
                id: 'pano-fifteenth',
                name: 'FIFTEENTH',
                panorama: '/images/spheres/fifteenth.jpg',
                thumbnail: '/images/spheres/thumbs/fifteenth.jpg',
                options: {
                    caption: '‘Impossible’ TARDIS — The fifteenth Doctor’s TARDIS (thanks to airomis) — <strong>Size:</strong> MASSIVE',
                },
            },
            {
                id: 'pano-fugitive',
                name: 'FUGITIVE',
                panorama: '/images/spheres/fugitive.jpg',
                thumbnail: '/images/spheres/thumbs/fugitive.jpg',
                options: {
                    caption: 'Fugitive TARDIS — Ruth (The Fugitive Doctor) Clayton’s Console (based on <a href="https://www.youtube.com/watch?v=aykwXVemSs8" target="_blank">Ruth TARDIS designed by DT10</a> — <strong>Size:</strong> MEDIUM',
                },
            },
            {
                id: 'pano-hell-bent',
                name: 'HELL BENT',
                panorama: '/images/spheres/hell_bent.jpg',
                thumbnail: '/images/spheres/thumbs/hell_bent.jpg',
                options: {
                    caption: 'Clara&rsquo;s TARDIS — Piloted by Clara Oswald and Ashildr — <strong>Size:</strong> SMALL',
                },
            },
            {
                id: 'pano-hospital',
                name: 'HOSPITAL',
                panorama: '/images/spheres/hospital.jpg',
                thumbnail: '/images/spheres/thumbs/hospital.jpg',
                options: {
                    caption: 'St John’s Hospital TARDIS — A medical themed console — <strong>Size:</strong> SMALL',
                },
            },
            {
                id: 'pano-master',
                name: 'MASTER',
                panorama: '/images/spheres/master.jpg',
                thumbnail: '/images/spheres/thumbs/master.jpg',
                options: {
                    caption: '‘Master’ TARDIS — The Master’s TARDIS (thanks to ShadowAssociate) — <strong>Size:</strong> TALL',
                },
            },
            {
                id: 'pano-mechanical',
                name: 'MECHANICAL',
                panorama: '/images/spheres/mechanical.jpg',
                thumbnail: '/images/spheres/thumbs/mechanical.jpg',
                options: {
                    caption: '‘Mechanical’ TARDIS — adapted from design by <a href="https://www.planetminecraft.com/data-pack/new-tardis-mod-mechanical-interior-datapack/" target="_blank">Plastic Straw</a> — <strong>Size:</strong> MEDIUM',
                },
            },
            {
                id: 'pano-original',
                name: 'ORIGINAL',
                panorama: '/images/spheres/original.jpg',
                thumbnail: '/images/spheres/thumbs/original.jpg',
                options: {
                    caption: 'The original console from v1.0 of the TARDIS plugin — For those with nostalgia — <strong>Size:</strong> SMALL',
                },
            },
            {
                id: 'pano-plank',
                name: 'PLANK',
                panorama: '/images/spheres/plank.jpg',
                thumbnail: '/images/spheres/thumbs/plank.jpg',
                options: {
                    caption: '‘Plank’ TARDIS — A woody interior — <strong>Size:</strong> SMALL',
                },
            },
            {
                id: 'pano-pyramid',
                name: 'PYRAMID',
                panorama: '/images/spheres/pyramid.jpg',
                thumbnail: '/images/spheres/thumbs/pyramid.jpg',
                options: {
                    caption: '‘Pyramid’ TARDIS — A sandstone interior (thanks to Airomis) — <strong>Size:</strong> SMALL',
                },
            },
            {
                id: 'pano-redstone',
                name: 'REDSTONE',
                panorama: '/images/spheres/redstone.jpg',
                thumbnail: '/images/spheres/thumbs/redstone.jpg',
                options: {
                    caption: '‘Redstone’ TARDIS — Multi-level madness — <strong>Size:</strong> MEDIUM',
                },
            },
            {
                id: 'pano-rotor',
                name: 'ROTOR',
                panorama: '/images/spheres/rotor.jpg',
                thumbnail: '/images/spheres/thumbs/rotor.jpg',
                options: {
                    caption: '‘Rotor’ TARDIS — An animated time rotor TARDIS — <strong>Size:</strong> SMALL',
                },
            },
            {
                id: 'pano-rustic',
                name: 'RUSTIC',
                panorama: '/images/spheres/rustic.jpg',
                thumbnail: '/images/spheres/thumbs/rustic.jpg',
                options: {
                    caption: '‘Rustic’ TARDIS — With a 3D-modelled console — <strong>Size:</strong> MEDIUM',
                },
            },
            {
                id: 'pano-sidrat',
                name: 'SIDRAT',
                panorama: '/images/spheres/sidrat.jpg',
                thumbnail: '/images/spheres/thumbs/sidrat.jpg',
                options: {
                    caption: 'Space and Inter-time Dimensional Robot All-purpose Transporter — Your army awaits — <strong>Size:</strong> MEDIUM',
                },
            },
            {
                id: 'pano-steampunk',
                name: 'STEAMPUNK',
                panorama: '/images/spheres/steampunk.jpg',
                thumbnail: '/images/spheres/thumbs/steampunk.jpg',
                options: {
                    caption: '‘Steampunk’ TARDIS — Small, but steamy — <strong>Size:</strong> SMALL',
                },
            },
            {
                id: 'pano-tom',
                name: 'TOM',
                panorama: '/images/spheres/tom.jpg',
                thumbnail: '/images/spheres/thumbs/tom.jpg',
                options: {
                    caption: '‘Tom’ TARDIS — Tom Baker’s console — <strong>Size:</strong> SMALL',
                },
            },
            {
                id: 'pano-thirteenth',
                name: 'THIRTEENTH',
                panorama: '/images/spheres/thirteenth.jpg',
                thumbnail: '/images/spheres/thumbs/thirteenth.jpg',
                options: {
                    caption: 'The 13th Doctor’s TARDIS — <strong>Size:</strong> MEDIUM',
                },
            },
            {
                id: 'pano-twelfth',
                name: 'TWELFTH',
                panorama: '/images/spheres/twelfth.jpg',
                thumbnail: '/images/spheres/thumbs/twelfth.jpg',
                options: {
                    caption: '‘Twelfth’ TARDIS — The Twelfth Doctor’s TARDIS — <strong>Size:</strong> MEDIUM',
                },
            },
            {
                id: 'pano-war',
                name: 'WAR',
                panorama: '/images/spheres/war.jpg',
                thumbnail: '/images/spheres/thumbs/war.jpg',
                options: {
                    caption: 'The War Doctor’s TARDIS — <strong>Size:</strong> SMALL',
                },
            },
            {
                id: 'pano-weathered',
                name: 'WEATHERED',
                panorama: '/images/spheres/weathered.jpg',
                thumbnail: '/images/spheres/thumbs/weathered.jpg',
                options: {
                    caption: 'A weathered copper TARDIS — <strong>Size:</strong> SMALL',
                },
            },
        ]);
    });
    
    return <div id={id} style={{width: "100%", height: "50vh"}}></div>;
}
