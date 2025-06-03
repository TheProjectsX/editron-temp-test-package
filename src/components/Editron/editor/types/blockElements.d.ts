/* 
    blockElements.d.ts
    This file contains block element's Tags and Data types
*/

// Heading
export type HeadingTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type HeadingData = {
    text: string;
};

// Paragraph
export type ParagraphTags = "p";
export type ParagraphData = {
    text: string;
};

// List
export type ListTags = "ul" | "ol";
export type ListData = {
    values: string[];
};

// Divider
export type DividerTags = "hr";
export type DividerData = {
    text?: string;
    type?: "solid" | "dashed" | "dotted";
};

export type AllTags = HeadingTags | ParagraphTags | ListTags | DividerTags;
export type AllData = HeadingData | ParagraphData | ListData | DividerData;
