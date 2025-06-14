import { ParagraphBlock } from "../components/blockElements/Paragraph/types";
import { HeadingBlock } from "../components/blockElements/Heading/types";
import type { IconType } from "react-icons";

// All Props
type AllProps = [ParagraphBlock, HeadingBlock];

// Editor Block
export type EditorBlock = {
    id: string;
} & AllProps[number];

// All Tags
export type AllTags = AllProps[number]["tag"];

// All Data
export type AllData = AllProps[number]["data"];

// Block Structure
export type BlockStructure = {
    name: string;
    icon: IconType;
    type: string;
    tags: string | SubTags[];
    data: AllData;
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
};
