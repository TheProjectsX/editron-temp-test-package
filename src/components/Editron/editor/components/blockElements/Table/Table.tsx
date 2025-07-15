import React from "react";
import { preventNewLine } from "../libs/events";
import { replaceBy2DIndex, replaceByIndex } from "../libs/utilities";

const TableComponent = ({
    data,
    currentData,
    columnSetOpened,
    rowSetOpened,
    setFocusedColumn,
    setCurrentData,
    setFocusedRow,
}) => {
    console.log(currentData);

    return (
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
                                    onMouseEnter={(e) => {
                                        if (columnSetOpened) return;
                                        const target =
                                            e.currentTarget ??
                                            (e.target as HTMLElement);

                                        if (target.tagName !== "TH") return;

                                        setFocusedColumn((prev) =>
                                            prev?.idx === idx
                                                ? prev
                                                : {
                                                      element: target,
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
                                        data-align={data.style?.textAlign ?? ""}
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
                                e.currentTarget ?? (e.target as HTMLElement);

                            if (target.tagName !== "TR") return;

                            setFocusedRow((prev) =>
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

                                    setFocusedColumn((prev) =>
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
    );
};

export default React.memo(TableComponent);
