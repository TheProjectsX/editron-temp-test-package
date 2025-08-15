// Types
import type {
    BlockStructure,
    EditorBlock,
    PluginStructure,
    PluginType,
    SettingsStructure,
} from "./types";
import type { UserConfig } from "..";

// Blocks
import Paragraph from "../components/blockElements/Paragraph";
import Heading from "../components/blockElements/Heading";
import List from "../components/blockElements/List";
import Divider from "../components/blockElements/Divider";
import Code from "../components/blockElements/Code";
import Quote from "../components/blockElements/Quote";
import Image from "../components/blockElements/Image";
import HTMLPreview from "../components/blockElements/HTMLPreview";
import Table from "../components/blockElements/Table";

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
    Table,
];

// All Block Structures
export const BlockStructures: BlockStructure[] = AllBlocks.map(
    (block) => block.structure
);

// Register and return new Structure
export type RegisterReturn = {
    component: React.FC;
    structure: BlockStructure | PluginStructure;
    settings?: SettingsStructure[];
    processor?:
        | ((
              block: EditorBlock,
              config: UserConfig
          ) => Promise<Record<string, any>>)
        | ((
              block: Record<string, any>,
              config: UserConfig
          ) => Promise<Record<string, any>>);
};

export const register = (plugins: PluginType[] = []): RegisterReturn[] => {
    // Ensure all items conform to RegisterReturn type
    const blocks: RegisterReturn[] = AllBlocks.map((block) => ({
        component: block.component as React.FC<any>,
        structure: block.structure,
        settings:
            "settings" in block
                ? (block.settings as SettingsStructure[])
                : undefined,
        processor: "processor" in block ? (block as any).processor : undefined,
    }));
    const pluginItems: RegisterReturn[] = plugins.map((plugin) => ({
        component: plugin.component as React.FC<any>,
        structure: plugin.structure,
        settings: plugin.settings,
        processor: plugin.processor,
    }));
    return [...blocks, ...pluginItems];
};
