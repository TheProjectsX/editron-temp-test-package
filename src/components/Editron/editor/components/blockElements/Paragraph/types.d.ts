type ParagraphTags = "p";
type ParagraphData = {
    html: string;
};

export type ParagraphBlock = {
    type: "paragraph";
    tag: ParagraphTags;
    data: ParagraphData;
};

export type ParagraphProps = Omit<ParagraphBlock, "type"> & {
    className?: string;
    onUpdate: (value: ParagraphData) => void;
};
