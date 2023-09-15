import React from "react";
import {parse} from "yaml"
import ReactMarkdown from "react-markdown";

const noP = (props: { children: any; }) => {
    const { children } = props;

    return children;
}

function HandleRow({data, ymlKey, value, indent = 0} : {data: string, ymlKey: string, value: any, indent: number}) {
    const valueType = typeof value;
    const isParent = valueType === "object";

    ymlKey = ymlKey.trim().split(".").pop()!;

    console.debug("data: ", data, "ymlKey: ", ymlKey, "value: ", value, "valueType: ", valueType, "isParent: ", isParent);

    const children = isParent ? Object.entries(value).map(([key, value]) => (
        <HandleRow data={data} key={key} ymlKey={key} value={value} indent={indent + 1} />
    )) : null;

    const rowInData = data.split("\n").find((row) => {
        console.log("Checking row: ", row, "for: ", ymlKey);
        return row.trim().startsWith(ymlKey + ":");
    });
    let comment = null;
    if (rowInData.includes("#")) {
        comment = rowInData.split("#")[1];
    }

    if (isParent) {
        return (
            <>
                <tr>
                    <td colSpan={3}><code>{ymlKey}:</code></td>
                </tr>
                {children}
            </>
        )
    }

    let indention = "";
    for (let i = 0; i < indent; i++) {
        indention += "&nbsp;";
    }
    // render the indention raw
    // we can do this by using dangerouslySetInnerHTML

    const justDataRow = (
        <tr>
            <td><span dangerouslySetInnerHTML={{__html: indention}}></span><code>{ymlKey.toString()}</code></td>
            <td><code>{valueType.toString()}</code></td>
            <td><code>{value.toString()}</code></td>
        </tr>
    );

    if (comment) {
        return (
            <>
                {justDataRow}
                <tr>
                    <td colSpan={3}><span dangerouslySetInnerHTML={{__html: indention}}></span>
                        <ReactMarkdown children={comment} components={{p: noP}} />
                    </td>
                </tr>
            </>
        )
    } else {
        return justDataRow;
    }
}

export default function ConfigTable({ name, data } : { name: string, data: string }) {
    // now we must build the table!

    console.log(name, data);

    // data is yaml, parse it
    const yml = parse(data);

    console.log(yml);

    // turn the parsed yml into a sample to render, just do basic stuff for now
    // Objects are not valid as a React child (found: object with keys {allow}). If you meant to render a collection of children, use an array instead.
    // Okay, so let's use an array instead
    const example = Object.entries(yml).map(([key, value]) => {
        const valueType = typeof value;
        const isParent = valueType === "object";

        if (isParent) {
            return `${key}:\n  ${Object.entries(value).map(([key, value]) => `${key}: ${value}`).join("\n  ")}`;
        } else {
            return `${key}: ${value}`;
        }
    });

    return (
        <>
            {/*{renderSample ? (*/}
            {/*    <>*/}
            {/*        <h2>Sample</h2>*/}
            {/*        <pre><code>{example}</code></pre>*/}
            {/*    </>*/}
            {/*) : null}*/}
            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Config</th>
                            <th>Type</th>
                            <th>Default</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(yml).map(([key, value]) => (
                            <HandleRow data={data} key={key} ymlKey={key} value={value} indent={0} />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
