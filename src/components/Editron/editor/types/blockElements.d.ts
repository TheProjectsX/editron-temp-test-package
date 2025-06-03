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

export type ListTags = "ul" | "ol";
export type ListData = {
    values: string[];
};

export type AllTags = HeadingTags | ParagraphTags | ListTags;
export type AllData = HeadingData | ParagraphData | ListData;
