import type { ParagraphBlock } from "../components/blockElements/Paragraph/types";

// All Block Types
type AllBlocks = ParagraphBlock;

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
