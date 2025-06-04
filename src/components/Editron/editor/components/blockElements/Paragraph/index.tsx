import type {
    ParagraphData,
    ParagraphTags,
} from "../../../types/blockElements";
import { ContentBlockToHtml } from "../libs/converter";
import { controlEmptyClass, preventNewLine } from "../libs/events";

type Paragraph = {
    className?: string;
    tag: ParagraphTags;
    data: ParagraphData;
    onUpdate: (value: ParagraphData) => void;
};

const Paragraph = ({ className = "", data, onUpdate }: Paragraph) => {
    const Content = ContentBlockToHtml(data.content);

    // Update State Content
    const handleUpdateState = (html: string) => {





        



    };

    return (
        <p
            className={`outline-none py-1 overflow-hidden ${className}`}
            onKeyDown={preventNewLine}
            onInput={(e) => {
                const target = e.currentTarget ?? e.target;
                controlEmptyClass(target);
                handleUpdateState(target.getHTML());
            }}
            data-placeholder={`Enter some text...`}
            autoFocus
            contentEditable
            {...(Content
                ? {}
                : { dangerouslySetInnerHTML: { __html: data.html ?? "" } })}
        >
            {Content}
        </p>
    );
};

export default Paragraph;
