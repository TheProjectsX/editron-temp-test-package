import { nanoid } from "nanoid";
import { BsChatLeftQuoteFill } from "react-icons/bs";
import { FaQuoteRight } from "react-icons/fa";
import { IoMdQuote } from "react-icons/io";
import type { EditorBlock } from "../../../register/types";

export const structure = {
    name: "Quote",
    icon: IoMdQuote,
    type: "quote",
    tags: "blockquote",
    data: {
        quote: "",
    },
};

export const demo = {
    id: nanoid(10),
    type: "quote",
    tag: "blockquote",
    data: {
        quote: "",
    },
};

export const settings = [
    {
        name: "Plain",
        icon: FaQuoteRight,
        transform: (block: EditorBlock) => {
            return {
                data: {
                    ...block.data,
                    type: "plain",
                },
            };
        },
    },
    {
        name: "Highlighted",
        icon: BsChatLeftQuoteFill,
        transform: (block: EditorBlock) => {
            return {
                data: {
                    ...block.data,
                    type: "highlighted",
                },
            };
        },
    },
];
