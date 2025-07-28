import { useMemo } from "react";
import type { CodeProps } from "./types";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark-dimmed.css";
import { FaClipboardList } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";
import { copyToClipboard } from "../libs/utilities";
import { spacingConfig } from "../libs/styles";
import { LuWrapText } from "react-icons/lu";

const Code = ({ className = "", style, data }: CodeProps) => {
    const highlighted = useMemo(
        () => hljs.highlightAuto(data.code).value,
        [data.code]
    );

    return (
        <pre
            className={`overflow-x-auto !relative ${spacingConfig["code"]} ${className}`}
            style={style ?? {}}
        >
            <div className="absolute right-1 top-1 flex">
                <label
                    className="p-1.5 rounded-sm text-lg
             bg-slate-800 cursor-pointer
             hover:bg-slate-700 active:bg-slate-900"
                >
                    <input
                        type="checkbox"
                        name="toggle"
                        className="peer"
                        onChange={(e) => {
                            const target = e.currentTarget as HTMLInputElement;

                            const pre = target.closest("pre") as HTMLPreElement;

                            if (target.checked) {
                                pre.style.whiteSpace = "pre-wrap";
                            } else {
                                pre.style.whiteSpace = "pre";
                            }
                        }}
                        hidden
                    />
                    <LuWrapText className="text-slate-300 peer-checked:text-blue-400" />
                </label>

                <button
                    className="p-1.5 rounded-sm text-lg
             bg-slate-800 text-slate-300 cursor-pointer
             hover:bg-slate-700 active:bg-slate-900"
                    title="Copy Code"
                    onClick={(e) => {
                        const target = e.currentTarget as HTMLButtonElement;

                        const copy = target.querySelector(
                            ".copy"
                        ) as HTMLSpanElement;
                        const copied = target.querySelector(
                            ".copied"
                        ) as HTMLSpanElement;

                        copyToClipboard(data.code, () => {
                            copy.hidden = true;
                            copied.hidden = false;
                            setTimeout(() => {
                                copied.hidden = true;
                                copy.hidden = false;
                            }, 1000);
                        });
                    }}
                >
                    <span className="copy">
                        <FaClipboardList />
                    </span>
                    <span className="copied" hidden>
                        <MdOutlineDone />
                    </span>
                </button>
            </div>

            <code
                className="hljs text-sm min-h-20 max-h-60 overflow-y-auto scrollbar-thin"
                dangerouslySetInnerHTML={{ __html: highlighted }}
            />
            <button
                hidden
                ref={(target) => {
                    if (!target) return;
                    const code = target.parentElement?.querySelector(
                        ":scope > code"
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
                        ":scope > code"
                    ) as HTMLElement;

                    code.style.maxHeight = "none";
                    target.hidden = true;
                }}
            >
                Expand Code
            </button>
        </pre>
    );
};

export default {
    type: "code",
    component: Code,
};
