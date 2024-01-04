import React, { Component } from "react";
import { render } from "react-dom";
import { Document, parse } from "yaml"
import ReactMarkdown from "react-markdown";
import Layout from '@theme/Layout';
import styles from "../css/index.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

var yamlObject: Object
var doc: Document
var fName: String

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
            yamlObject = y
            doc = new Document(y)
            this.setState({fileName: file.name, fileContent: reader.result, yaml: y});
            fName = file.name
        }
        reader.onerror = () => {
            console.log('file error', reader.error);
        }
    }
    handleSaveFile = e => {
        if (fName === undefined) {
            alert("You need to select a config file")
            return
        }
        var textFile = null,
        makeTextFile = function () {
            var replaceString = doc.toString()
            const find = ['""', '"'];
            const replace = ["''", ""];
            for (var i = 0; i < find.length; i++) {
                replaceString = replaceString.replaceAll(find[i], replace[i]);
            }
            var data = new Blob([replaceString], {type: 'text/plain'});

            // If we are replacing a previously generated file we need to
            // manually revoke the object URL to avoid memory leaks.
            if (textFile !== null) {
                window.URL.revokeObjectURL(textFile);
            }
            textFile = window.URL.createObjectURL(data);
            return textFile;
        };
        var link = document.getElementById('downloadlink');
        link.href = makeTextFile();
        link.style.display = 'block';
    }
    render() {
        return (
            <>
                <div>
                    <p style={{textAlign: "center"}}>
                        <input type="file" onChange={this.handleFileChange}></input><br/>
                        <button style={{width: "20em", margin: "1em auto 0 auto"}} className="button button--primary" id="save" onClick={this.handleSaveFile}>Save file</button><br/>
                        <a className="button button--primary" download={fName} id="downloadlink" style={{display: "none", width: "20em", margin: "1em auto"}}>Download</a>
                    </p>
                    <div>
                        <table
                            style={{display: 'flex',
                                justifyContent: 'center',
                                margin: '0 auto 2em auto'}}>
                            <tbody>
                        {Object.entries(this.state.yaml).map(([key, value]) => (
                            <HandleRow key={key} path={""} yamlKey={key} yamlValue={value} indent={0} />
                        ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}

function HomepageHeader() {
    return (
        <header className={styles.heroBanner}>
            <div className="container">
                <h1 className="hero__title">TARDIS Config Editor</h1>
                <p className="hero__subtitle">Edit your TARDIS config files here</p>
            </div>
        </header>
    );
}

function Input(path, key, value) {
    const valueType = typeof value;
    let p = path == '' ? key : path + "." + key
    if (valueType === "boolean") {
        return TrueFalse(p, value)
    } else {
        return TextField(p, value)
    }
}

function TrueFalse(path, tf) {
    return (
        <select name={path} defaultValue={tf} onChange={e => handleChangeSelect(path, e.target.value)}>
           <option value={true}>true</option>
           <option value={false}>false</option>
        </select>
    )
}

function handleChangeSelect(key, value) {
    var link = document.getElementById('downloadlink');
    link.style.display = 'none';
    // handle stuff
    doc.commentBefore = ' config file'
    if (key.includes(".")) {
        // split path
        const path = key.split(".")
        doc.setIn(path, value)
    } else {
        doc.set(key, value)
    }
    doc.set(key, value)
    console.log(doc.toString())
}

function TextField(path, value) {
    return (
        <input type="text" defaultValue={value} name={path} onBlur={e => handleChangeSelect(path, e.target.value)} />
    )
}

function HandleRow({path, yamlKey, yamlValue, indent = 0} : {path: string, yamlKey: string, yamlValue: any, indent: number}) {

    const valueType = typeof yamlValue;
    const isParent = valueType === "object";
    var p = path == "" ? yamlKey : path + "." + yamlKey
    const children = isParent ? Object.entries(yamlValue).map(([key, value]) => (
        <HandleRow key={key} path={p} yamlKey={key} yamlValue={value} indent={indent + 1} />
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
            <td>{Input(path, yamlKey, yamlValue)}</td>
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
