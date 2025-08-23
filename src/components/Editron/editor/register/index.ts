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
    Table,
    Divider,
    Code,
    Quote,
    Image,
    HTMLPreview,
];

// Structure `block structure` to be useable in the register throughout the app
const genStructure = (
    block: Record<string, any>,
    config: UserConfig["blocks"]
): BlockStructure | PluginStructure => {
    const structure: BlockStructure = { ...block.structure };

    let tag;
    if (Array.isArray(structure.tags)) {
        const blockConf = config?.[structure.type];

        if (!blockConf?.defaultTag) {
            tag = structure.data.tag;
        } else {
            if (
                structure.tags
                    .map((item) => item.tag)
                    .includes(blockConf.defaultTag)
            ) {
                tag = blockConf.defaultTag;
            } else {
                tag = structure.data.tag;
            }

            tag = tag ?? structure.tags[0].tag;
        }
    } else {
        tag = structure.tags;
    }
    structure["data"]["tag"] = tag ?? structure;

    return structure;
};

// Structure config based on the block type
const genConfig = (config: UserConfig, type: string) => {
    const defaultConfig: {
        [name: string]: {
            inlineToolbar: boolean;
        };
    } = {
        divider: {
            inlineToolbar: false,
        },
        code: {
            inlineToolbar: false,
        },
        image: {
            inlineToolbar: false,
        },
        "html-preview": {
            inlineToolbar: false,
        },
    };

    const typeConf = {
        ...(config.blocks?.[type] ?? {}),
        ...(defaultConfig[type] ?? {}),
    } as any;

    if (config.enableTableOfContents && type === "heading") {
        typeConf["flaggable"] = true;
    }

    return typeConf;
};

// Register and return new Structure
export type RegisterReturn = {
    component: React.FC;
    structure: BlockStructure | PluginStructure;
    settings?: SettingsStructure[];
    config?: Record<string, any>;
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

export const register = (
    plugins: PluginType[] = [],
    config: UserConfig
): RegisterReturn[] => {
    // Ensure all items conform to RegisterReturn type
    const blocks: RegisterReturn[] = AllBlocks.map((block) => ({
        component: block.component as React.FC<any>,
        structure: genStructure(block, config.blocks),
        config: genConfig(config, block.structure.type),
        settings:
            "settings" in block
                ? (block.settings as SettingsStructure[])
                : undefined,
        processor: "processor" in block ? (block as any).processor : undefined,
    }));

    const pluginItems: RegisterReturn[] = plugins.map((plugin) => ({
        component: plugin.component as React.FC<any>,
        structure: genStructure(plugin, config.blocks),
        config: genConfig(config, plugin.structure.type),
        settings: plugin.settings,
        processor: plugin.processor,
    }));
    return [...blocks, ...pluginItems];
};
