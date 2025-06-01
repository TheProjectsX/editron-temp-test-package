import type {
    ParagraphData,
    ParagraphTags,
} from "../../../types/blockElements";

type Paragraph = {
    className?: string;
    tag: ParagraphTags;
    data: ParagraphData;
    onChange: (value: ParagraphData) => void;
};

const Paragraph = ({ className = "", data, onChange }: Paragraph) => {
    return (
        <p
            className={`outline-none py-1 ${className}`}
            onInput={(e) =>
                onChange({ text: e.currentTarget.textContent ?? "" })
            }
            contentEditable
        >
            {data.text ?? ""}
        </p>
    );
};

export default Paragraph;
