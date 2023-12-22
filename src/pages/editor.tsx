import React, { Component } from "react";
import { render } from "react-dom";
import {parse} from "yaml"
import ReactMarkdown from "react-markdown";
import Layout from '@theme/Layout';
import styles from "../css/index.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fileName: '',
            fileContent: '',
            yaml: {}
        };
    }
    handleFileChange = e => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => {
            const str: string = typeof reader.result === 'string' ? reader.result : Buffer.from(reader.result).toString()
            const y = parse(str)
            this.setState({fileName: file.name, fileContent: reader.result, yaml: y});
        }
        reader.onerror = () => {
            console.log('file error', reader.error);
        }
    }
    render() {
        return (
            <>
                <div>
                    <p style={{textAlign: "center"}}><input type="file" onChange={this.handleFileChange}></input></p>
                    <table>
                        <tbody>
                    {Object.entries(this.state.yaml).map(([key, value]) => (
                        <HandleRow key={key} parent={""} yamlKey={key} yamlValue={value} indent={0} />
                    ))}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

function ab2str(buf) {
    return String.fromCharCode.apply(null, new Uint16Array(buf));
}

function HomepageHeader() {
    return (
        <header className={styles.heroBanner}>
            <div className="container">
                <h1 className="hero__title">TARDIS Config Editor</h1>
                <p className="hero__subtitle">Edit your TARDIS config file here</p>
            </div>
        </header>
    );
}

function Input(parent, key, value) {
    const valueType = typeof value;
    let p = parent == '' ? key : parent + "." + key
    if (valueType === "boolean") {
        return TrueFalse(p, value)
    } else {
        return TextField(p, value)
    }
}

function TrueFalse(parent, tf) {
    return (
        <select name={parent} defaultValue={tf} onChange={e => handleChange(parent, e.target.value)}>
           <option value={"true"}>true</option>
           <option value={"false"}>false</option>
        </select>
    )
}

function handleChange(key, value) {
    // handle stuff
    console.log(key + ": " + value)
}

function TextField(parent, value) {
    return (
        <input type="text" defaultValue={value} name={parent} />
    )
}

function HandleRow({parent, yamlKey, yamlValue, indent = 0} : {parent: string, yamlKey: string, yamlValue: any, indent: number}) {

    const valueType = typeof yamlValue;
    const isParent = valueType === "object";

    const children = isParent ? Object.entries(yamlValue).map(([key, value]) => (
        <HandleRow key={key} parent={yamlKey} yamlKey={key} yamlValue={value} indent={indent + 1} />
    )) : "null";

    let indentation = "indent" + indent;

    if (isParent) {
        return (
            <>
                <tr>
                    <td colSpan={3} className={indentation} id={yamlKey}><code>{yamlKey}:</code></td>
                </tr>
                {children}
            </>
        )
    }

    const justDataRow = (
        <tr>
            <td className={indentation} id={yamlKey}><code>{yamlKey}</code></td>
            <td><em>{valueType.toString()}</em></td>
            <td>{Input(parent, yamlKey, yamlValue)}</td>
        </tr>
    );

    return justDataRow;
}

export default function ConfigEditor() {
    return <Layout title="Editor" description="TARDIS Config Editor">
    <HomepageHeader />
    <main>
        <Editor />
    </main>
</Layout>
}