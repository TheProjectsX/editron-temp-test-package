// Types
import type {
    BlockStructure,
    EditorBlock,
    PluginDemo,
    PluginStructure,
    PluginType,
    SettingsStructure,
} from "./types";

// Blocks
import Paragraph from "../components/blockElements/Paragraph";
import Heading from "../components/blockElements/Heading";
import List from "../components/blockElements/List";
import Divider from "../components/blockElements/Divider";
import Code from "../components/blockElements/Code";
import Quote from "../components/blockElements/Quote";
import Image from "../components/blockElements/Image";
import HTMLPreview from "../components/blockElements/HTMLPreview";

// All Blocks
const AllBlocks = [
    Paragraph,
    Heading,
    List,
    Divider,
    Code,
    Quote,
    Image,
    HTMLPreview,
];

// All Block Structures
export const BlockStructures: BlockStructure[] = AllBlocks.map(
    (block) => block.structure
);

// All Demo
export const BlockDemos: EditorBlock[] = AllBlocks.map(
    (block) => block.demo as EditorBlock
);

// Inline Toolbar not Supported
export const NoInlineToolbar = AllBlocks.filter(
    (block) =>
        "inlineToolbar" in block && (block as any).inlineToolbar === false
).map((block) => block.structure.type);

// Register and return new Structure
export type RegisterReturn = {
    component: React.FC;
    structure: BlockStructure | PluginStructure;
    demo: EditorBlock | PluginDemo;
    settings?: SettingsStructure[];
};

export const register = (plugins: PluginType[] = []): RegisterReturn[] => {
    // Ensure all items conform to RegisterReturn type
    const blocks: RegisterReturn[] = AllBlocks.map((block) => ({
        component: block.component as React.FC<any>,
        structure: block.structure,
        demo: block.demo,
        settings:
            "settings" in block
                ? (block.settings as SettingsStructure[])
                : undefined,
    }));
    const pluginItems: RegisterReturn[] = plugins.map((plugin) => ({
        component: plugin.component as React.FC<any>,
        structure: plugin.structure,
        demo: plugin.demo,
        settings: plugin.settings,
    }));
    return [...blocks, ...pluginItems];
};
