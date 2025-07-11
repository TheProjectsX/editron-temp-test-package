import React from "react";

const isObjectEmpty = (item: undefined | {}) => {
    return (
        !item || (typeof item === "object" && Object.keys(item).length === 0)
    );
};

const isStringEmpty = (item: undefined | string) => {
    return !item || (typeof item === "string" && item.length === 0);
};

type ConvertBlockToHtmlType = (
    content:
        | {
              text: string;
              tag?: string;
              style?: React.CSSProperties;
          }[]
        | undefined
) => React.ReactElement | undefined;

export const ConvertBlockToHtml: ConvertBlockToHtmlType = (content) => {
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

export const cleanInnerHTML = (html: string): string => {
    const div = document.createElement("div");
    div.innerHTML = html;

    // Remove <br> tags
    div.querySelectorAll("br").forEach((br) => br.remove());

    return div.innerHTML.trim();
};

export const replaceByIndex = <T,>(arr: T[], index: number, newItem: T): T[] =>
    arr.map((item, i) => (i === index ? newItem : item));

export const replaceBy2DIndex = <T,>(
    arr: T[][],
    [rowIdx, colIdx]: [number, number],
    newItem: T
): T[][] =>
    arr.map((row, i) =>
        row.map((item, j) => (i === rowIdx && j === colIdx ? newItem : item))
    );
