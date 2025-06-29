import type { CodeBlock } from "../components/blockElements/Code/types";
import type { DividerBlock } from "../components/blockElements/Divider/types";
import type { HeadingBlock } from "../components/blockElements/Heading/types";
import type { ParagraphBlock } from "../components/blockElements/Paragraph/types";
import type { QuoteBlock } from "../components/blockElements/Quote/types";

// All Block Types
type AllBlocks =
    | ParagraphBlock
    | HeadingBlock
    | ListBlock
    | DividerBlock
    | CodeBlock
    | QuoteBlock;

// Renderer Blocks
export type RendererBlock = {
    id: string;
} & AllBlocks;

// All Types
export type AllTypes = AllBlocks["type"];

// All Tags
export type AllTags = AllBlocks["tag"];

// All Data
export type AllData = AllBlocks["data"];
