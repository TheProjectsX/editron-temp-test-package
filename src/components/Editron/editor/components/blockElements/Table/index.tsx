import { useState } from "react";
import { demo, settings, structure } from "./meta";
import type { TableProps } from "./types";
import { preventNewLine } from "../libs/events";
import { replaceBy2DIndex, replaceByIndex } from "../libs/utilities";

const Table = ({ className = "", data, onUpdate }: TableProps) => {
    const [currentData, setCurrentData] = useState({
        headers: data.headers,
        body: data.body,
    });

    return (
        <div
            className={className}
            onBlur={() => {
                onUpdate(currentData);
            }}
        >
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
                                        className="px-3 py-2 border border-gray-200"
                                        key={idx}
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
                        <tr key={idx} className="">
                            {body.map((item, idxs) => (
                                <td
                                    className="px-3 py-2 border border-gray-200 outline-none break-words"
                                    onKeyDown={preventNewLine}
                                    onBlur={(e) => {
                                        setCurrentData((prev) => ({
                                            headers: prev.headers,
                                            body: replaceBy2DIndex(
                                                prev.body,
                                                [idx, idxs],
                                                e.target.innerHTML
                                            ),
                                        }));
                                    }}
                                    key={idxs}
                                    contentEditable
                                    dangerouslySetInnerHTML={{ __html: item }}
                                ></td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default {
    component: Table,
    structure,
    demo,
    settings,
};
