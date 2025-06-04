import React, { useCallback } from "react";
import type { BlockActions } from "../../hooks/useBlockForge";
import type { AllData, AllTags } from "../../types/blockElements";
import type { Block } from "../../types/blocks";
import Heading from "../blockElements/Heading";
import Paragraph from "../blockElements/Paragraph";
import List from "../blockElements/List";
import Divider from "../blockElements/Divider";

interface BlockViewerProps {
    className?: string;
    block: Block;
    dispatch: React.Dispatch<BlockActions>;
    setFocusedBlock: React.Dispatch<
        React.SetStateAction<{
            element: HTMLElement | null;
            block: Block | null;
        }>
    >;
}

type BlockElement = React.FC<{
    className?: string;
    tag: AllTags;
    data: AllData;
    onUpdate: (value: AllData) => void;
}>;

const BlocksAsType: Record<string, BlockElement> = {
    heading: Heading as BlockElement,
    paragraph: Paragraph as BlockElement,
    list: List as BlockElement,
    divider: Divider as BlockElement,
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
        (data: AllData) => {
            if (
                Array.isArray((data as any)?.values) &&
                (data as any).values.length === 0
            ) {
                return dispatch({ type: "DELETE", id: block.id });
            }

            const newBlock = {
                ...block,
                data,
            };

            dispatch({ type: "UPDATE", payload: newBlock as Block });
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
            <CurrentBlock
                tag={block.tag}
                data={block.data}
                onUpdate={handleUpdateBlock}
            />
        </div>
    );
};

export default React.memo(BlockViewer);
