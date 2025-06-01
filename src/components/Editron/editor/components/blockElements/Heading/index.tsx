import type { HeadingData, HeadingTags } from "../../../types/blockElements";

type HeadingProps = {
    className?: string;
    tag: HeadingTags;
    data: HeadingData;
    onChange: (value: HeadingData) => void;
};

const Heading = ({
    className = "",
    tag: Tag,
    data,
    onChange,
}: HeadingProps) => {
    return (
        <Tag
            className={`outline-none text-2xl font-semibold py-1 ${className}`}
            onInput={(e) =>
                onChange({ text: e.currentTarget.textContent ?? "" })
            }
            contentEditable
        >
            {data.text ?? ""}
        </Tag>
    );
};

export default Heading;
