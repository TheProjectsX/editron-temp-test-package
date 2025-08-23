import { nanoid } from "nanoid/non-secure";
import type { UserConfig } from "../..";
import type { RegisterReturn } from "../../register";
import type { BlockStructure, EditorBlock } from "../../register/types";

// From register get the desired value
export const getFromRegister = (
    registers: RegisterReturn[],
    type: RegisterReturn["structure"]["type"],
    valueOf: keyof RegisterReturn
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
export const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
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

// Extract text from HTML
function extractTextFromHTML(html: string): string {
    const tempEl = document.createElement("div");
    tempEl.innerHTML = html;
    return tempEl.textContent || tempEl.innerText || "";
}

// Process data before Exporting using the processor of the said block
export const processExport = async (
    blocks: EditorBlock[],
    config: UserConfig = {},
    processors: Record<string, RegisterReturn["processor"]>
): Promise<{
    blocks: any[];
    tableOfContents?: { label: string; id: string }[];
}> => {
    let tableOfContents;
    const processed = await Promise.all(
        blocks.map(async (block) => {
            const processor = processors[block.type];
            if (!processor) return block;

            return await processor(block, config);
        })
    );

    // remove all undefined entries
    const cleanBlocks = processed.filter(Boolean) as any[];

    if (config.enableTableOfContents) {
        tableOfContents = cleanBlocks
            .filter((block) => block.type === "heading" && block.data.flagged)
            .map((block) => ({
                label: extractTextFromHTML(block.data.html),
                id: block.id,
            }));
    }

    if (!tableOfContents) {
        return {
            blocks: cleanBlocks,
        };
    }

    return {
        blocks: processed.filter(Boolean) as any[],
        tableOfContents,
    };
};

// Generate a Demo block from structure
export const genDemo = (structure: BlockStructure) => {
    const demo = {
        id: nanoid(10),
        type: structure.type,
        data: structure.data,
    };

    return demo;
};
