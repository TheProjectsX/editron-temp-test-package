import { nanoid } from "nanoid/non-secure";
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
        html: "",
    },
};

export const demo = {
    id: nanoid(10),
    type: "heading",
    tag: "h2",
    data: { html: "" },
};

export const settings = [
    {
        name: "Convert",
        icon: TbTransform,
        actions: [
            {
                name: "Heading 1",
                icon: LuHeading1,
                transform: () => {
                    return { tag: "h1" };
                },
            },
            {
                name: "Heading 2",
                icon: LuHeading2,
                transform: () => {
                    return { tag: "h2" };
                },
            },
            {
                name: "Heading 3",
                icon: LuHeading3,
                transform: () => {
                    return { tag: "h3" };
                },
            },
            {
                name: "Heading 4",
                icon: LuHeading4,
                transform: () => {
                    return { tag: "h4" };
                },
            },
            {
                name: "Heading 5",
                icon: LuHeading5,
                transform: () => {
                    return { tag: "h5" };
                },
            },
            {
                name: "Heading 6",
                icon: LuHeading6,
                transform: () => {
                    return { tag: "h6" };
                },
            },
        ],
    },
    AlignSettings,
];
