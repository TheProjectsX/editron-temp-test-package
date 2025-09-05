import { LuEye } from "react-icons/lu";
import { MdAutoMode } from "react-icons/md";
import { TbEyeCode } from "react-icons/tb";
import type { EditorBlock } from "../libs/types";
import type { HTMLPreviewBlock } from "./types";
import { VscPreview } from "react-icons/vsc";
import { IoCodeSlash } from "react-icons/io5";

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

export const settings = [
    {
        name: "Mode",
        icon: MdAutoMode,
        actions: [
            {
                name: "Reveal",
                icon: LuEye,
                transform: (block: EditorBlock<HTMLPreviewBlock>) => {
                    return {
                        data: {
                            ...block.data,
                            mode: "reveal",
                        },
                    };
                },
            },
            {
                name: "Preview Only",
                icon: VscPreview,
                transform: (block: EditorBlock<HTMLPreviewBlock>) => {
                    return {
                        data: {
                            ...block.data,
                            mode: "preview",
                        },
                    };
                },
            },
            {
                name: "Code Only",
                icon: IoCodeSlash,
                transform: (block: EditorBlock<HTMLPreviewBlock>) => {
                    return {
                        data: {
                            ...block.data,
                            mode: "hide",
                        },
                    };
                },
            },
        ],
    },
];
