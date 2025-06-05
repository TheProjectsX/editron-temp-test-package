import type { EditorHeadingData, HeadingTags } from "../../../types/blockElements";
import { cleanInnerHTML } from "../libs/utilities";
import { controlEmptyClass, preventNewLine } from "../libs/events";

type HeadingProps = {
    className?: string;
    tag: HeadingTags;
    data: EditorHeadingData;
    onUpdate: (value: EditorHeadingData) => void;
};

const Heading = ({
    className = "",
    tag: Tag,
    data,
    onUpdate,
}: HeadingProps) => {
    return (
        <Tag
            className={`outline-none text-2xl font-semibold py-1 ${className}`}
            onKeyDown={preventNewLine}
            onInput={(e) => {
                const target = e.currentTarget ?? e.target;
                controlEmptyClass(target);
            }}
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

export default Heading;
