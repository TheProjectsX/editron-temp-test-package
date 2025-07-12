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

// Is given array with value
export const isArray = (data: any) => Array.isArray(data) && data.length > 0;

// Add column in 1d
export const addColumn = (
    row: string[],
    pos?: number,
    value: string = ""
): string[] => {
    const index = pos ?? row.length;
    return [...row.slice(0, index), value, ...row.slice(index)];
};

// Add a row
export const addRow2D = (
    data: string[][],
    pos?: number,
    value: string = ""
): string[][] => {
    const columns = data[0]?.length || 0;
    const newRow = new Array(columns).fill(value);
    const index = pos ?? data.length;
    return [...data.slice(0, index), newRow, ...data.slice(index)];
};

// Add a column
export const addColumn2D = (
    data: string[][],
    pos?: number,
    value: string = ""
): string[][] => {
    return data.map((row) => {
        const index = pos ?? row.length;
        return [...row.slice(0, index), value, ...row.slice(index)];
    });
};

// Remove column in 1D
export const removeColumn = (row: string[], pos: number): string[] => {
    if (pos < 0 || pos >= row.length) return row;
    return [...row.slice(0, pos), ...row.slice(pos + 1)];
};

// Remove a row
export const removeRow2D = (data: string[][], pos: number): string[][] => {
    if (pos < 0 || pos >= data.length) return data;
    return [...data.slice(0, pos), ...data.slice(pos + 1)];
};

// Remove a column
export const removeColumn2D = (data: string[][], pos: number): string[][] => {
    return data.map((row) => {
        if (pos < 0 || pos >= row.length) return row;
        return [...row.slice(0, pos), ...row.slice(pos + 1)];
    });
};
