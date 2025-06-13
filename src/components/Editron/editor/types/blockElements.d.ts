/* 
    blockElements.d.ts
    This file contains block element's Tags and Data types
*/

export type BlockContentType = {
    text: string;
    tag?: string;
    style?: React.CSSProperties;
};

export type EditorCommonDataType = {
    html: string;
};

export type OutputCommonDataType = {
    html: string;
};

// Paragraph
export type ParagraphTags = "p";
export type EditorParagraphData = EditorCommonDataType;
export type OutputParagraphData = OutputCommonDataType;

// Heading
export type HeadingTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type EditorHeadingData = EditorCommonDataType;
export type OutputHeadingData = OutputCommonDataType;

// List
export type ListTags = "ul" | "ol";
export type EditorListData = {
    values: EditorCommonDataType[];
};
export type OutputListData = {
    values: OutputCommonDataType[];
};

// Divider
export type DividerTags = "hr";
export type EditorDividerData = {
    text?: string;
    type?: "solid" | "dashed" | "dotted";
};
export type OutputDividerData = EditorDividerData;

// Code
export type CodeTags = "pre";
export type EditorCodeData = {
    code: string;
};
export type OutputCodeData = EditorCodeData;

// Quote (Block Quote)
export type QuoteTags = "blockquote";
export type EditorQuoteData = {
    quote: string;
    type?: "plain" | "highlighted";
};
export type OutputQuoteData = EditorQuoteData;

export type AllTags =
    | ParagraphTags
    | HeadingTags
    | ListTags
    | DividerTags
    | CodeTags
    | QuoteTags;

export type EditorAllData =
    | EditorParagraphData
    | EditorHeadingData
    | EditorListData
    | EditorDividerData
    | EditorCodeData
    | EditorQuoteData;
