/*
    blocks.d.ts
    This file contains Types about `Block`.
    Each Block can be many types. Where data from `elements.d.ts` is being used

*/

import type {
    EditorDividerData,
    DividerTags,
    EditorHeadingData,
    HeadingTags,
    EditorListData,
    ListTags,
    EditorParagraphData,
    ParagraphTags,
    OutputParagraphData,
    OutputHeadingData,
    OutputListData,
    OutputDividerData,
    CodeTags,
    EditorCodeData,
    OutputCodeData,
    QuoteTags,
    EditorQuoteData,
    OutputQuoteData,
} from "./blockElements";

type BaseBlock<BlockType extends string, TagType, DataType> = {
    type: BlockType;
    tag: TagType;
    data: DataType;
};

type BaseBlockReplaceData<T extends { data: any }, NewData> = Omit<
    T,
    "data"
> & {
    data: NewData;
};

// Paragraph
type ParagraphBlock = BaseBlock<
    "paragraph",
    ParagraphTags,
    EditorParagraphData
>;

// Heading
type HeadingBlock = BaseBlock<"heading", HeadingTags, EditorHeadingData>;

// List
type ListBlock = BaseBlock<"list", ListTags, EditorListData>;

// Divider
type DividerBlock = BaseBlock<"divider", DividerTags, EditorDividerData>;

// Code
type CodeBlock = BaseBlock<"code", CodeTags, EditorCodeData>;

// Quote
type QuoteBlock = BaseBlock<"quote", QuoteTags, EditorQuoteData>;

// Exports
export type EditorBlock = {
    id: string;
} & (
    | ParagraphBlock
    | HeadingBlock
    | ListBlock
    | DividerBlock
    | CodeBlock
    | QuoteBlock
);

export type AllBlockType = EditorBlock["type"];

export type OutputBlock = {
    id: string;
} & (
    | BaseBlockReplaceData<ParagraphBlock, OutputParagraphData>
    | BaseBlockReplaceData<HeadingBlock, OutputHeadingData>
    | BaseBlockReplaceData<ListBlock, OutputListData>
    | BaseBlockReplaceData<DividerBlock, OutputDividerData>
    | BaseBlockReplaceData<CodeBlock, OutputCodeData>
    | BaseBlockReplaceData<QuoteBlock, OutputQuoteData>
);
