import { nanoid } from "nanoid";
import { IoMdGlobe } from "react-icons/io";

export const structure = {
    name: "Webpage",
    icon: IoMdGlobe,
    type: "webpage",
    tags: "a",
    data: {
        url: "",
    },
};

export const demo = {
    id: nanoid(10),
    type: "webpage",
    tag: "a",
    data: { url: "" },
};
