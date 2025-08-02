import { nanoid } from "nanoid/non-secure";
import { GiResize } from "react-icons/gi";
import { IoImageOutline } from "react-icons/io5";
import { MdPhotoSizeSelectLarge } from "react-icons/md";
import { SlSizeActual, SlSizeFullscreen } from "react-icons/sl";
import type { EditorBlock } from "../../../register/types";
import { LiaVectorSquareSolid } from "react-icons/lia";
import type { UserConfig } from "../../..";

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

export const processor = async (block: EditorBlock, config: UserConfig) => {
    if (!config.uploadImage) return block;

    // no file to upload ⇒ skip this block entirely
    if (!("file" in block.data) || !block.data.file) return undefined;

    let file: { name: string; src: string; size?: number };

    // upload if it's a real File
    if (block.data.file instanceof File) {
        const url = await config.uploadImage(block.data.file);
        if (!url) return block;

        file = {
            name: block.data.file.name,
            src: url,
            size: block.data.file.size,
        };
    } else {
        // let's assume, already stored as { name, src, size }
        file = block.data.file;
    }

    return {
        ...block,
        data: { ...block.data, file },
    };
};
