type data = {
    tag: "blockquote";
    quote: string;
    author: string;
    type?: "plain" | "highlighted";
    style?: Record<string, string>;
};

export type QuoteBlock = {
    id: string;
    type: "quote";
    data: data;
};

export type QuoteProps = {
    className?: string;
    style?: Record<string, string>;
    metadata: QuoteBlock;
};
