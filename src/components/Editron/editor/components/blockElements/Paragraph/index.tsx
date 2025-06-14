import { cleanInnerHTML } from "../libs/utilities";
import { preventNewLine } from "../libs/events";
import type { ParagraphProps } from "./types";
import { demo, structure } from "./meta";

const Paragraph = ({ className = "", data, onUpdate }: ParagraphProps) => {
    return (
        <p
            className={`outline-none py-1 overflow-hidden ${className}`}
            onKeyDown={preventNewLine}
            onBlur={(e) => {
                const target = e.currentTarget ?? e.target;
                onUpdate({ html: cleanInnerHTML(target.innerHTML) });
            }}
            data-placeholder={`Enter some text...`}
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
};
