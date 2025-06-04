/*
    blocks.d.ts
    This file contains Types about `Block`.
    Each Block can be many types. Where data from `elements.d.ts` is being used

*/

import type {
    DividerData,
    DividerTags,
    HeadingData,
    HeadingTags,
    ListData,
    ListTags,
    ParagraphData,
    ParagraphTags,
} from "./blockElements";

// Paragraph
type ParagraphBlock = {
    type: "paragraph";
    tag: ParagraphTags;
    data: ParagraphData;
};

// Heading
type HeadingBlock = {
    type: "heading";
    tag: HeadingTags;
    data: HeadingData;
};

// List
type ListBlock = {
    type: "list";
    tag: ListTags;
    data: ListData;
};

// Divider
type DividerBlock = {
    type: "divider";
    tag: DividerTags;
    data: DividerData;
};

export type Block = {
    id: string;
} & (ParagraphBlock | HeadingBlock | ListBlock | DividerBlock);
