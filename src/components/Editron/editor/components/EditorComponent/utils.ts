import type { UserConfig } from "../..";
import type { RegisterReturn } from "../../register";
import type {
    AllTypes,
    EditorBlock,
    OutputDataBlock,
} from "../../register/types";

// From register get the desired value
export const getFromRegister = (
    registers: RegisterReturn[],
    type: AllTypes,
    valueOf: "component" | "structure" | "demo"
) => {
    const target = registers.find(
        (register) => register.structure.type === type
    );

    if (!target) return null;

    return target[valueOf];
};

/**
 * Converts an array of register objects into a Record,
 * where each key is the value of `structure.type` from the register,
 * and the value is the specified property from that register.
 *
 * @param registers - Array of register objects
 * @param property - The property to extract from each register as the value
 * @returns A Record object with keys as `structure.type` and values as the given property
 */

export const recordFromRegister = <K extends keyof RegisterReturn>(
    registers: RegisterReturn[],
    property: K
): Record<string, RegisterReturn[K]> => {
    return registers.reduce<Record<string, RegisterReturn[K]>>((acc, item) => {
        acc[item.structure.type] = item[property];
        return acc;
    }, {} as Record<string, RegisterReturn[K]>);
};

// Set caret to end of the given element
export const setCaretToEnd = (el: HTMLElement) => {
    const range = document.createRange();
    const sel = window.getSelection();
    range.selectNodeContents(el);
    range.collapse(false);
    sel?.removeAllRanges();
    sel?.addRange(range);
};

// Handle arrow keys down and move the focus of element
export const handleArrowKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const key = e.key;
    if (key !== "ArrowUp" && key !== "ArrowDown") return;

    const editables = Array.from(
        e.currentTarget.querySelectorAll('[contenteditable="true"]')
    );
    const current = e.target as HTMLElement;
    const index = editables.indexOf(current);
    if (index === -1) return;

    e.preventDefault();
    const next =
        key === "ArrowDown" ? editables[index + 1] : editables[index - 1];

    if (next) {
        (next as HTMLElement).focus();
        setTimeout(() => setCaretToEnd(next as HTMLElement), 0);
    }
};

// Process data before Exporting using the processor of the said block
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
