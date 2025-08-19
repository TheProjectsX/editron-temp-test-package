import React from "react";
import type { RendererBlock } from "../..";

export type BlockElement = React.FC<{
    className?: string;
    style?: Record<string, string>;
    metadata: RendererBlock;
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
            metadata={metadata}
        />
    );
};

export default BlockViewer;
