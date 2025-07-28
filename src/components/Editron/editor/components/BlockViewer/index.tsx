import React, { useCallback, useMemo } from "react";
import type { BlockActions } from "../../hooks/useBlockForge";
import type { EditorBlock, AllTags, AllData } from "../../register/types";

export type BlockElement = React.FC<{
    className?: string;
    tag: AllTags;
    data: AllData;
    onUpdate: (value: AllData) => void;
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
        (data: AllData) => {
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
            className={`flex flex-col justify-center ${className}`}
            onMouseEnter={(e) => {
                if (controllerFocused) return;

                const target = (e.currentTarget ?? e.target) as HTMLElement;
                if (target.dataset["name"] !== "block-editor") return;

                setFocusedBlock((prev) => {
                    if (prev.element === target) {
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
                        tag={metadata.tag}
                        data={metadata.data}
                        onUpdate={handleUpdateBlock}
                    />
                ),
                [metadata]
            )}
        </div>
    );
};

export default React.memo(BlockViewer);
