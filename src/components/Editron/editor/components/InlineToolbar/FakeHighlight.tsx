import React from "react";
import { createPortal } from "react-dom";

type Props = {
    rect: DOMRect | null;
};

export const FakeHighlight: React.FC<Props> = ({ rect }) => {
    if (!rect) return null;

    return createPortal(
        <div
            className="pointer-events-none rounded-[3px] z-[1000] bg-[dodgerBlue]/30 absolute"
            style={{
                top: rect.top + window.scrollY,
                left: rect.left + window.scrollX,
                width: rect.width,
                height: rect.height,
            }}
        />,
        document.body
    );
};
