import React, { createRef, useEffect, useState } from "react";
import { demo, settings, structure } from "./meta";
import type { TableProps } from "./types";
import { preventNewLine } from "../libs/events";
import { replaceBy2DIndex, replaceByIndex } from "../libs/utilities";
import { IoAddOutline } from "react-icons/io5";
import { ColumnControls, RowControls } from "./Controls";

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
        setCurrentData({
            headers: data.headers,
            body: data.body,
        });
    }, [data]);

    return (
        <div
            data-name="table-wrapper"
            className={`space-y-0.5 relative ${className} hover:[&_[data-name="column-controls"]]:inline hover:[&_[data-name="row-controls"]]:inline`}
            onBlur={(e) => {
                if (e.target !== e.currentTarget) return;

                onUpdate({ ...data, ...currentData });
            }}
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
                            <thead className="bg-white text-gray-800 font-medium">
                                <tr>
                                    {currentData.headers.map((item, idx) => (
                                        <th
                                            className="px-3 py-2 border border-gray-200 overflow-hidden"
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
                                                            e.target.innerHTML
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

                    <tbody className="">
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
                                        className="px-3 py-2 border border-gray-200 outline-none break-words"
                                        onKeyDown={preventNewLine}
                                        onBlur={(e) => {
                                            setCurrentData((prev) => ({
                                                headers: prev.headers,
                                                body: replaceBy2DIndex(
                                                    prev.body,
                                                    [idx, idxc],
                                                    e.target.innerHTML
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
                        className="px-2 py-3 hover:bg-gray-50 cursor-pointer transition-colors h-full flex items-start"
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
                className="px-2 py-3 hover:bg-gray-50 cursor-pointer transition-colors w-full"
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
