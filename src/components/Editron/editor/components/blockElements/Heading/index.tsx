import type {
    EditorHeadingData,
    HeadingTags,
} from "../../../types/blockElements";
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
