import { demo, settings, structure } from "./meta";
import type { HTMLPreviewProps } from "./types";

const HTMLPreview = ({ className = "", data, onUpdate }: HTMLPreviewProps) => {
    return (
        <div className="space-y-2">
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
                    className={`outline-none py-3 px-4 font-mono text-sm bg-zinc-200 text-gray-800 rounded-sm w-full ${className}`}
                    rows={2}
                    onBlur={(e) => {
                        const target = e.currentTarget ?? e.target;
                        onUpdate({ ...data, head: target.value });
                    }}
                    placeholder="Write your head (Optional)"
                    defaultValue={data.head}
                    autoFocus
                />
            </label>

            <label className="space-y-1.5 block">
                <p className="text-sm font-semibold">
                    Body Content{" "}
                    <span
                        className="text-xs font-bold font-mono cursor-pointer"
                        title="This code will be used to Preview Live and Preview Syntax"
                    >
                        (?)
                    </span>
                </p>
                <textarea
                    className={`outline-none py-3 px-4 font-mono text-sm bg-zinc-200 text-gray-800 rounded-sm w-full ${className}`}
                    rows={5}
                    onBlur={(e) => {
                        const target = e.currentTarget ?? e.target;
                        onUpdate({ ...data, html: target.value });
                    }}
                    placeholder="Write your body"
                    defaultValue={data.html}
                    autoFocus
                />
            </label>
        </div>
    );
};

export default {
    component: HTMLPreview,
    structure,
    demo,
    settings,
    inlineToolbar: false,
};
