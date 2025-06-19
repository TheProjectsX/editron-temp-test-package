import {
    FiAlignCenter,
    FiAlignJustify,
    FiAlignLeft,
    FiAlignRight,
} from "react-icons/fi";
import { MdAlignHorizontalCenter } from "react-icons/md";
import type { AllBlocks } from "../../../register/types";

export const AlignSettings = {
    name: "Align",
    icon: MdAlignHorizontalCenter,
    actions: [
        {
            name: "Justify",
            icon: FiAlignJustify,
            transform: (block: AllBlocks) => {
                return {
                    data: {
                        ...block.data,
                        style: {
                            ...("style" in block.data &&
                            typeof block.data.style === "object"
                                ? block.data.style
                                : {}),
                            textAlign: "justify",
                        },
                    },
                };
            },
        },
        {
            name: "Center",
            icon: FiAlignCenter,
            transform: (block: AllBlocks) => {
                return {
                    data: {
                        ...block.data,
                        style: {
                            ...("style" in block.data &&
                            typeof block.data.style === "object"
                                ? block.data.style
                                : {}),
                            textAlign: "center",
                        },
                    },
                };
            },
        },
        {
            name: "Left",
            icon: FiAlignLeft,
            transform: (block: AllBlocks) => {
                return {
                    data: {
                        ...block.data,
                        style: {
                            ...("style" in block.data &&
                            typeof block.data.style === "object"
                                ? block.data.style
                                : {}),
                            textAlign: "left",
                        },
                    },
                };
            },
        },
        {
            name: "Right",
            icon: FiAlignRight,
            transform: (block: AllBlocks) => {
                return {
                    data: {
                        ...block.data,
                        style: {
                            ...("style" in block.data &&
                            typeof block.data.style === "object"
                                ? block.data.style
                                : {}),
                            textAlign: "right",
                        },
                    },
                };
            },
        },
    ],
};
