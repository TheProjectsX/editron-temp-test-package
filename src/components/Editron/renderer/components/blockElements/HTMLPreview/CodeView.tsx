import { useMemo, useState } from "react";
import { FaClipboardList } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";
import { copyToClipboard } from "../libs/utilities";
import hljs from "highlight.js/lib/core";
import xml from "highlight.js/lib/languages/xml";
import javascript from "highlight.js/lib/languages/javascript";
import css from "highlight.js/lib/languages/css";

hljs.registerLanguage("xml", xml);
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("css", css);

const CodeView = ({
    html,
    css,
    js,
}: {
    html: string;
    css?: string;
    js?: string;
}) => {
    const [section, setSection] = useState<"html" | "css" | "js">(
        html && html.length > 0 ? "html" : css && css.length > 0 ? "css" : "js"
    );

    const highlightedHTML = useMemo(
        () => hljs.highlight(html, { language: "xml" }).value,
        [html]
    );

    const highlightedCSS = useMemo(
        () => (css ? hljs.highlight(css, { language: "css" }).value : ""),
        [css]
    );
    const highlightedJS = useMemo(
        () => (js ? hljs.highlight(js, { language: "javascript" }).value : ""),
        [js]
    );

    return (
        <div>
            {/* Head with Controls */}
            <div
                className="flex items-center justify-between bg-gray-50 dark:bg-slate-700"
                data-name="controls"
            >
                <div
                    className="flex gap-[1px]
                 border-x border-gray-200 dark:border-gray-600"
                >
                    {html && html.length > 0 && (
                        <button
                            className="py-2 w-18 text-gray-800 dark:text-gray-100 bg-gray-200 dark:bg-slate-600 enabled:hover:bg-gray-200 enabled:dark:hover:bg-slate-700 disabled:bg-gray-200 disabled:dark:bg-slate-700 cursor-pointer disabled:cursor-default text-sm font-medium"
                            onClick={() => setSection("html")}
                            disabled={section === "html"}
                        >
                            HTML
                        </button>
                    )}
                    {css && css.length > 0 && (
                        <button
                            className="py-2 w-18 text-gray-800 dark:text-gray-100 bg-gray-200 dark:bg-slate-600 enabled:hover:bg-gray-200 enabled:dark:hover:bg-slate-700 disabled:bg-gray-200 disabled:dark:bg-slate-700 cursor-pointer disabled:cursor-default text-sm font-medium"
                            onClick={() => setSection("css")}
                            disabled={section === "css"}
                        >
                            CSS
                        </button>
                    )}
                    {js && js.length > 0 && (
                        <button
                            className="py-2 w-18 text-gray-800 dark:text-gray-100 bg-gray-200 dark:bg-slate-600 enabled:hover:bg-gray-200 enabled:dark:hover:bg-slate-700 disabled:bg-gray-200 disabled:dark:bg-slate-700 cursor-pointer disabled:cursor-default text-sm font-medium"
                            onClick={() => setSection("js")}
                            disabled={section === "js"}
                        >
                            JS
                        </button>
                    )}
                </div>
                <div className="flex items-center gap-2">
                    <label className="items-center gap-2 text-sm font-semibold select-none hidden sm:flex">
                        <input
                            type="checkbox"
                            name="toggle"
                            onChange={(e) => {
                                const target =
                                    e.currentTarget as HTMLInputElement;

                                const controls = target.closest(
                                    `[data-name="controls"]`
                                );
                                const pre =
                                    controls?.parentElement?.querySelector(
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
                        className="py-2 w-20 bg-gray-100 dark:bg-gray-700 cursor-pointer disabled:cursor-default text-sm font-medium text-gray-800 dark:text-gray-100 border-x border-gray-200 dark:border-gray-600"
                        title="Copy Code"
                        onClick={(e) => {
                            const btn = e.currentTarget as HTMLButtonElement;
                            const copy = btn.querySelector(
                                ".copy"
                            ) as HTMLSpanElement;
                            const copied = btn.querySelector(
                                ".copied"
                            ) as HTMLSpanElement;

                            copyToClipboard(
                                section === "html"
                                    ? html
                                    : section === "css"
                                    ? css ?? ""
                                    : js ?? "",
                                () => {
                                    copy.hidden = true;
                                    copied.hidden = false;
                                    setTimeout(() => {
                                        copied.hidden = true;
                                        copy.hidden = false;
                                    }, 1500);
                                }
                            );
                        }}
                    >
                        <span className="copy flex items-center justify-center gap-1.5">
                            <FaClipboardList className="text-gray-700 dark:text-white" /> Copy
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

            <pre className={``}>
                <code
                    className="hljs text-sm min-h-20 max-h-60 overflow-y-auto scrollbar-thin"
                    dangerouslySetInnerHTML={{
                        __html:
                            section === "html"
                                ? highlightedHTML
                                : section === "css"
                                ? highlightedCSS
                                : highlightedJS,
                    }}
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
        </div>
    );
};

export default CodeView;
