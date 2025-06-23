import React from "react";

type Props = {
    rect: DOMRect | null;
};

export const FakeHighlight: React.FC<Props> = ({ rect }) => {
    if (!rect) return null;

    return (
        <div
            className="pointer-events-none rounded-[3px] z-[1000] bg-[dodgerBlue]/30"
            style={{
                position: "fixed",
                top: rect.top + window.scrollY,
                left: rect.left + window.scrollX,
                width: rect.width,
                height: rect.height,
            }}
        />
    );
};
