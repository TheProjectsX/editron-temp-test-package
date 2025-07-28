export type QuoteTags = "blockquote";
export type QuoteData = {
    quote: string;
    author: string;
    type?: "plain" | "highlighted";
    style?: Record<string, string>;
};

export type QuoteBlock = {
    type: "quote";
    tag: QuoteTags;
    data: QuoteData;
    output: QuoteData;
};

export type QuoteProps = Omit<QuoteBlock, "type" | "output"> & {
    className?: string;
    onUpdate: (value: QuoteData) => void;
};
