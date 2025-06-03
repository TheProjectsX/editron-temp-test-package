import React from "react";
import type { BlockActions } from "../../hooks/useBlockForge";
import type { AllData, AllTags } from "../../types/blockElements";
import type { Block } from "../../types/blocks";
import Heading from "../blockElements/Heading";
import Paragraph from "../blockElements/Paragraph";
import List from "../blockElements/List";

interface BlockViewerProps extends React.HTMLAttributes<HTMLDivElement> {
    block: Block;
    dispatch: React.Dispatch<BlockActions>;
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
};

const BlockViewer = ({
    className = "",
    block,
    dispatch,
    ...options
}: BlockViewerProps) => {
    const CurrentBlock = BlocksAsType[block.type];
    if (!CurrentBlock) return;

    const handleUpdateBlock = (data: AllData) => {
        if (((data as any).values as string[]).length === 0) {
            return dispatch({ type: "DELETE", id: block.id });
        }

        const newBlock = {
            ...block,
            data,
        };

        dispatch({ type: "UPDATE", payload: newBlock as Block });
    };

    return (
        <div data-name="block-editor" className={`${className}`} {...options}>
            <CurrentBlock
                tag={block.tag}
                data={block.data}
                onUpdate={handleUpdateBlock}
            />
        </div>
    );
};

export default React.memo(BlockViewer, () => true);
