import { spacingConfig } from "../libs/styles";
import type { TableProps } from "./types";

const Table = ({ className = "", style, data }: TableProps) => {
    return (
        <div
            className={`relative overflow-x-auto shadow-md sm:rounded-lg ${spacingConfig["table"]} ${className}`}
            style={style ?? {}}
        >
            <table
                className="w-full text-sm text-left text-gray-500 dark:text-gray-400"
                style={data.style ?? {}}
            >
                {Array.isArray(data.headers) && data.headers.length > 0 && (
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            {data.headers.map((item, idx) => (
                                <th
                                    key={idx}
                                    className="px-6 py-3"
                                    dangerouslySetInnerHTML={{ __html: item }}
                                ></th>
                            ))}
                        </tr>
                    </thead>
                )}
                <tbody>
                    {data.body.map((row, idx) => (
                        <tr
                            key={idx}
                            className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
                        >
                            {row.map((column, idxc) => (
                                <td
                                    key={idxc}
                                    className="px-6 py-4"
                                    dangerouslySetInnerHTML={{ __html: column }}
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
    type: "table",
    component: Table,
};
