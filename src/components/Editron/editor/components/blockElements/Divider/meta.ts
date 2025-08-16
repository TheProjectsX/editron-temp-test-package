import { CgFormatSeparator } from "react-icons/cg";
import { RxBorderDashed, RxBorderDotted, RxBorderSolid } from "react-icons/rx";
import type { EditorBlock } from "../libs/types";
import type { DividerBlock } from "./types";

export const structure = {
    name: "Divider",
    icon: CgFormatSeparator,
    type: "divider",
    tags: "hr",
    data: {},
};

export const settings = [
    {
        name: "Solid",
        icon: RxBorderSolid,
        transform: (block: EditorBlock<DividerBlock>) => {
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
        transform: (block: EditorBlock<DividerBlock>) => {
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
        transform: (block: EditorBlock<DividerBlock>) => {
            return {
                data: {
                    ...block.data,
                    type: "dotted",
                },
            };
        },
    },
];
