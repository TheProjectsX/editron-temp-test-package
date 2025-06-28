type ParagraphTags = "p";
type ParagraphData = {
    html: string;
    style?: Record<string, string>;
};

export type ParagraphBlock = {
    type: "paragraph";
    tag: ParagraphTags;
    data: ParagraphData;
};

export type ParagraphProps = Omit<ParagraphBlock, "type"> & {
    className?: string;
    style?: Record<string, string>;
};
