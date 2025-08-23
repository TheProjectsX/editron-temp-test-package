import { GrList } from "react-icons/gr";
import {
    MdFormatListNumbered,
    MdOutlineFormatListBulleted,
} from "react-icons/md";
import { AlignSettings } from "../libs/common";
import type { EditorBlock } from "../libs/types";
import type { ListBlock } from "./types";

export const structure = {
    name: "List",
    icon: GrList,
    type: "list",
    tags: [
        {
            name: "Ordered List",
            tag: "ol",
            icon: MdFormatListNumbered,
        },
        {
            name: "Unordered List",
            tag: "ul",
            icon: MdOutlineFormatListBulleted,
        },
    ],
    data: {
        tag: "ul",
        values: [
            {
                html: "",
            },
        ],
    },
};

export const settings = [
    {
        name: "Ordered",
        icon: MdFormatListNumbered,
        transform: (block: EditorBlock<ListBlock>) => {
            return {
                data: {
                    ...block.data,
                    tag: "ol",
                },
            };
        },
    },
    {
        name: "Unordered",
        icon: MdOutlineFormatListBulleted,
        transform: (block: EditorBlock<ListBlock>) => {
            return {
                data: {
                    ...block.data,
                    tag: "ul",
                },
            };
        },
    },
    AlignSettings,
];
