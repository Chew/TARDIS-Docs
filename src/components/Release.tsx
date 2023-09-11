import Link from "@docusaurus/Link";
import React from "react";
import styles from "../css/release.module.css";

function Release(release: Release) {
    return (
        <div className={styles.project}>
            <div className={styles.flex}>
                <Link className={styles.projectGitHub} to={release.url}>
                    {release.name}
                </Link>
                <p>{release.body}</p>
            </div>
            <div>
                <Link className="button button--primary" to={release.assets[0].browser_download_url}>
                    Download
                </Link>
            </div>
        </div>
    );
}

export default function Releases(releases: Release[]): JSX.Element {
    // releases is an OBJECT not an array, let's try to convert it to an array
    releases = Object.values(releases)

    return (
        <section className={styles.projects}>
            <div className={styles.projectsContainer}>
                {releases.map((release, index) => {
                    // latest release
                    if (index == 0) {
                        release.body = "Latest build from the Jenkins server.";
                    } else {
                        release.body = "TARDIS for Spigot / Paper " + release.tag_name + ".";
                    }

                    return <Release key={release.id} {...release} />;
                })}
            </div>
        </section>
    );
}

interface Release {
    name: string;
    tag_name: string;
    body: string;
    id: number;
    url: string;
    assets: {
        name: string;
        browser_download_url: string;
    };
}
