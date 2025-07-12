import { CiViewTable } from "react-icons/ci";
import { AlignSettings } from "../libs/common";
import { nanoid } from "nanoid";
import { FaTableColumns } from "react-icons/fa6";
import type { TableBlock } from "./types";
import { LuTable } from "react-icons/lu";

export const structure = {
    name: "Table",
    icon: CiViewTable,
    type: "table",
    tags: "table",
    data: {
        headers: [],
        body: [
            ["", ""],
            ["", ""],
        ],
    },
};

export const demo = {
    id: nanoid(10),
    type: "table",
    tag: "table",
    data: {
        headers: [],
        body: [
            ["", ""],
            ["", ""],
        ],
    },
};

export const settings = [
    {
        name: "With Heading",
        icon: FaTableColumns,
        transform: (block: TableBlock) => {
            return {
                ...block,
                data: {
                    ...block.data,
                    headers: new Array(block.data.body?.[0].length ?? 0).fill(
                        ""
                    ),
                },
            };
        },
    },
    {
        name: "Without Heading",
        icon: LuTable,
        transform: (block: TableBlock) => {
            return {
                ...block,
                data: {
                    ...block.data,
                    headers: [],
                },
            };
        },
    },
    AlignSettings,
];
