import { nanoid } from "nanoid";
import { GiResize } from "react-icons/gi";
import { IoImageOutline } from "react-icons/io5";
import { MdPhotoSizeSelectLarge } from "react-icons/md";
import { SlSizeActual, SlSizeFullscreen } from "react-icons/sl";
import type { EditorBlock } from "../../../register/types";
import { LiaVectorSquareSolid } from "react-icons/lia";

export const structure = {
    name: "Image",
    icon: IoImageOutline,
    type: "image",
    tags: "img",
    data: {
        file: null,
    },
};

export const demo = {
    id: nanoid(10),
    type: "image",
    tag: "img",
    data: { file: null },
};

export const settings = [
    {
        name: "Stretching",
        icon: SlSizeFullscreen,
        actions: [
            {
                name: "Free Size",
                icon: MdPhotoSizeSelectLarge,
                transform: (block: EditorBlock) => {
                    return { data: { ...block.data, type: "free" } };
                },
            },
            {
                name: "Fill",
                icon: LiaVectorSquareSolid,
                transform: (block: EditorBlock) => {
                    return { data: { ...block.data, type: "fill" } };
                },
            },
            {
                name: "Cover",
                icon: GiResize,
                transform: (block: EditorBlock) => {
                    return { data: { ...block.data, type: "cover" } };
                },
            },
            {
                name: "Contain",
                icon: SlSizeActual,
                transform: (block: EditorBlock) => {
                    return { data: { ...block.data, type: "contain" } };
                },
            },
        ],
    },
];
