import { nanoid } from "nanoid";
import { GrList } from "react-icons/gr";
import {
    MdFormatListNumbered,
    MdOutlineFormatListBulleted,
} from "react-icons/md";

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
