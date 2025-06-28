import React from "react";
import type { AllData, AllTags, RendererBlock } from "../../register/types";

export type BlockElement = React.FC<{
    className?: string;
    tag: AllTags;
    data: AllData;
}>;

interface BlockViewerProps {
    className?: string;
    Component: BlockElement;
    metadata: RendererBlock;
}

const BlockViewer = ({
    className = "",
    Component,
    metadata,
}: BlockViewerProps) => {
    return (
        <Component
            className={className}
            tag={metadata.tag}
            data={metadata.data}
        />
    );
};

export default BlockViewer;
