import type { IconType } from "react-icons";

/*
// ---------------------------------- NOT USING ---------------------------------- //
import type { ParagraphBlock } from "../components/blockElements/Paragraph/types";
import type { HeadingBlock } from "../components/blockElements/Heading/types";
import type { ListBlock } from "../components/blockElements/List/types";
import type { DividerBlock } from "../components/blockElements/Divider/types";
import type { CodeBlock } from "../components/blockElements/Code/types";
import type { QuoteBlock } from "../components/blockElements/Quote/types";
import type { WebpageBlock } from "../components/blockElements/Webpage/types";
import type { ImageBlock } from "../components/blockElements/Image/types";
import type { HTMLPreviewBlock } from "../components/blockElements/HTMLPreview/types";
import type { TableBlock } from "../components/blockElements/Table/types";

// All Block Types
type AllBlocks =
    | ParagraphBlock
    | HeadingBlock
    | ListBlock
    | DividerBlock
    | CodeBlock
    | QuoteBlock
    | ImageBlock
    | HTMLPreviewBlock
    | TableBlock;

// All Tags
type AllTags = AllBlocks["data"]["tag"];

// All Types
type AllTypes = AllBlocks["type"];

// All Data
type AllData = AllBlocks["data"];


// Editor Block
export type EditorBlock = {
    id: string;
    type: string;
    config?: Record<string, any>;
    data: { tag: string } & Record<string, any>;
};

// Structure Tag Type
type SubTag = {
    name: string;
    tag: string;
    icon: IconType;
};

// Block Structure
export type BlockStructure = {
    name: string;
    icon: IconType;
    type: string;
    tags: string | SubTag[];
    data: { tag: string } & Record<string, any>;
};

// Settings Structure
export type SettingsStructure = {
    name: string;
    icon?: IconType;
    transform?: (values: EditorBlock) => Partial<EditorBlock> | null;
    actions: {
        name: string;
        icon?: IconType;
        transform: (values: EditorBlock) => Partial<EditorBlock> | null;
    }[];
};

// Plugin Structure
export type PluginStructure = Omit<BlockStructure, "data"> & {
    data: { tag: string } & Record<string, any>;
};

// Plugin Props
export type PluginProps = {
    className?: string;
    data: { tag: string } & Record<string, any>;
    onUpdate: (value: Record<string, any>) => void;
};

// Plugin type
export type PluginType = {
    component: React.FC<PluginProps>;
    structure: PluginStructure;
    settings?: SettingsStructure[];
    processor?: (block: Record<string, any>) => Promise<Record<string, any>>;
};
// ---------------------------------- NOT USING ---------------------------------- //
*/

import {
    EditorBlock,
    BlockStructure,
    SettingsStructure,
    PluginProps,
    PluginStructure,
    PluginType,
} from "..";

export {
    EditorBlock,
    BlockStructure,
    SettingsStructure,
    PluginProps,
    PluginStructure,
    PluginType,
};
