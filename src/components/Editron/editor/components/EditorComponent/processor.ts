import type { UserConfig } from "../..";
import type { EditorBlock, OutputDataBlock } from "../../register/types";

export const processExport = async (
    blocks: EditorBlock[],
    config: UserConfig = {}
): Promise<OutputDataBlock[]> => {
    const processed = await Promise.all(
        blocks.map(async (block) => {
            if (block.type !== "image") return block; // keep non-image blocks

            // if there is no uploader, keep the block unchanged
            if (!config.uploadImage) return block;

            // no file to upload ⇒ skip this block entirely
            if (!("file" in block.data) || !block.data.file) return undefined;

            let file: File | { name: string; src: string; size?: number };

            // upload if it's a real File
            if (block.data.file instanceof File) {
                const url = await config.uploadImage(block.data.file);
                if (url) {
                    file = {
                        name: block.data.file.name,
                        src: url,
                        size: block.data.file.size,
                    };
                } else {
                    file = block.data.file;
                }
            } else {
                // already stored as {name,src,size}
                file = block.data.file;
            }

            return {
                ...block,
                data: { ...block.data, file },
            };
        })
    );

    // remove all undefined entries
    return processed.filter(Boolean) as OutputDataBlock[];
};
