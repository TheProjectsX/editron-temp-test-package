import { BiParagraph } from "react-icons/bi";
import { nanoid } from "nanoid";

export const structure = {
    name: "Paragraph",
    icon: BiParagraph,
    type: "paragraph",
    tags: "p",
    data: {
        html: "",
    },
};

export const demo = {
    id: nanoid(10),
    type: "paragraph",
    tag: "p",
    data: { html: "" },
};
