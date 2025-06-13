import React, { useCallback, useMemo } from "react";
import type { BlockActions } from "../../hooks/useBlockForge";
import type { EditorAllData, AllTags } from "../../types/blockElements";
import type { EditorBlock } from "../../types/blocks";
import Heading from "../blockElements/Heading";
import Paragraph from "../blockElements/Paragraph";
import List from "../blockElements/List";
import Divider from "../blockElements/Divider";
import Code from "../blockElements/Code";
import Quote from "../blockElements/Quote";

interface BlockViewerProps {
    className?: string;
    block: EditorBlock;
    dispatch: React.Dispatch<BlockActions>;
    setFocusedBlock: React.Dispatch<
        React.SetStateAction<{
            element: HTMLElement | null;
            block: EditorBlock | null;
        }>
    >;
}

type BlockElement = React.FC<{
    className?: string;
    tag: AllTags;
    data: EditorAllData;
    onUpdate: (value: EditorAllData) => void;
}>;

const BlocksAsType: Record<string, BlockElement> = {
    heading: Heading as BlockElement,
    paragraph: Paragraph as BlockElement,
    list: List as BlockElement,
    divider: Divider as BlockElement,
    code: Code as BlockElement,
    quote: Quote as BlockElement,
};

const BlockViewer = ({
    className = "",
    block,
    dispatch,
    setFocusedBlock,
}: BlockViewerProps) => {
    const CurrentBlock = BlocksAsType[block.type];
    if (!CurrentBlock) return;

    const handleUpdateBlock = useCallback(
        (data: EditorAllData) => {
            if (
                Array.isArray((data as any)?.values) &&
                (data as any).values.length === 0
            ) {
                return dispatch({ type: "DELETE", id: block.id });
            }

            const payload = {
                ...block,
                data,
            } as EditorBlock;

            dispatch({ type: "UPDATE", payload });
        },
        [block]
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
                        block,
                    };
                });
            }}
        >
            {/* Using useMemo to memorize the component so that we only get the initial value of the state and not the updated value */}
            {useMemo(
                () => (
                    <CurrentBlock
                        tag={block.tag}
                        data={block.data}
                        onUpdate={handleUpdateBlock}
                    />
                ),
                []
            )}
        </div>
    );
};

export default React.memo(BlockViewer);
