import React from "react";
import type { AllData, AllTags, RendererBlock } from "../../register/types";

export type BlockElement = React.FC<{
    tag: AllTags;
    data: AllData;
    className?: string;
    style?: Record<string, string>;
}>;

interface BlockViewerProps {
    className?: string;
    Component: BlockElement;
    metadata: RendererBlock;
    config?: Record<string, any>;
}

const BlockViewer = ({
    className = "",
    Component,
    metadata,
    config = {},
}: BlockViewerProps) => {
    return (
        <Component
            className={
                className + (config.className ? " " + config.className : "")
            }
            style={config.style ?? {}}
            tag={metadata.tag}
            data={metadata.data}
        />
    );
};

export default BlockViewer;
