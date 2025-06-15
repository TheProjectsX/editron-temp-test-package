import { nanoid } from "nanoid";
import { CgFormatSeparator } from "react-icons/cg";
import type { EditorBlock } from "../../../register/types";
import { RxBorderDashed, RxBorderDotted, RxBorderSolid } from "react-icons/rx";

export const structure = {
    name: "Divider",
    icon: CgFormatSeparator,
    type: "divider",
    tags: "hr",
    data: {},
};

export const demo = {
    id: nanoid(10),
    type: "divider",
    tag: "hr",
    data: {},
};

export const settings = [
    {
        name: "Solid",
        icon: RxBorderSolid,
        transform: (block: EditorBlock) => {
            return {
                data: {
                    ...block.data,
                    type: "solid",
                },
            };
        },
    },
    {
        name: "Dashed",
        icon: RxBorderDashed,
        transform: (block: EditorBlock) => {
            return {
                data: {
                    ...block.data,
                    type: "dashed",
                },
            };
        },
    },
    {
        name: "Dotted",
        icon: RxBorderDotted,
        transform: (block: EditorBlock) => {
            return {
                data: {
                    ...block.data,
                    type: "dotted",
                },
            };
        },
    },
];
