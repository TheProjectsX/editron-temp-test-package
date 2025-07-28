import React, { createRef, useEffect, useState } from "react";
import { demo, settings, structure } from "./meta";
import type { TableProps } from "./types";
import { preventNewLine } from "../libs/events";
import {
    addRow2D,
    cleanInnerHTML,
    removeRow2D,
    replaceBy2DIndex,
    replaceByIndex,
} from "../libs/utilities";
import { IoAddOutline } from "react-icons/io5";
import { ColumnControls, RowControls } from "./Controls";
import { spacingConfig } from "../libs/styles";

export type Focused = {
    element: HTMLElement;
    idx: number;
};

const Table = ({ className = "", data, onUpdate }: TableProps) => {
    const [currentData, setCurrentData] = useState({
        headers: data.headers,
        body: data.body,
    });

    const columnControlRef = createRef<{
        setFocused: React.Dispatch<React.SetStateAction<Focused | null>>;
    }>();

    const rowControlRef = createRef<{
        setFocused: React.Dispatch<React.SetStateAction<Focused | null>>;
    }>();

    const [columnSetOpened, setColumnSetOpened] = useState<boolean>(false);
    const [rowSetOpened, setRowSetOpened] = useState<boolean>(false);

    useEffect(() => {
        const isSame =
            JSON.stringify(currentData.headers) ===
                JSON.stringify(data.headers) &&
            JSON.stringify(currentData.body) === JSON.stringify(data.body);

        if (isSame) return;

        setCurrentData({
            headers: data.headers,
            body: data.body,
        });
    }, [data]);

    useEffect(() => {
        onUpdate({ ...data, ...currentData });
    }, [currentData]);

    return (
        <div
            data-name="table-wrapper"
            className={`space-y-0.5 relative ${
                spacingConfig["table"]
            } ${className} hover:[&_[data-name="column-controls"]]:inline hover:[&_[data-name="row-controls"]]:inline ${
                columnSetOpened
                    ? `[&_[data-name="column-controls"]]:inline`
                    : ""
            } ${rowSetOpened ? `[&_[data-name="row-controls"]]:inline` : ""}`}
        >
            <div className="flex gap-0.5">
                <table
                    className="w-full table-fixed border-collapse text-sm"
                    style={{
                        ...data.style,
                        textAlign: (data.style?.textAlign ??
                            "left") as React.CSSProperties["textAlign"],
                    }}
                >
                    {Array.isArray(currentData.headers) &&
                        currentData.headers.length > 0 && (
                            <thead className="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 font-medium">
                                <tr>
                                    {currentData.headers.map((item, idx) => (
                                        <th
                                            className="px-3 py-2 border border-gray-200 dark:border-gray-600 overflow-hidden"
                                            key={idx}
                                            data-idx={idx}
                                            onMouseEnter={(e) => {
                                                if (columnSetOpened) return;
                                                const target =
                                                    e.currentTarget ??
                                                    (e.target as HTMLElement);

                                                if (target.tagName !== "TH")
                                                    return;

                                                columnControlRef.current?.setFocused(
                                                    (prev) =>
                                                        prev?.idx === idx
                                                            ? prev
                                                            : {
                                                                  element:
                                                                      target,
                                                                  idx,
                                                              }
                                                );
                                            }}
                                        >
                                            <span
                                                className="outline-none break-words block"
                                                contentEditable
                                                data-placeholder={`Heading`}
                                                onKeyDown={preventNewLine}
                                                onBlur={(e) => {
                                                    setCurrentData((prev) => ({
                                                        headers: replaceByIndex(
                                                            currentData.headers!,
                                                            idx,
                                                            cleanInnerHTML(
                                                                e.target
                                                                    .innerHTML
                                                            )
                                                        ),
                                                        body: prev.body,
                                                    }));
                                                }}
                                                data-align={
                                                    data.style?.textAlign ?? ""
                                                }
                                                dangerouslySetInnerHTML={{
                                                    __html: item,
                                                }}
                                            ></span>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                        )}

                    <tbody className="dark:bg-gray-800 dark:text-gray-200">
                        {currentData.body.map((body, idx) => (
                            <tr
                                key={idx}
                                className=""
                                onMouseEnter={(e) => {
                                    if (rowSetOpened) return;
                                    const target =
                                        e.currentTarget ??
                                        (e.target as HTMLElement);

                                    if (target.tagName !== "TR") return;

                                    rowControlRef.current?.setFocused((prev) =>
                                        prev?.idx === idx
                                            ? prev
                                            : { element: target, idx }
                                    );
                                }}
                            >
                                {body.map((item, idxc) => (
                                    <td
                                        className="px-3 py-2 border border-gray-200 dark:border-gray-600 outline-none break-words"
                                        onKeyDown={(e) => {
                                            preventNewLine(e);
                                            const target = (e.currentTarget ??
                                                e.target) as HTMLElement;

                                            if (
                                                e.key === "Enter" &&
                                                idx ===
                                                    currentData.body.length - 1
                                            ) {
                                                setCurrentData((prev) => ({
                                                    headers: prev.headers,
                                                    body: replaceBy2DIndex(
                                                        prev.body,
                                                        [idx, idxc],
                                                        cleanInnerHTML(
                                                            target.innerHTML
                                                        )
                                                    ),
                                                }));

                                                setCurrentData((prev) => ({
                                                    headers: prev.headers,
                                                    body: addRow2D(
                                                        prev.body,
                                                        idx + 1
                                                    ),
                                                }));

                                                setTimeout(() => {
                                                    const nextRow = target
                                                        .parentElement
                                                        ?.nextElementSibling as HTMLTableRowElement | null;
                                                    if (nextRow) {
                                                        const nextCell =
                                                            nextRow.querySelectorAll(
                                                                "td"
                                                            )[idxc] as
                                                                | HTMLElement
                                                                | undefined;
                                                        nextCell?.focus();
                                                    }
                                                }, 0);
                                            } else if (
                                                e.key === "Backspace" &&
                                                target.textContent === ""
                                            ) {
                                                // If the td is 1st td and there is no data left in the row, delete the row
                                                if (
                                                    idxc == 0 &&
                                                    target.textContent === ""
                                                ) {
                                                    if (
                                                        !body
                                                            .slice(1)
                                                            .every(
                                                                (item) =>
                                                                    item === ""
                                                            )
                                                    )
                                                        return;

                                                    const prevRow = target
                                                        .parentElement
                                                        ?.previousElementSibling as HTMLTableRowElement | null;

                                                    if (prevRow) {
                                                        const prevCell =
                                                            prevRow.querySelectorAll(
                                                                "td"
                                                            )[
                                                                body.length - 1
                                                            ] as
                                                                | HTMLElement
                                                                | undefined;
                                                        prevCell?.focus();
                                                    }

                                                    setCurrentData((prev) => ({
                                                        headers: prev.headers,
                                                        body: removeRow2D(
                                                            prev.body,
                                                            idx
                                                        ),
                                                    }));
                                                } else {
                                                    // If the td is not first, focus the before td
                                                    const previous =
                                                        target.previousElementSibling as HTMLTableCellElement | null;
                                                    previous?.focus();
                                                }
                                            }
                                        }}
                                        onBlur={(e) => {
                                            setCurrentData((prev) => ({
                                                headers: prev.headers,
                                                body: replaceBy2DIndex(
                                                    prev.body,
                                                    [idx, idxc],
                                                    cleanInnerHTML(
                                                        e.target.innerHTML
                                                    )
                                                ),
                                            }));
                                        }}
                                        onMouseEnter={(e) => {
                                            if (columnSetOpened) return;
                                            const target =
                                                e.currentTarget ??
                                                (e.target as HTMLElement);

                                            if (target.tagName !== "TD") return;

                                            columnControlRef.current?.setFocused(
                                                (prev) =>
                                                    prev?.idx === idxc
                                                        ? prev
                                                        : {
                                                              element: target,
                                                              idx: idxc,
                                                          }
                                            );
                                        }}
                                        key={idxc}
                                        contentEditable
                                        dangerouslySetInnerHTML={{
                                            __html: item,
                                        }}
                                    ></td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="flex items-stretch">
                    <button
                        className="px-2 py-3 dark:text-white hover:bg-gray-50 dark:hover:bg-slate-700 cursor-pointer transition-colors h-full flex items-start"
                        onClick={() => {
                            setCurrentData((prev) => ({
                                headers:
                                    Array.isArray(currentData.headers) &&
                                    currentData.headers.length > 0
                                        ? [...(prev.headers ?? []), ""]
                                        : prev.headers,
                                body: prev.body.map((row) => [...row, ""]),
                            }));
                        }}
                    >
                        <IoAddOutline />
                    </button>
                </div>
            </div>

            <button
                className="px-3 py-2 dark:text-white hover:bg-gray-50 dark:hover:bg-slate-700 cursor-pointer transition-colors w-full"
                onClick={() => {
                    setCurrentData((prev) => ({
                        headers: prev.headers,
                        body: [
                            ...prev.body,
                            new Array(prev.body[0]?.length || 0).fill(""),
                        ],
                    }));
                }}
            >
                <IoAddOutline />
            </button>

            {/* Controls */}
            {/* Column */}
            <ColumnControls
                setData={setCurrentData}
                setOpened={setColumnSetOpened}
                ref={columnControlRef}
            />

            {/* Row */}
            <RowControls
                setData={setCurrentData}
                setOpened={setRowSetOpened}
                ref={rowControlRef}
            />
        </div>
    );
};

export default {
    component: Table,
    structure,
    demo,
    settings,
};
