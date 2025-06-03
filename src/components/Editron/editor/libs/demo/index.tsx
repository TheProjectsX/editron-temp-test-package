import { nanoid } from "nanoid";
import type { Block } from "../../types/blocks";

export const ParagraphDemo = {
    id: nanoid(10),
    type: "paragraph",
    tag: "p",
    data: {
        text: "",
    },
} as Block

export const HeadingDemo = {
    id: nanoid(10),
    type: "heading",
    tag: "h2",
    data: {
        text: "",
    },
} as Block

export const ListDemo = {
    id: nanoid(10),
    type: "list",
    tag: "ul",
    data: {
        values: [],
    },
} as Block


export const AllDemo = [ParagraphDemo, HeadingDemo, ListDemo]