import { cleanInnerHTML } from "../libs/utilities";
import { preventNewLine } from "../libs/events";
import type { ParagraphProps } from "./types";
import { settings, structure } from "./meta";

const Paragraph = ({ className = "", data, onUpdate }: ParagraphProps) => {
    return (
        <p
            className={`outline-none overflow-hidden dark:text-gray-200 ${className}`}
            onKeyDown={preventNewLine}
            onBlur={(e) => {
                const target = e.currentTarget ?? e.target;
                onUpdate({ ...data, html: cleanInnerHTML(target.innerHTML) });
            }}
            style={data.style ?? {}}
            data-placeholder={`Enter some text...`}
            data-align={data.style?.textAlign ?? ""}
            contentEditable
            dangerouslySetInnerHTML={{ __html: data.html }}
        ></p>
    );
};

export default {
    component: Paragraph,
    structure,
    settings,
};
