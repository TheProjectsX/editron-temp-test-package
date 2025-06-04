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
    console.log(data)

    return (
        <p
            className={`outline-none py-1 overflow-hidden ${className}`}
            onKeyDown={preventNewLine}
            onInput={(e) => {
                const target = e.currentTarget ?? e.target;
                controlEmptyClass(target);
            }}
            onBlur={(e) => {
                const target = e.currentTarget ?? e.target;
                onUpdate({ html: target.innerHTML });
            }}
            data-placeholder={`Enter some text...`}
            autoFocus
            contentEditable
            dangerouslySetInnerHTML={{ __html: data.html }}
        ></p>
    );
};

export default Paragraph;
