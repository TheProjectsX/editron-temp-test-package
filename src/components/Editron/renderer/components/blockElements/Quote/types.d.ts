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
};

export type QuoteProps = Omit<QuoteBlock, "type"> & {
    className?: string;
    style?: Record<string, string>;
};
