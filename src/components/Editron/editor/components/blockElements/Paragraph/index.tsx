import { cleanInnerHTML } from "../libs/utilities";
import { preventNewLine } from "../libs/events";
import type { ParagraphProps } from "./types";
import { demo, settings, structure } from "./meta";

const Paragraph = ({ className = "", data, onUpdate }: ParagraphProps) => {
    return (
        <p
            className={`outline-none overflow-hidden ${className}`}
            onKeyDown={preventNewLine}
            onBlur={(e) => {
                const target = e.currentTarget ?? e.target;
                onUpdate({ html: cleanInnerHTML(target.innerHTML) });
            }}
            style={data.style ?? {}}
            data-placeholder={`Enter some text...`}
            data-align={data.style?.textAlign ?? ""}
            autoFocus
            contentEditable
            dangerouslySetInnerHTML={{ __html: data.html }}
        ></p>
    );
};

export default {
    component: Paragraph,
    structure,
    demo,
    settings,
};
