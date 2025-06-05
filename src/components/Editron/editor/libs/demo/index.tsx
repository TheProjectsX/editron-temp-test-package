import { nanoid } from "nanoid";
import type { EditorBlock } from "../../types/blocks";

export const ParagraphDemo = {
    id: nanoid(10),
    type: "paragraph",
    tag: "p",
    data: { html: "" },
} as EditorBlock;

export const HeadingDemo = {
    id: nanoid(10),
    type: "heading",
    tag: "h2",
    data: { html: "" },
} as EditorBlock;

export const ListDemo = {
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
} as EditorBlock;

export const AllDemo = [ParagraphDemo, HeadingDemo, ListDemo];
