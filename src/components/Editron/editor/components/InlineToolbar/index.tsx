import React, { useEffect, useState } from "react";
import useSelectionPosition from "./useSelectionPosition";
import { InlineLinkTool, InlineTools } from "./utils";
import { useTextSelection } from "./useTextSelection";
import { FakeHighlight } from "./FakeHighlight";
import { createPortal } from "react-dom";

const InlineToolbar = ({
    config,
}: {
    config: Record<string, { inlineToolbar?: boolean } | any>;
}) => {
    const [preventSelectEvent, setPreventSelectEvent] = useState(false);
    const { saveSelection, restoreSelection } = useTextSelection();
    const [rendered, setRendered] = useState(false);

    const selectionData = useSelectionPosition(preventSelectEvent);

    useEffect(() => setRendered(true), []);

    useEffect(() => {
        if (!selectionData) return;

        if (preventSelectEvent) {
            saveSelection(selectionData.element);
        } else {
            restoreSelection(selectionData.element);
        }
    }, [preventSelectEvent]);

    // Will not show the Toolbar if there is no position OR the component haven't rendered yet OR the focused block does not support Toolbar
    if (
        !selectionData ||
        !rendered ||
        config[selectionData.element.dataset["type"] ?? ""].inlineToolbar ===
            false
    )
        return null;

    const Toolbar = (
        <div
            className="absolute bg-white dark:bg-gray-800 dark:text-gray-200 p-1.5 shadow-[0_0_6px_rgba(0,0,0,0.15)] rounded-sm flex gap-0.5"
            style={{
                top: selectionData.position.bottom + window.scrollY + 4,
                left: selectionData.position.left + window.scrollX,
            }}
        >
            {preventSelectEvent && selectionData && (
                <FakeHighlight rect={selectionData.position} />
            )}
            <InlineLinkTool
                onActive={() => setPreventSelectEvent(true)}
                onClose={() => setPreventSelectEvent(false)}
                restoreSelection={() => restoreSelection(selectionData.element)}
            />

            {InlineTools.map((Tool, idx) => (
                <Tool key={idx} />
            ))}
        </div>
    );

    return createPortal(Toolbar, document.body);
};

export default React.memo(InlineToolbar);
