import React, { useCallback, useMemo } from "react";
import type { BlockActions } from "../../hooks/useBlockForge";
import type { EditorBlock } from "../../register/types";

export type BlockElement = React.FC<{
    data: Record<string, any>;
    className?: string;
    config?: Record<string, any>;
    onUpdate: (value: Record<string, any>) => void;
}>;

interface BlockViewerProps {
    className?: string;
    Component: BlockElement;
    metadata: EditorBlock;
    dispatch: React.Dispatch<BlockActions>;
    controllerFocused: boolean;
    setFocusedBlock: React.Dispatch<
        React.SetStateAction<{
            element: HTMLElement | null;
            block: EditorBlock | null;
        }>
    >;
}

const BlockViewer = ({
    className = "",
    Component,
    metadata,
    dispatch,
    controllerFocused,
    setFocusedBlock,
}: BlockViewerProps) => {
    const handleUpdateBlock = useCallback(
        (data: Record<string, any>) => {
            if (
                Array.isArray((data as any)?.values) &&
                (data as any).values.length === 0
            ) {
                return dispatch({ type: "DELETE", id: metadata.id });
            }

            const payload = {
                data,
            } as Partial<EditorBlock>;

            dispatch({ type: "UPDATE", id: metadata.id, payload });
        },
        [metadata]
    );

    return (
        <div
            data-name="block-editor"
            data-type={metadata.type}
            className={`flex flex-col justify-center ${className}`}
            onMouseEnter={(e) => {
                if (controllerFocused) return;

                const target = (e.currentTarget ?? e.target) as HTMLElement;
                if (target.dataset["name"] !== "block-editor") return;

                setFocusedBlock((prev) => {
                    if (
                        prev.element === target ||
                        prev.block?.id === metadata.id
                    ) {
                        return prev;
                    }

                    return {
                        element: target,
                        block: metadata,
                    };
                });
            }}
        >
            {/* Using useMemo to memorize the component so that we only get the initial value of the state and not the updated value */}
            {useMemo(
                () => (
                    <Component
                        data={metadata.data}
                        config={metadata.config}
                        onUpdate={handleUpdateBlock}
                    />
                ),
                [metadata]
            )}
        </div>
    );
};

export default React.memo(BlockViewer, (prev, next) => {
    if (prev.controllerFocused !== next.controllerFocused) {
        return false;
    }
    return true;
});
