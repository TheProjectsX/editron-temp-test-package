import { BsChatLeftQuoteFill } from "react-icons/bs";
import { FaQuoteRight } from "react-icons/fa";
import { IoMdQuote } from "react-icons/io";
import type { QuoteBlock } from "./types";
import { AlignSettings } from "../libs/common";

export const structure = {
    name: "Quote",
    icon: IoMdQuote,
    type: "quote",
    tags: "blockquote",
    data: {
        author: "",
        quote: "",
    },
};

export const settings = [
    {
        name: "Plain",
        icon: FaQuoteRight,
        transform: (block: QuoteBlock) => {
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
        transform: (block: QuoteBlock) => {
            return {
                data: {
                    ...block.data,
                    type: "highlighted",
                },
            };
        },
    },
    AlignSettings,
];
