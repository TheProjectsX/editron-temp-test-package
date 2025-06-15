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
                ...metadata,
                data,
            } as EditorBlock;

            dispatch({ type: "UPDATE", payload });
        },
        [metadata]
    );

    return (
        <div
            data-name="block-editor"
            className={`${className}`}
            onMouseEnter={(e) => {
                setFocusedBlock((prev) => {
                    if (prev.element === e.target) {
                        return prev;
                    }
                    return {
                        element: e.target as HTMLElement,
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
