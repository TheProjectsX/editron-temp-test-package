import { useEffect, useState } from "react";
import useSelectionPosition from "./useSelectionPosition";
import { createPortal } from "react-dom";
import type { EditorBlock } from "../../register/types";
import { NoInlineToolbar } from "../../register";
import { InlineLinkTool, InlineTools } from "./utils";
import { useTextSelection } from "./useTextSelection";
import { FakeHighlight } from "./FakeHighlight";

const InlineToolbar = ({
    focusedBlock,
}: {
    focusedBlock: {
        element: HTMLElement | null;
        block: EditorBlock | null;
    };
}) => {
    const [preventSelectEvent, setPreventSelectEvent] = useState(false);
    const { saveSelection, restoreSelection } = useTextSelection();
    const [rendered, setRendered] = useState(false);

    const position = useSelectionPosition(preventSelectEvent);

    useEffect(() => setRendered(true), []);

    useEffect(() => {
        if (preventSelectEvent) {
            saveSelection(focusedBlock.element);
        } else {
            restoreSelection(focusedBlock.element);
        }
    }, [preventSelectEvent]);

    // Will not show the Toolbar if there is no position OR the component haven't rendered yet OR the focused block does not support Toolbar
    if (
        !position ||
        !rendered ||
        NoInlineToolbar.includes(focusedBlock.block?.type!)
    )
        return null;

    const Toolbar = (
        <div
            className="absolute bg-white p-1.5 shadow-[0_0_6px_rgba(0,0,0,0.15)] rounded-sm flex gap-0.5"
            style={{
                top: position.bottom + window.scrollY + 4,
                left: position.left + window.scrollX,
            }}
        >
            {preventSelectEvent && position && (
                <FakeHighlight rect={position} />
            )}
            <InlineLinkTool
                onActive={() => setPreventSelectEvent(true)}
                onClose={() => setPreventSelectEvent(false)}
                restoreSelection={() => restoreSelection(focusedBlock.element)}
            />

            {InlineTools.map((Tool, idx) => (
                <Tool key={idx} />
            ))}
        </div>
    );

    return createPortal(Toolbar, document.body);
};

export default InlineToolbar;
