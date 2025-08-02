import { nanoid } from "nanoid/non-secure";
import { IoMdCode } from "react-icons/io";

export const structure = {
    name: "Code",
    icon: IoMdCode,
    type: "code",
    tags: "pre",
    data: {
        code: "",
    },
};

export const demo = {
    id: nanoid(10),
    type: "code",
    tag: "pre",
    data: {
        code: "",
    },
};
