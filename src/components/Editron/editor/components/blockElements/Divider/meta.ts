import { nanoid } from "nanoid";
import { CgFormatSeparator } from "react-icons/cg";

export const structure = {
    name: "Divider",
    icon: CgFormatSeparator,
    type: "divider",
    tags: "hr",
    data: {},
};

export const demo = {
    id: nanoid(10),
    type: "divider",
    tag: "hr",
    data: {},
};
