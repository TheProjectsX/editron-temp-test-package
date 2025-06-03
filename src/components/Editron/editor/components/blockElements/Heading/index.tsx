import type { HeadingData, HeadingTags } from "../../../types/blockElements";
import { controlEmptyClass, preventNewLine } from "../libs/events";

type HeadingProps = {
    className?: string;
    tag: HeadingTags;
    data: HeadingData;
    onUpdate: (value: HeadingData) => void;
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
                const target = e.currentTarget;
                controlEmptyClass(target);
            }}
            onBlur={(e) =>
                onUpdate({ text: e.currentTarget.textContent ?? "" })
            }
            data-placeholder={`Enter your heading...`}
            contentEditable
        >
            {data.text ?? ""}
        </Tag>
    );
};

export default Heading;
