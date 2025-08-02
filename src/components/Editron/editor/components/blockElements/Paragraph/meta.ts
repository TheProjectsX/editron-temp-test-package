import { nanoid } from "nanoid/non-secure";
import { BiParagraph } from "react-icons/bi";
import { AlignSettings } from "../libs/common";

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

export const settings = [AlignSettings];
