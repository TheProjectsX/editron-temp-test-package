import { nanoid } from "nanoid/non-secure";
import { GrList } from "react-icons/gr";
import {
    MdFormatListNumbered,
    MdOutlineFormatListBulleted,
} from "react-icons/md";
import { AlignSettings } from "../libs/common";

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
        values: [
            {
                html: "",
            },
        ],
    },
};

export const demo = {
    id: nanoid(10),
    type: "list",
    tag: "ul",
    data: {
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
        transform: () => {
            return { tag: "ol" };
        },
    },
    {
        name: "Unordered",
        icon: MdOutlineFormatListBulleted,
        transform: () => {
            return { tag: "ul" };
        },
    },
    AlignSettings
];
