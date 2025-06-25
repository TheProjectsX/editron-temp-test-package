type ParagraphTags = "p";
type ParagraphData = {
    html: string;
    style?: Record<string, string>;
};

export type ParagraphBlock = {
    type: "paragraph";
    tag: ParagraphTags;
    data: ParagraphData;
    output: ParagraphData
};

export type ParagraphProps = Omit<ParagraphBlock, "type" | "output"> & {
    className?: string;
    onUpdate: (value: ParagraphData) => void;
};
