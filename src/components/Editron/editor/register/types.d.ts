import type { IconType } from "react-icons";

import type { ParagraphBlock } from "../components/blockElements/Paragraph/types";
import type { HeadingBlock } from "../components/blockElements/Heading/types";
import type { ListBlock } from "../components/blockElements/List/types";
import type { DividerBlock } from "../components/blockElements/Divider/types";
import type { CodeBlock } from "../components/blockElements/Code/types";
import type { QuoteBlock } from "../components/blockElements/Quote/types";

// All Block Types
type AllBlocks =
    | ParagraphBlock
    | HeadingBlock
    | ListBlock
    | DividerBlock
    | CodeBlock
    | QuoteBlock;

// Editor Block
export type EditorBlock = {
    id: string;
} & AllBlocks;

// All Tags
export type AllTags = AllBlocks["tag"];

// All Types
export type AllTypes = AllBlocks["type"];

// All Data
export type AllData = AllBlocks["data"];

// Block Structure
export type BlockStructure = {
    name: string;
    icon: IconType;
    type: string;
    tags: string | SubTags[];
    data: AllData;
};

// Settings Structure
export type SettingsStructure = {
    name: string;
    icon: IconType;
    transform: (values: EditorBlock) => Partial<EditorBlock> | null;
};

// Plugin Structure
export type PluginStructure = Omit<BlockStructure, "data"> & {
    data: Record<string, any>;
};

// Plugin Demo
export type PluginDemo = {
    type: string;
    tag: string;
    data: Record<string, any>;
};

// Plugin Props
export type PluginProps = {
    className?: string;
    tag?: string;
    data: Record<string, any>;
    onUpdate: (value: any) => void;
};

// Plugin type
export type PluginType = {
    component: React.FC<PluginProps>;
    structure: PluginStructure;
    demo: PluginDemo;
    settings?: SettingsStructure[];
};
