import {
    LuHeading,
    LuHeading1,
    LuHeading2,
    LuHeading3,
    LuHeading4,
    LuHeading5,
    LuHeading6,
} from "react-icons/lu";
import { TbTransform } from "react-icons/tb";
import { AlignSettings } from "../libs/common";
import type { EditorBlock } from "../libs/types";
import type { HeadingBlock } from "./types";
import type { UserConfig } from "../../..";

export const structure = {
    name: "Heading",
    icon: LuHeading,
    type: "heading",
    tags: [
        {
            name: "Heading 1",
            tag: "h1",
            icon: LuHeading1,
        },
        {
            name: "Heading 2",
            tag: "h2",
            icon: LuHeading2,
        },
        {
            name: "Heading 3",
            tag: "h3",
            icon: LuHeading3,
        },
        {
            name: "Heading 4",
            tag: "h4",
            icon: LuHeading4,
        },
        {
            name: "Heading 5",
            tag: "h5",
            icon: LuHeading5,
        },
        {
            name: "Heading 6",
            tag: "h6",
            icon: LuHeading6,
        },
    ],
    data: {
        tag: "h2",
        html: "",
    },
};

export const settings = [
    {
        name: "Convert",
        icon: TbTransform,
        actions: [
            {
                name: "Heading 1",
                icon: LuHeading1,
                transform: (block: EditorBlock<HeadingBlock>) => {
                    return {
                        data: {
                            ...block.data,
                            tag: "h1",
                        },
                    };
                },
            },
            {
                name: "Heading 2",
                icon: LuHeading2,
                transform: (block: EditorBlock<HeadingBlock>) => {
                    return {
                        data: {
                            ...block.data,
                            tag: "h2",
                        },
                    };
                },
            },
            {
                name: "Heading 3",
                icon: LuHeading3,
                transform: (block: EditorBlock<HeadingBlock>) => {
                    return {
                        data: {
                            ...block.data,
                            tag: "h3",
                        },
                    };
                },
            },
            {
                name: "Heading 4",
                icon: LuHeading4,
                transform: (block: EditorBlock<HeadingBlock>) => {
                    return {
                        data: {
                            ...block.data,
                            tag: "h4",
                        },
                    };
                },
            },
            {
                name: "Heading 5",
                icon: LuHeading5,
                transform: (block: EditorBlock<HeadingBlock>) => {
                    return {
                        data: {
                            ...block.data,
                            tag: "h5",
                        },
                    };
                },
            },
            {
                name: "Heading 6",
                icon: LuHeading6,
                transform: (block: EditorBlock<HeadingBlock>) => {
                    return {
                        data: {
                            ...block.data,
                            tag: "h6",
                        },
                    };
                },
            },
        ],
    },
    AlignSettings,
];

export const processor = (
    block: EditorBlock<HeadingBlock>,
    config: UserConfig
) => {
    if (!config.enableTableOfContents) return block;
    if (block.data.flagged) return block;

    const { flagged, ...data } = block.data;

    return {
        ...block,
        data,
    };
};
