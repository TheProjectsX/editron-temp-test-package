import { useMemo } from "react";
import type { CodeProps } from "./types";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark-dimmed.css";
import { FaClipboardList } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";
import { copyToClipboard } from "../libs/utilities";
import { spacingConfig } from "../libs/styles";

const Code = ({ className = "", style, metadata }: CodeProps) => {
    const highlighted = useMemo(
        () => hljs.highlightAuto(metadata.data.code).value,
        [metadata.data.code]
    );

    return (
        <div
            className={`overflow-x-auto !relative ${spacingConfig["code"]} ${className}`}
            style={style ?? {}}
        >
            <div className="w-full flex justify-between items-center bg-gray-100 dark:bg-slate-700">
                <div>
                    {metadata.data.label && (
                        <p className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-mono font-medium text-sm border border-b-0 border-gray-300 dark:border-gray-600">
                            {metadata.data.label}
                        </p>
                    )}
                </div>
                <div className="flex gap-3">
                    <label className="items-center gap-2 text-sm font-semibold select-none hidden sm:flex">
                        <input
                            type="checkbox"
                            name="toggle"
                            onChange={(e) => {
                                const target =
                                    e.currentTarget as HTMLInputElement;

                                const currentParent =
                                    target.closest(`div`)?.parentElement;

                                const pre =
                                    currentParent?.parentElement?.querySelector(
                                        ":scope > pre"
                                    ) as HTMLPreElement;

                                if (target.checked) {
                                    pre.style.whiteSpace = "pre-wrap";
                                } else {
                                    pre.style.whiteSpace = "pre";
                                }
                            }}
                        />
                        Line Wrap
                    </label>
                    <button
                        className="py-2 w-20 bg-transparent cursor-pointer disabled:cursor-default text-sm font-medium text-gray-800 dark:text-gray-100 border-x border-gray-200 dark:border-gray-600"
                        title="Copy Code"
                        onClick={(e) => {
                            const target = e.currentTarget as HTMLButtonElement;

                            const copy = target.querySelector(
                                ".copy"
                            ) as HTMLSpanElement;
                            const copied = target.querySelector(
                                ".copied"
                            ) as HTMLSpanElement;

                            copyToClipboard(metadata.data.code, () => {
                                copy.hidden = true;
                                copied.hidden = false;
                                setTimeout(() => {
                                    copied.hidden = true;
                                    copy.hidden = false;
                                }, 1000);
                            });
                        }}
                    >
                        <span className="copy flex items-center justify-center gap-1.5">
                            <FaClipboardList className="text-gray-700 dark:text-white" />{" "}
                            Copy
                        </span>
                        <span
                            className="copied flex items-center justify-center gap-1.5"
                            hidden
                        >
                            <MdOutlineDone className="text-gray-700 dark:text-white" />{" "}
                            Copied
                        </span>
                    </button>
                </div>
            </div>

            <pre>
                <code
                    className="hljs text-sm min-h-20 max-h-60 overflow-y-auto scrollbar-thin"
                    dangerouslySetInnerHTML={{ __html: highlighted }}
                />
            </pre>

            <button
                hidden
                ref={(target) => {
                    if (!target) return;
                    const code = target.parentElement?.querySelector(
                        ":scope > pre > code"
                    ) as HTMLElement;

                    if (!code) return;

                    const hasOverflow =
                        code.scrollHeight > code.clientHeight ||
                        code.scrollWidth > code.clientWidth;

                    target.hidden = !hasOverflow;
                }}
                className="block w-full font-sans p-2 bg-slate-700 text-slate-300 border-t border-slate-600 cursor-pointer"
                onClick={(e) => {
                    const target = e.currentTarget as HTMLButtonElement;
                    const code = target.parentElement?.querySelector(
                        ":scope > pre > code"
                    ) as HTMLElement;

                    code.style.maxHeight = "none";
                    target.hidden = true;
                }}
            >
                Expand Code
            </button>
        </div>
    );
};

export default {
    type: "code",
    component: Code,
};
