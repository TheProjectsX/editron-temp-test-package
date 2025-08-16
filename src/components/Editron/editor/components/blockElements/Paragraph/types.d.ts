type data = {
    tag: "p";
    html: string;
    style?: Record<string, string>;
};

type config = {};

export type ParagraphBlock = {
    type: "paragraph";
    data: data;
    config?: config;
};

export type ParagraphProps = Omit<ParagraphBlock, "type"> & {
    className?: string;
    onUpdate: (value: data) => void;
};
