import { nanoid } from "nanoid";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { MdAutoMode } from "react-icons/md";
import { TbEyeCode } from "react-icons/tb";
import type { EditorBlock } from "../../../register/types";

export const structure = {
    name: "Code Preview",
    icon: TbEyeCode,
    type: "code-preview",
    tags: "pre",
    data: {
        code: "",
        mode: "reveal",
    },
};

export const demo = {
    id: nanoid(10),
    type: "code-preview",
    tag: "pre",
    data: {
        code: "",
        mode: "reveal",
    },
};

export const settings = [
    {
        name: "Mode",
        icon: MdAutoMode,
        actions: [
            {
                name: "Preview",
                icon: LuEyeClosed,
                transform: (block: EditorBlock) => {
                    return {
                        data: {
                            ...block.data,
                            mode: "preview",
                        },
                    };
                },
            },
            {
                name: "Reveal",
                icon: LuEye,
                transform: (block: EditorBlock) => {
                    return {
                        data: {
                            ...block.data,
                            mode: "reveal",
                        },
                    };
                },
            },
        ],
    },
];
