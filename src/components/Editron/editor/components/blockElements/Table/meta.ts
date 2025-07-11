import { CiViewTable } from "react-icons/ci";
import { AlignSettings } from "../libs/common";
import { nanoid } from "nanoid";

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
        headers: ["", ""],
        body: [
            ["", ""],
            ["", ""],
        ],
    },
};

export const settings = [AlignSettings];
