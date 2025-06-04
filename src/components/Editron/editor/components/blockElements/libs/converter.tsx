import React from "react";

const isObjectEmpty = (item: undefined | {}) => {
    return (
        !item || (typeof item === "object" && Object.keys(item).length === 0)
    );
};

const isStringEmpty = (item: undefined | string) => {
    return !item || (typeof item === "string" && item.length === 0);
};

type ContentBlockToHtmlType = (
    content:
        | {
              text: string;
              tag?: string;
              style?: React.CSSProperties;
          }[]
        | undefined
) => React.ReactElement | undefined;

export const ContentBlockToHtml: ContentBlockToHtmlType = (content) => {
    if (!content) return undefined;

    const htmlContent = content.map((block, idx) => {
        if (isObjectEmpty(block.style) && isStringEmpty(block.tag)) {
            return <React.Fragment key={idx}>{block.text}</React.Fragment>;
        }

        const Tag = (block.tag ?? "span") as keyof React.JSX.IntrinsicElements;
        const style = block.style ?? {};

        return <Tag style={style}>{block.text}</Tag>;
    });

    return htmlContent.length > 0 ? <>{htmlContent}</> : undefined;
};
