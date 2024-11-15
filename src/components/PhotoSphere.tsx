import {Viewer} from "@photo-sphere-viewer/core";
import React, {useEffect} from "react";

// import css
import "@photo-sphere-viewer/core/index.css";

export function PhotoSphere({ src }: { src: string }) {

    let len = src.length - 4;
    let name = src.substring(0,len);
    let upperFirst = name.charAt(0).toUpperCase() + name.substring(1);
    const id = "viewer-" + name;

    // when the component is mounted, create a new viewer
    useEffect(() => {
        new Viewer({
            container: id,
            panorama: "/images/spheres/" + src,
            defaultZoomLvl: 0,
            caption: upperFirst,
        });
    });

    return <div id={id} style={{width: "100%", height: "50vh"}}></div>;
}
