import React from "react";
import {parse} from "yaml"
import ReactMarkdown from "react-markdown";

export const noP = (props: { children: any; }) => {
    const { children } = props;
    return children;
}

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

function HandleSubs({ymlKey, value, cmd} : {ymlKey: string, value: any, cmd: string}) {
    let perm = value.permission;
    let subperm = (perm != null) ? '__Permission:__ \`' + perm + '\`' : '';
    let indentation = "indent1";
    return (
        <>
            <tr>
                <td className={indentation}><code>{ymlKey}</code></td>
                <td><ReactMarkdown children={value.description} components={{p: noP}} /><br/><ReactMarkdown children={subperm} components={{p: noP}} /></td>
                <td><code>{value.usage.replace("<command>", cmd)}</code></td>
            </tr>
        </>
    )
}

export default function CommandTable({ data, args, cmd, extra } : { data: string, args: string, cmd: string, extra: boolean }) {
    // now we must build the table!

    // data, args are yaml, parse them
    const root = parse(data);
    const subs = parse(args);

    let head = ""
    let command = ""
    if (extra == 'false') {
        head = (
            <thead>
                <tr>
                    <th>Command</th>
                    <th>Aliases</th>
                    <th>Permission</th>
                </tr>
            </thead>
        )
        command = <HandleCommand key={cmd} yml={root} cmd={cmd} />
    }

    return (
        <>
            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    {head}
                    <tbody>
                        {command}
                        <tr>
                            <th>Arguments</th>
                            <th>Description</th>
                            <th>Usage</th>
                        </tr>
                        {Object.entries(subs).map(([key, value]) => (
                            <HandleSubs key={key} ymlKey={key} value={value} indent={0} cmd={cmd} />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
