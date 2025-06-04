import type { IconType } from "react-icons";
import { BiParagraph } from "react-icons/bi";
import { CgFormatSeparator } from "react-icons/cg";
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
import type { AllData } from "../../types/blockElements";

type SubTags = {
    name: string;
    tag: string;
    icon: IconType;
};

export type BlockStructure = {
    name: string;
    icon: IconType;
    type: string;
    tags: string | SubTags[];
    data: AllData;
};

const BlockStructures: BlockStructure[] = [
    {
        name: "Paragraph",
        icon: BiParagraph,
        type: "paragraph",
        tags: "p",
        data: {
            html: "",
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
            html: "",
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
            values: [
                {
                    html: "",
                },
            ],
        },
    },
    {
        name: "Divider",
        icon: CgFormatSeparator,
        type: "divider",
        tags: "hr",
        data: {},
    },
];

export default BlockStructures;
