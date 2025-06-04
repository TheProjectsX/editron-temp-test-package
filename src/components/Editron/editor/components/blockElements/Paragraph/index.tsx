import type {
    ParagraphData,
    ParagraphTags,
} from "../../../types/blockElements";
import { controlEmptyClass, preventNewLine } from "../libs/events";

type Paragraph = {
    className?: string;
    tag: ParagraphTags;
    data: ParagraphData;
    onUpdate: (value: ParagraphData) => void;
};

const Paragraph = ({ className = "", data, onUpdate }: Paragraph) => {

    return (
        <p
            className={`outline-none py-1 overflow-hidden ${className}`}
            onKeyDown={preventNewLine}
            onInput={(e) => {
                const target = e.currentTarget ?? e.target;
                // onUpdate({ text: target.innerHTML ?? "" });
                controlEmptyClass(target);
            }}
            onBlur={(e) => {
                const target = e.currentTarget ?? e.target;
                onUpdate({ text: target.textContent ?? "" });
            }}
            data-placeholder={`Enter some text...`}
            autoFocus
            contentEditable
        >
            {data.text ?? ""}
        </p>
    );
};

export default Paragraph;
