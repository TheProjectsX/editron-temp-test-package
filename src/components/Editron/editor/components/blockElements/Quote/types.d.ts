type data = {
    tag: "blockquote";
    quote: string;
    author: string;
    type?: "plain" | "highlighted";
    style?: Record<string, string>;
};

type config = {};

export type QuoteBlock = {
    type: "quote";
    data: data;
    config?: config;
};

export type QuoteProps = Omit<QuoteBlock, "type"> & {
    className?: string;
    onUpdate: (value: data) => void;
};
