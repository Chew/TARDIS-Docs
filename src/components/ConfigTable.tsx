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

    const children = isParent ? Object.entries(value).map(([key, value]) => (
        <HandleRow data={data} key={key} ymlKey={key} value={value} indent={indent + 1} />
    )) : null;

    const rowInData = data.split("\n").find((row) => {
        return row.trim().startsWith(ymlKey + ":");
    });
    let comment = null;
    if (rowInData.includes("#")) {
        comment = rowInData.split("#")[1];
    }

    let indentation = "indent" + indent;

    if (isParent) {
        let parentComment: React.JSX.Element;
        if (comment) {
            parentComment = (
                <tr>
                    <td colSpan={3} className={indentation}>
                        <ReactMarkdown children={comment} components={{p: noP}} />
                    </td>
                </tr>
            )
        }

        return (
            <>
                <tr>
                    <td colSpan={3} className={indentation} id={ymlKey.toString()}><code>{ymlKey}:</code></td>
                </tr>
                {parentComment}
                {children}
            </>
        )
    }

    const justDataRow = (
        <tr>
            <td className={indentation} id={ymlKey.toString()}><code>{ymlKey.toString()}</code></td>
            <td><code>{valueType.toString()}</code></td>
            <td><code>{value.toString()}</code></td>
        </tr>
    );

    if (comment) {
        return (
            <>
                {justDataRow}
                <tr>
                    <td colSpan={3} className={indentation}>
                        <ReactMarkdown children={comment} components={{p: noP}} />
                    </td>
                </tr>
            </>
        )
    } else {
        return justDataRow;
    }
}

export default function ConfigTable({ data } : { data: string }) {
    // now we must build the table!

    // data is yaml, parse it
    const yml = parse(data);

    return (
        <>
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
