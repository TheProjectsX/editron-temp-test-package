import { cleanInnerHTML } from "../libs/utilities";
import {  preventNewLine } from "../libs/events";
import type { HeadingProps } from "./types";
import { demo, structure } from "./meta";

const Heading = ({
    className = "",
    tag: Tag,
    data,
    onUpdate,
}: HeadingProps) => {
    const headingStyles: Record<string, string> = {
        h1: "text-3xl font-bold",
        h2: "text-2xl font-semibold",
        h3: "text-xl font-semibold",
        h4: "text-lg font-semibold",
        h5: "text-lg font-medium",
        h6: "text-base font-medium",
    };

    return (
        <Tag
            className={`outline-none py-1 ${headingStyles[Tag]} ${className}`}
            onKeyDown={preventNewLine}
            onBlur={(e) => {
                const target = e.currentTarget ?? e.target;
                onUpdate({ html: cleanInnerHTML(target.innerHTML) });
            }}
            data-placeholder={`Enter your heading...`}
            autoFocus
            contentEditable
            dangerouslySetInnerHTML={{ __html: data.html }}
        ></Tag>
    );
};

export default {
    component: Heading,
    structure,
    demo
};
