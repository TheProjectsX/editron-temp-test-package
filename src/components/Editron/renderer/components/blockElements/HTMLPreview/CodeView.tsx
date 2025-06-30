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
            <div className="flex items-center justify-between bg-gray-50">
                <div className="flex gap-[1px] bg-gray-200 border-x border-gray-200">
                    {html && html.length > 0 && (
                        <button
                            className="py-2 w-18 bg-gray-100 enabled:hover:bg-gray-200 disabled:bg-gray-200 cursor-pointer disabled:cursor-default text-sm font-medium text-gray-800"
                            onClick={() => setSection("html")}
                            disabled={section === "html"}
                        >
                            HTML
                        </button>
                    )}
                    {css && css.length > 0 && (
                        <button
                            className="py-2 w-18 bg-gray-100 enabled:hover:bg-gray-200 disabled:bg-gray-200 cursor-pointer disabled:cursor-default text-sm font-medium text-gray-800"
                            onClick={() => setSection("css")}
                            disabled={section === "css"}
                        >
                            CSS
                        </button>
                    )}
                    {js && js.length > 0 && (
                        <button
                            className="py-2 w-18 bg-gray-100 enabled:hover:bg-gray-200 disabled:bg-gray-200 cursor-pointer disabled:cursor-default text-sm font-medium text-gray-800"
                            onClick={() => setSection("js")}
                            disabled={section === "js"}
                        >
                            JS
                        </button>
                    )}
                </div>
                <button
                    className="py-2 w-20 bg-gray-100 enabled:hover:bg-gray-200 cursor-pointer disabled:cursor-default text-sm font-medium text-gray-800 border-x border-gray-200"
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
                        <FaClipboardList className="text-gray-700" /> Copy
                    </span>
                    <span
                        className="copied flex items-center justify-center gap-1.5"
                        hidden
                    >
                        <MdOutlineDone className="text-gray-700" /> Copied
                    </span>
                </button>
            </div>

            <pre className={`whitespace-pre-wrap overflow-x-auto !relative`}>
                <code
                    className="hljs text-sm"
                    dangerouslySetInnerHTML={{
                        __html:
                            section === "html"
                                ? highlightedHTML
                                : section === "css"
                                ? highlightedCSS
                                : highlightedJS,
                    }}
                />
            </pre>
        </div>
    );
};

export default CodeView;
