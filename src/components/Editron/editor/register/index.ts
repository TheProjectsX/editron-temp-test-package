import Paragraph from "../components/blockElements/Paragraph";
import Heading from "../components/blockElements/Heading";
import type {
    BlockStructure,
    EditorBlock,
    PluginDemo,
    PluginStructure,
    PluginType,
} from "./types";

// All Blocks
const AllBlocks = [Paragraph, Heading];

// All Block Structures
export const BlockStructures: BlockStructure[] = AllBlocks.map(
    (block) => block.structure
);

// All Demo
export const BlockDemos: EditorBlock[] = AllBlocks.map(
    (block) => block.demo as EditorBlock
);

// Register and return new Structure
export type RegisterReturn = {
    component: React.FC;
    structure: BlockStructure | PluginStructure;
    demo: EditorBlock | PluginDemo;
};

export const register = (plugins: PluginType[] = []): RegisterReturn[] => {
    // Ensure all items conform to RegisterReturn type
    const blocks: RegisterReturn[] = AllBlocks.map((block) => ({
        component: block.component as React.FC<any>,
        structure: block.structure,
        demo: block.demo,
    }));
    const pluginItems: RegisterReturn[] = plugins.map((plugin) => ({
        component: plugin.component as React.FC<any>,
        structure: plugin.structure,
        demo: plugin.demo,
    }));
    return [...blocks, ...pluginItems];
};
