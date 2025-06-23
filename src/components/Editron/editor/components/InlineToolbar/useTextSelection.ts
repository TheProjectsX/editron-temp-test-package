import { useRef } from "react";

type SavedSelection = { start: number; end: number } | null;

export function useTextSelection() {
    const savedSelection = useRef<SavedSelection>(null);

    const saveSelection = (containerEl: HTMLElement | null) => {
        if (!containerEl) return;
        const sel = window.getSelection();
        if (!sel || sel.rangeCount === 0) return;

        const range = sel.getRangeAt(0);
        const preSelectionRange = range.cloneRange();

        preSelectionRange.selectNodeContents(containerEl);
        preSelectionRange.setEnd(range.startContainer, range.startOffset);

        const start = preSelectionRange.toString().length;
        const end = start + range.toString().length;

        savedSelection.current = { start, end };
    };

    const restoreSelection = (containerEl: HTMLElement | null) => {
        const saved = savedSelection.current;
        if (!containerEl || !saved) return;

        const { start, end } = saved;

        let charIndex = 0;
        const range = document.createRange();
        range.setStart(containerEl, 0);
        range.collapse(true);

        const nodeStack: ChildNode[] = [containerEl];
        let node: ChildNode | undefined;
        let foundStart = false;
        let stop = false;

        while (!stop && (node = nodeStack.pop())) {
            if (node.nodeType === 3) {
                const textNode = node as Text;
                const nextCharIndex = charIndex + textNode.length;

                if (
                    !foundStart &&
                    start >= charIndex &&
                    start <= nextCharIndex
                ) {
                    range.setStart(textNode, start - charIndex);
                    foundStart = true;
                }

                if (foundStart && end >= charIndex && end <= nextCharIndex) {
                    range.setEnd(textNode, end - charIndex);
                    stop = true;
                }

                charIndex = nextCharIndex;
            } else {
                let i = node.childNodes.length;
                while (i--) {
                    nodeStack.push(node.childNodes[i]);
                }
            }
        }

        const sel = window.getSelection();
        if (sel) {
            sel.removeAllRanges();
            sel.addRange(range);
        }
    };

    return { saveSelection, restoreSelection };
}
