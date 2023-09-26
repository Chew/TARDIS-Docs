import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import ReactMarkdown from "react-markdown";
import {noP} from "./CommandTable";

declare type Props = {
    /** The name of this tabbed image, used as a heading if heading is set to a number */
    name: string;
    /** The description of this tabbed image. Leave blank for no description */
    description?: string;
    /** The folder this tabbed image is in */
    folder: string;
    /** The image name */
    image: string;
    /** The heading level to use for the name, or false to disable */
    heading?: number | false;
}

export default function TabbedImage({ name, description, folder, image, heading = 3 }: Props) {
    let vanilla = '![' + name + '](/images/' + folder + '/vanilla/' + image + ')'
    let tardis = '![' + name + '](/images/' + folder + '/tardis/' + image + ')'

    const hasHeading = typeof heading === "number";
    let hTag = hasHeading ? React.createElement("h" + heading, {id: name}, name) : <></>;

    const hasDescription = description !== undefined && description !== null && description !== "";
    let pTag = hasDescription ? <p><ReactMarkdown children={description} components={{p: noP}} /></p> : <></>;

    // now we must build the tabs!
    return (
        <>
            {hTag}
            {pTag}
            <Tabs groupId="images">
                <TabItem value="vanilla" label="vanilla" default>
                    <ReactMarkdown children={vanilla} components={{p: noP}} />
                </TabItem>
                <TabItem value="tardis" label="tardis">
                    <ReactMarkdown children={tardis} components={{p: noP}} />
                </TabItem>
            </Tabs>
        </>
    );
}
