/*
    blocks.d.ts
    This file contains Types about `Block`.
    Each Block can be many types. Where data from `elements.d.ts` is being used

*/

import type {
    HeadingData,
    HeadingTags,
    ListData,
    ListTags,
    ParagraphData,
    ParagraphTags,
} from "./blockElements";

type HeadingBlock = {
    type: "heading";
    tag: HeadingTags;
    data: HeadingData;
};

type ParagraphBlock = {
    type: "paragraph";
    tag: ParagraphTags;
    data: ParagraphData;
};

type ListBlock = {
    type: "list";
    tag: ListTags;
    data: ListData;
};

export type Block = {
    id: string;
} & (HeadingBlock | ParagraphBlock | ListBlock);
