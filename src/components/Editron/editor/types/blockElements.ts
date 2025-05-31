/* 
    blockElements.d.ts
    This file contains block element's Tags and Data types
*/

export type HeadingTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type HeadingData = {
    text: string;
};

export type ParagraphTags = "p";
export type ParagraphData = {
    text: string;
};

export type ListTags = "ul" | "li";
export type ListData = {
    values: string[];
};
