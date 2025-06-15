import { nanoid } from "nanoid";
import { IoMdQuote } from "react-icons/io";

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
