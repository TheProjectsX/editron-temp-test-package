import { useState } from "react";
import { demo, settings, structure } from "./meta";
import type { HTMLPreviewProps } from "./types";
import { spacingConfig } from "../libs/styles";

const HTMLPreview = ({ className = "", data, onUpdate }: HTMLPreviewProps) => {
    const [content, setContent] = useState<"html" | "css" | "js">("html");

    return (
        <div className={`space-y-2 ${spacingConfig["htmlPreview"]}`}>
            <label className="space-y-1.5 block">
                <p className="text-sm font-semibold">
                    Head Content{" "}
                    <span
                        className="text-xs font-bold font-mono cursor-pointer"
                        title="This code will not be previewed, but will be injected into the preview frame"
                    >
                        (?)
                    </span>
                </p>
                <textarea
                    className={`outline-none py-3 px-4 font-mono text-sm bg-[#f5f5f5] dark:bg-[#1c2641] text-gray-800 dark:text-slate-200 rounded-sm w-full scrollbar-thin ${className}`}
                    rows={2}
                    onBlur={(e) => {
                        const target = e.currentTarget ?? e.target;
                        onUpdate({ ...data, head: target.value });
                    }}
                    placeholder="Write your head (Optional)"
                    defaultValue={data.head}
                />
            </label>

            <label className="block">
                <p className="text-sm font-semibold mb-1.5">
                    Main Content{" "}
                    <span
                        className="text-xs font-bold font-mono cursor-pointer"
                        title="These codes will be used to Render and View the HTMl"
                    >
                        (?)
                    </span>
                </p>
                <div className="rounded-t-sm flex items-center bg-slate-200 dark:bg-slate-700 gap-0.5">
                    {(["html", "css", "js"] as ("html" | "css" | "js")[]).map(
                        (item) => (
                            <button
                                key={item}
                                className={`w-20 py-2 font-semibold text-sm cursor-pointer disabled:cursor-not-allowed ${
                                    content === item
                                        ? ""
                                        : "bg-slate-300 dark:bg-slate-600"
                                }`}
                                onClick={() => setContent(item)}
                                disabled={content === item}
                            >
                                {item.toUpperCase()}
                            </button>
                        )
                    )}

                    {/* <button>CSS</button>
                    <button>JS</button> */}
                </div>

                {content === "html" && (
                    <textarea
                        className={`outline-none py-3 px-4 font-mono text-sm bg-[#f5f5f5] dark:bg-[#1c2641] text-gray-800 dark:text-slate-200 rounded-b-sm w-full scrollbar-thin ${className}`}
                        rows={5}
                        onBlur={(e) => {
                            const target = e.currentTarget ?? e.target;
                            onUpdate({ ...data, html: target.value });
                        }}
                        placeholder={`Write your HTML`}
                        defaultValue={data.html}
                    />
                )}
                {content === "css" && (
                    <textarea
                        className={`outline-none py-3 px-4 font-mono text-sm bg-[#f5f5f5] dark:bg-[#1c2641] text-gray-800 dark:text-slate-200 rounded-b-sm w-full scrollbar-thin ${className}`}
                        rows={5}
                        onBlur={(e) => {
                            const target = e.currentTarget ?? e.target;
                            onUpdate({ ...data, css: target.value });
                        }}
                        placeholder={`Write your CSS`}
                        defaultValue={data.css}
                    />
                )}
                {content === "js" && (
                    <textarea
                        className={`outline-none py-3 px-4 font-mono text-sm bg-[#f5f5f5] dark:bg-[#1c2641] text-gray-800 dark:text-slate-200 rounded-b-sm w-full scrollbar-thin ${className}`}
                        rows={5}
                        onBlur={(e) => {
                            const target = e.currentTarget ?? e.target;
                            onUpdate({ ...data, js: target.value });
                        }}
                        placeholder={`Write your JS`}
                        defaultValue={data.js}
                    />
                )}
            </label>
        </div>
    );
};

export default {
    component: HTMLPreview,
    structure,
    demo,
    settings,
};
