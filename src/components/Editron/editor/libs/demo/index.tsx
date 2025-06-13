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

export const DividerDemo = {
    id: nanoid(10),
    type: "divider",
    tag: "hr",
    data: {},
} as EditorBlock;

export const CodeDemo = {
    id: nanoid(10),
    type: "code",
    tag: "pre",
    data: {
        code: "",
    },
} as EditorBlock;

export const QuoteDemo = {
    id: nanoid(10),
    type: "quote",
    tag: "blockquote",
    data: {
        quote: ""
    },
} as EditorBlock;

export const AllDemo = [
    ParagraphDemo,
    HeadingDemo,
    ListDemo,
    DividerDemo,
    CodeDemo,
    QuoteDemo,
];
