type data = {
    tag: "p";
    html: string;
    style?: Record<string, string>;
};

export type ParagraphBlock = {
    id: string;
    type: "paragraph";
    data: data;
};

export type ParagraphProps = {
    className?: string;
    style?: Record<string, string>;
    metadata: ParagraphBlock;
};
