import React from "react";
import {parse} from "yaml"
import ReactMarkdown from "react-markdown";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

const noP = (props: { children: any; }) => {
    const { children } = props;
    return children;
}

function HandleTabs({ymlKey, value} : {ymlKey: string, value: any}) {
    let folder = value.folder;
    let img = value.image;
    let vanilla = '![' + ymlKey + '](/images/' + folder + '/vanilla/' + img + ')'
    let tardis = '![' + ymlKey + '](/images/' + folder + '/tardis/' + img + ')'

    return (
        <>
          <p><strong>{ymlKey}</strong> &mdash; <ReactMarkdown children={value.description} components={{p: noP}} /></p>
          <Tabs groupId="images">
            <TabItem value="vanilla" label="vanilla" default>
            <ReactMarkdown children={vanilla} components={{p: noP}} />
            </TabItem>
            <TabItem value="tardis" label="tardis">
            <ReactMarkdown children={tardis} components={{p: noP}} />
            </TabItem>
          </Tabs>
        </>
    )
}

export default function TabbedImages({ imgs } : { imgs: string }) {
    // now we must build the tabs!

    // imgs is yaml, parse it
    const tabs = parse(imgs);

    return (
        <>
            <div className="table-responsive">
                {Object.entries(tabs).map(([key, value]) => (
                    <HandleTabs key={key} ymlKey={key} value={value} />
                ))}
            </div>
        </>
    );
}
