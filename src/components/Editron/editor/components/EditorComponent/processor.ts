import type { UserConfig } from "../..";
import type { RegisterReturn } from "../../register";
import type { EditorBlock, OutputDataBlock } from "../../register/types";

export const processExport = async (
    blocks: EditorBlock[],
    config: UserConfig = {},
    processors: Record<string, RegisterReturn["processor"]>
): Promise<OutputDataBlock[]> => {
    const processed = await Promise.all(
        blocks.map(async (block) => {
            const processor = processors[block.type];
            if (!processor) return block;

            return await processor(block, config);
        })
    );

    // remove all undefined entries
    return processed.filter(Boolean) as OutputDataBlock[];
};
