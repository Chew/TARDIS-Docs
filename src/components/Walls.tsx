import React, {useEffect, useState} from "react";
import {parse} from "yaml";

export default function Walls() {

    // get the blocks file and parse it
    const url = 'https://raw.githubusercontent.com/eccentricdevotion/TARDIS/master/src/main/resources/blocks.yml';

    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url, {
            method: 'GET'
        }).then(res => res.text())
            .then((result) => {
                setData(result);
                setIsLoaded(true);
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
        return (
            <>
                <pre>
                    <code>
                        Grabbing data...
                    </code>
                </pre>
            </>
        )
    }
    
    const walls = parse(data)
    const blocks = walls['tardis_blocks']
    // make a table
    return (
        <>
            <pre>
                <code>
                    {Object.values(blocks).map((block, index) => {
                        return block + "\n"
                    })}
                </code>
            </pre>
        </>
    );
}

