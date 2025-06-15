export type QuoteTags = "blockquote";
export type QuoteData = {
    quote: string;
    type?: "plain" | "highlighted";
};

export type QuoteBlock = {
    type: "quote";
    tag: QuoteTags;
    data: QuoteData;
};

export type QuoteProps = Omit<QuoteBlock, "type"> & {
    className?: string;
    onUpdate: (value: QuoteData) => void;
};
