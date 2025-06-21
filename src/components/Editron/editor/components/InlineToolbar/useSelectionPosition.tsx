import { useEffect, useState } from "react";

const useSelectionPosition = () => {
    const [position, setPosition] = useState<{
        top: number;
        left: number;
        bottom: number;
        right: number;
    } | null>(null);

    useEffect(() => {
        const handleSelectionChange = () => {
            const selection = window.getSelection();
            if (!selection || selection.isCollapsed) {
                setPosition(null);
                return;
            }

            const range = selection.getRangeAt(0);
            let node: Node | null = range.commonAncestorContainer;

            while (node && node.nodeType !== Node.ELEMENT_NODE) {
                node = node.parentNode;
            }

            const element = node as HTMLElement | null;
            if (!element) {
                setPosition(null);
                return;
            }

            const editorRoot = element.closest('[data-name="block-editor"]');
            if (!editorRoot) {
                setPosition(null);
                return;
            }

            const rect = range.getBoundingClientRect();

            setPosition({
                top: rect.top + window.scrollY,
                left: rect.left + window.scrollX,
                bottom: rect.bottom + window.scrollY,
                right: rect.right + window.scrollX,
            });
        };

        const handleWindowBlur = () => {
            setPosition(null);
        };

        document.addEventListener("selectionchange", handleSelectionChange);
        window.addEventListener("blur", handleWindowBlur);
        return () => {
            document.removeEventListener(
                "selectionchange",
                handleSelectionChange
            );
            window.removeEventListener("blur", handleWindowBlur);
        };
    }, []);

    return position;
};

export default useSelectionPosition;
