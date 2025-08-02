import { useEffect, useState } from "react";

const useSelectionPosition = (preventSelectEvent: boolean) => {
    const [data, setData] = useState<{
        position: DOMRect;
        element: HTMLElement;
    } | null>(null);

    useEffect(() => {
        const handleSelectionChange = () => {
            if (preventSelectEvent) return;

            const selection = window.getSelection();

            if (!selection || selection.isCollapsed) {
                setData(null);
                return;
            }

            const range = selection.getRangeAt(0);
            let node: Node | null = range.commonAncestorContainer;

            while (node && node.nodeType !== Node.ELEMENT_NODE) {
                node = node.parentNode;
            }

            const element = node as HTMLElement | null;
            if (!element) {
                setData(null);
                return;
            }

            const editorRoot = element.closest('[data-name="block-editor"]');
            if (!editorRoot) {
                setData(null);
                return;
            }

            const rect = range.getBoundingClientRect();

            setData({ position: rect, element: editorRoot as HTMLElement });
        };

        const handleWindowBlur = () => {
            // setPosition(null);
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
    }, [preventSelectEvent]);

    return data;
};

export default useSelectionPosition;
