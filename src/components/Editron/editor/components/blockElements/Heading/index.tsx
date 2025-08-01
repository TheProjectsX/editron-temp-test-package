import { cleanInnerHTML } from "../libs/utilities";
import { preventNewLine } from "../libs/events";
import type { HeadingProps } from "./types";
import { demo, settings, structure } from "./meta";
import { spacingConfig } from "../libs/styles";

const Heading = ({
    className = "",
    tag: Tag,
    data,
    onUpdate,
}: HeadingProps) => {
    return (
        <Tag
            className={`outline-none ${spacingConfig["heading"][Tag]} ${className}`}
            onKeyDown={preventNewLine}
            onBlur={(e) => {
                const target = e.currentTarget ?? e.target;
                onUpdate({ ...data, html: cleanInnerHTML(target.innerHTML) });
            }}
            style={data.style ?? {}}
            data-placeholder={`Enter your heading...`}
            data-align={data.style?.textAlign ?? ""}
            contentEditable
            dangerouslySetInnerHTML={{ __html: data.html }}
        ></Tag>
    );
};

export default {
    component: Heading,
    structure,
    demo,
    settings,
};
