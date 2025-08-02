import { nanoid } from "nanoid/non-secure";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { MdAutoMode } from "react-icons/md";
import { TbEyeCode } from "react-icons/tb";
import type { EditorBlock } from "../../../register/types";

export const structure = {
    name: "HTML Preview",
    icon: TbEyeCode,
    type: "html-preview",
    tags: "pre",
    data: {
        html: "",
        mode: "reveal",
    },
};

export const demo = {
    id: nanoid(10),
    type: "html-preview",
    tag: "pre",
    data: {
        html: "",
        mode: "reveal",
    },
};

export const settings = [
    {
        name: "Mode",
        icon: MdAutoMode,
        actions: [
            {
                name: "Preview Only",
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
