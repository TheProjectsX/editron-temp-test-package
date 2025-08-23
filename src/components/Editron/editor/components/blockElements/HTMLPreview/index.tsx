import { useState } from "react";
import { settings, structure } from "./meta";
import type { HTMLPreviewProps } from "./types";

const HTMLPreview = ({ className = "", data, onUpdate }: HTMLPreviewProps) => {
    const [content, setContent] = useState<"html" | "css" | "js">("html");

    return (
        <div className={`space-y-2`}>
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
                        title="These codes will be used to Render and View the HTML"
                    >
                        (?)
                    </span>
                </p>
                <div className="rounded-t-sm flex items-center bg-slate-200 dark:bg-slate-700 gap-0.5">
                    {(["html", "css", "js"] as const).map((type) => (
                        <button
                            key={type}
                            className={`w-20 py-2 font-semibold text-sm cursor-pointer disabled:cursor-not-allowed ${
                                content === type
                                    ? ""
                                    : "bg-slate-300 dark:bg-slate-600"
                            }`}
                            onClick={() => setContent(type)}
                            disabled={content === type}
                        >
                            {type.toUpperCase()}
                        </button>
                    ))}
                </div>

                {(["html", "css", "js"] as const).map(
                    (type) =>
                        content === type && (
                            <textarea
                                key={type}
                                className={`outline-none py-3 px-4 font-mono text-sm bg-[#f5f5f5] dark:bg-[#1c2641] text-gray-800 dark:text-slate-200 rounded-b-sm w-full scrollbar-thin ${className}`}
                                rows={8}
                                value={data[type]}
                                onChange={(e) =>
                                    onUpdate({
                                        ...data,
                                        [type]: e.target.value,
                                    })
                                }
                                placeholder={`Write your ${type.toUpperCase()}`}
                            />
                        )
                )}
            </label>
        </div>
    );
};

export default {
    component: HTMLPreview,
    structure,
    settings,
};
