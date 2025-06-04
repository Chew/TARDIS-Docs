import React, {useEffect, useState} from "react";
import {parse} from "yaml";

function HandleRow({ymlKey, value} : {ymlKey: string, value: any}) {
    return (
        <>
            <tr>
                <td><code>{ymlKey}</code></td>
                <td>{value}</td>
            </tr>
        </>
    )
}

export default function Condensables() {

    // get the condensables file and parse it
    const url = 'https://raw.githubusercontent.com/eccentricdevotion/TARDIS/refs/heads/master/Core/src/main/resources/condensables.yml';

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
                <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                        <tbody>
                            <tr>
                                <th>Item</th>
                                <th>Relative value</th>
                            </tr>
                            <tr>
                                <td colSpan={2}>Grabbing data...</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
        )
    }

    const conds = parse(data)
    // make a table
    return (
        <>
            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <tbody>
                        <tr>
                            <th>Item</th>
                            <th>Relative value</th>
                        </tr>
                        {Object.entries(conds).map(([key, value]) => (
                            <HandleRow key={key} ymlKey={key} value={value} />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

