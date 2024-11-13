import {Viewer} from "@photo-sphere-viewer/core";
import React, {useEffect} from "react";

// import css
import "@photo-sphere-viewer/core/index.css";

export function PhotoSphere({ src }: { src: string }) {
    // generate random id
    const id = "viewer-" + Math.random().toString(36).substring(7);

    // when the component is mounted, create a new viewer
    useEffect(() => {
        new Viewer({
            container: id,
            panorama: "/images/spheres/" + src,
        });
    });

    return <div id={id} style={{width: "100%", height: "50vh"}}></div>;
}
