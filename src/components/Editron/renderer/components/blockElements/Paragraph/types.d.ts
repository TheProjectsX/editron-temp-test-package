type data = {
    tag: "p";
    html: string;
    style?: Record<string, string>;
};

export type ParagraphBlock = {
    type: "paragraph";
    data: data;
};

export type ParagraphProps = Omit<ParagraphBlock, "type"> & {
    className?: string;
    style?: Record<string, string>;
};
