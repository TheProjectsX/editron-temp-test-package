import type { IconType } from "react-icons";
import { BiParagraph } from "react-icons/bi";
import { GrList } from "react-icons/gr";
import {
    LuHeading,
    LuHeading1,
    LuHeading2,
    LuHeading3,
    LuHeading4,
    LuHeading5,
    LuHeading6,
} from "react-icons/lu";
import {
    MdFormatListNumbered,
    MdOutlineFormatListBulleted,
} from "react-icons/md";

export type BlockStructure = {
    name: string;
    icon: IconType;
    type: string;
    tags: string | string[];
    data: {};
};

const BlockStructures = [
    {
        name: "Paragraph",
        icon: BiParagraph,
        type: "paragraph",
        tags: "p",
        data: {
            text: "",
        },
    },
    {
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
            text: "",
        },
    },
    {
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
            values: [],
        },
    },
];

export default BlockStructures;
