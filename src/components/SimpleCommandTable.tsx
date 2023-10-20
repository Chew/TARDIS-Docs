import React from "react";
import {parse} from "yaml"

function HandleCommand({ yml, cmd } : { yml: object, cmd: string }) {
    let indentation = "indent0";
    let a = yml[cmd].aliases
    const alias = typeof a === "object" ? a.join(", ") : a
    return (
        <>
            <tr>
                <td className={indentation} id={cmd}><code>/{cmd}</code></td>
                <td><code>{alias}</code></td>
                <td><code>{yml[cmd].permission}</code></td>
            </tr>
            <tr>
                <td colSpan={3}>{yml[cmd].description}</td>
            </tr>
            <tr>
                <td colSpan={3}><code>{yml[cmd].usage.replace("<command>", cmd)}</code></td>
            </tr>
        </>
    )
}

export default function SimpleCommandTable({ data } : { data: string }) {
    // now we must build the table!

    // data, args are yaml, parse them
    const root = parse(data);
    let cmd = Object.keys(root)[0]

    return (
        <>
            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Command</th>
                            <th>Aliases</th>
                            <th>Permission</th>
                        </tr>
                    </thead>
                    <tbody>
                        <HandleCommand key={cmd} yml={root} cmd={cmd} />
                    </tbody>
                </table>
            </div>
        </>
    );
}
