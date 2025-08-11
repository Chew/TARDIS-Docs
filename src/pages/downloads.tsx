import React, {useEffect, useState} from 'react';
import Layout from '@theme/Layout';
import styles from "../css/index.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Releases from "@site/src/components/Release";

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={styles.heroBanner}>
            <div className="container">
                <h1 className="hero__title">Download TARDIS</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
            </div>
        </header>
    );
}

export default function Downloads() {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    // don't we need to use useEffect here?
    useEffect(() => {
        fetch("https://api.github.com/repos/eccentricdevotion/TARDIS/releases", {
            method: 'GET'
        }).then(res => res.json())
            .then((result) => {
                setData(result);
                setIsLoaded(true);
                console.log("let's retrieve the data", result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (!isLoaded) {
        return <Layout title="Download" description="Download TARDIS">
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '50vh',
                    fontSize: '20px',}}>
                <div>
                    <p>Download TARDIS</p>
                    <p>Grabbing builds...</p>
                </div>
            </div>
        </Layout>
    }

    console.log("let's show the data", data);

    return <Layout title="Download" description="Download TARDIS">
        <HomepageHeader />
        <main>
            <Releases {...data} />
        </main>
    </Layout>;
}
