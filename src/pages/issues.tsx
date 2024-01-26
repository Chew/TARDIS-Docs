import React, { Component } from "react";
import Layout from '@theme/Layout';
import styles from "../css/issues.module.css";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

const { Octokit } = require("@octokit/rest");
const octokit = new Octokit({ 
    auth: `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`,
    userAgent: 'TARDIS Wiki',
    log: console
});

var yamlObject: Object
var doc: Document
var fName: String

class GitHub extends Component {

    constructor(props) {
        super(props);
    }

    async handleBug() {
        var bugTitle = (document.getElementById('bug_title') as HTMLInputElement).value;
        var bugName = (document.getElementById('bug_name') as HTMLInputElement).value;
        var bugDesc = (document.getElementById('bug_description') as HTMLInputElement).value;
        var bugRep = (document.getElementById('bug_reproduce') as HTMLInputElement).value;
        var bugLog = (document.getElementById('bug_logs') as HTMLInputElement).value;
        var bugVer = (document.getElementById('bug_version') as HTMLInputElement).value;
        // validate
        let formIsValid = true;
        if (bugTitle == "") {
            document.getElementById('bug_title').focus()
            formIsValid = false;
			return
        }
        if (bugName == "") {
            document.getElementById('bug_name').focus()
            formIsValid = false;
			return
        }
        if (bugDesc == "") {
            document.getElementById('bug_description').focus()
            formIsValid = false;
			return
        }
        if (bugRep == "") {
            document.getElementById('bug_reproduce').focus()
            formIsValid = false;
			return
        }
		// compose body markdown
		var bugBody = `### Submitted by

${bugName}
            
### Describe the bug

${bugDesc}

### To Reproduce

${bugRep}

### Log files

${bugLog}

### '/tardis version' output

${bugVer}
`
		// post issue
		const response = await octokit.rest.issues.create({
			owner: "eccentricdevotion",
			repo: "TARDIS",
			title: bugTitle,
			body: bugBody,
		});
		// hide form, show success
		document.getElementById("bugForm").style.display = "none"
		document.getElementById("bugSuccess").style.display = "block"
    }

    async handleFeature() {
        var featureTitle = (document.getElementById('feature_title') as HTMLInputElement).value;
        var featureName = (document.getElementById('feature_name') as HTMLInputElement).value;
        var featureDesc = (document.getElementById('feature_description') as HTMLInputElement).value;
        var featureAlt = (document.getElementById('feature_alternative') as HTMLInputElement).value;
        // validate
        let formIsValid = true;
        if (featureTitle == "") {
            document.getElementById('feature_title').focus()
            formIsValid = false;
			return
        }
        if (featureName == "") {
            document.getElementById('feature_name').focus()
            formIsValid = false;
			return
        }
        if (featureDesc == "") {
            document.getElementById('feature_description').focus()
            formIsValid = false;
			return
        }
        if (featureAlt == "") {
            document.getElementById('feature_alternative').focus()
            formIsValid = false;
			return
        }
		// compose body markdown
		var featureBody = `### Submitted by

${featureName}

### Describe the feature request

${featureDesc}

### Describe alternatives you've considered

${featureAlt}
    `
		// post issue
		const response = await octokit.rest.issues.create({
			owner: "eccentricdevotion",
			repo: "TARDIS",
			title: featureTitle,
			body: featureBody,
		});
		// hide form, show success
		document.getElementById("featureForm").style.display = "none"
		document.getElementById("featureSuccess").style.display = "block"
    }

    render() {
        return (
            <>
                <div style={{display: 'flex',
                                justifyContent: 'center',
                                width: '50%',
                                margin: '0 auto 2em auto'}}>
                    <Tabs>
                        <TabItem value="Bug" label="Bug" default>
                            <h2>Issue: Bug report</h2>
                            <div id="bugForm">
                            <p>Fields marked with an asterisk (*) are required.</p>
                            <form>
                                <h3>Add a title *</h3>
                                <p><input type="text" name="bug[title]" id="bug_title" placeholder="Title" required defaultValue=""></input></p>
                                <h3>Submitted by *</h3>
                                <p><input type="text" name="bug[name]" id="bug_name" placeholder="Your name" required defaultValue=""></input></p>
                                <h3>Describe the bug *</h3>
                                <p>A clear and concise description of what the bug is.</p>
                                <p><textarea name="bug[description]" id="bug_description" required defaultValue=""></textarea></p>
                                <h3>To Reproduce *</h3>
                                <p>Steps to reproduce the behaviour.</p>
                                <p><textarea name="bug[reproduce]" id="bug_reproduce" required defaultValue=""></textarea></p>
                                <h3>Log files</h3>
                                <p>Paste your server log (showing the whole server startup to when the error occurs) on a website like <a href="https://paste.gg/" target="_blank">paste.gg</a>, and post a link here. Even if there are no errors in the log, it still contains useful information for troubleshooting.</p>
                                <p><textarea name="bug[logs]" id="bug_logs" defaultValue=""></textarea></p>
                                <h3>'/tardis version' output</h3>
                                <p>Run <code>/tardis version</code> on your server and paste the full, unmodified output here. "latest" is not a version; we require the output of <code>/tardis version</code> so we can adequately track down the issue. Additionally, do NOT provide a screenshot, you MUST paste the entire output.</p>
                                <p><textarea name="bug[version]" id="bug_version" defaultValue=""></textarea></p>
                                <p><button type="button" className="button button--primary" style={{width: "20em", margin: "1em auto 0 auto"}} onClick={this.handleBug}>Submit new issue</button></p>
                                <p>Contributions to the TARDIS repository should follow its <a href="https://github.com/eccentricdevotion/TARDIS/blob/8cb75a55054c520da5e2df19e07754d05b2a4beb/.github/CONTRIBUTING.md" target="_blank">contributing guidelines</a> and <a href="https://github.com/eccentricdevotion/TARDIS/blob/8cb75a55054c520da5e2df19e07754d05b2a4beb/CODE_OF_CONDUCT.md" target="_blank">code of conduct</a>.</p>
                                </form>
                                </div>
                                <div id="bugSuccess">
                                    <p>The bug report was submitted successfully.</p>
                                </div>
                        </TabItem>
                        <TabItem value="Feature" label="Feature">
                            <h2>Issue: Feature request</h2>
                            <div id="featureForm">
                            <p>Fields marked with an asterisk (*) are required".</p>
                            <form >
                                <h3>Add a title *</h3>
                                <p><input type="text" name="feature[title]" id="feature_title" placeholder="Title" required defaultValue=""></input></p>
                                <h3>Submitted by *</h3>
                                <p><input type="text" name="feature[name]" id="feature_name" placeholder="Your name" required defaultValue=""></input></p>
                                <h3>Describe the feature request *</h3>
                                <p>A clear and concise description of what you are missing, and what you want to happen.</p>
                                <p><textarea name="feature[description]" id="feature_description" required defaultValue=""></textarea></p>
                                <h3>Describe alternatives you've considered *</h3>
                                <p>A clear and concise description of any alternative solutions or features you've considered.</p>
                                <p><textarea name="feature[alternative]" id="feature_alternative" defaultValue=""></textarea></p>
                                <p><button type="button" className="button button--primary" style={{width: "20em", margin: "1em auto 0 auto"}} onClick={this.handleFeature}>Submit new issue</button></p>
                                <p>Contributions to the TARDIS repository should follow its <a href="https://github.com/eccentricdevotion/TARDIS/blob/8cb75a55054c520da5e2df19e07754d05b2a4beb/.github/CONTRIBUTING.md" target="_blank">contributing guidelines</a> and <a href="https://github.com/eccentricdevotion/TARDIS/blob/8cb75a55054c520da5e2df19e07754d05b2a4beb/CODE_OF_CONDUCT.md" target="_blank">code of conduct</a>.</p>
                                </form>
                                </div>
                                <div id="featureSuccess">
                                    <p>The feature request was submitted successfully.</p>
                                </div>
                        </TabItem>
                    </Tabs>
                </div>
            </>
        )
    }
}

function PageHeader() {
    return (
        <header className={styles.heroBanner}>
            <div className="container">
                <h1 className="hero__title">TARDIS Issue Creator</h1>
                <p className="hero__subtitle">Found a bug? Want a new feature? Submit it here.</p>
            </div>
        </header>
    );
}

export default function Submit() {
    return <Layout title="Issues" description="TARDIS Issue Creator">
    <PageHeader />
    <main>
        <GitHub />
    </main>
</Layout>
}
