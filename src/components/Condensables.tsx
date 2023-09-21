import React from "react";
import {parse} from "yaml";
import axios from 'axios';

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
    const url = 'https://raw.githubusercontent.com/eccentricdevotion/TARDIS/master/src/main/resources/condensables.yml';
    axios({
        method: 'get',
        url: url,
        responseType: 'text'
    })
    .then(function (response) {
        const data = response.data
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
                                <HandleRow ymlKey={key} value={value} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </>
        );
    });
    return null;
}

