import { nanoid } from "nanoid";
import type { Block } from "../../types/blocks";

const exampleBlock = {
    content: [
        {
            text: "Hello, world!",
            tag: "b",
            style: undefined,
        },
        {
            text: " This is a test.",
            tag: "i",
            style: undefined,
        },
        {
            text: " Normal text.",
            tag: undefined,
            style: undefined,
        },
    ],
    html: "<b>Hello, world!</b><i> This is a test.</i> Normal text!",
};

const CommonDemoData = {
    content: [
        {
            text: "",
            tag: undefined,
            style: undefined,
        },
    ],
    html: "",
};

export const ParagraphDemo = {
    id: nanoid(10),
    type: "paragraph",
    tag: "p",
    data: { ...exampleBlock },
} as Block;

export const HeadingDemo = {
    id: nanoid(10),
    type: "heading",
    tag: "h2",
    data: { ...CommonDemoData },
} as Block;

export const ListDemo = {
    id: nanoid(10),
    type: "list",
    tag: "ul",
    data: {
        values: [
            {
                ...CommonDemoData,
            },
        ],
    },
} as Block;

export const AllDemo = [ParagraphDemo, HeadingDemo, ListDemo];
