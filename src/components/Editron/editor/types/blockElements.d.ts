/* 
    blockElements.d.ts
    This file contains block element's Tags and Data types
*/

export type BlockContentType = {
    text: string;
    tag?: string;
    style?: React.CSSProperties;
};

export type CommonDataType = {
    html: string;
};

// Paragraph
export type ParagraphTags = "p";
export type ParagraphData = CommonDataType;

// Heading
export type HeadingTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type HeadingData = CommonDataType;

// List
export type ListTags = "ul" | "ol";
export type ListData = {
    values: CommonDataType[];
};

// Divider
export type DividerTags = "hr";
export type DividerData = {
    text?: string;
    type?: "solid" | "dashed" | "dotted";
};

export type AllTags = ParagraphTags | HeadingTags | ListTags | DividerTags;
export type AllData = ParagraphData | HeadingData | ListData | DividerData;
