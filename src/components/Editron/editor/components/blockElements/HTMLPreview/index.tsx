import { demo, settings, structure } from "./meta";
import type { HTMLPreviewProps } from "./types";

const HTMLPreview = ({ className = "", data, onUpdate }: HTMLPreviewProps) => {
    return (
        <textarea
            className={`outline-none py-3 px-4 font-mono text-sm bg-zinc-100 text-gray-700 rounded-lg w-full ${className}`}
            rows={5}
            onBlur={(e) => {
                const target = e.currentTarget ?? e.target;
                onUpdate({ ...data, code: target.value });
            }}
            placeholder="Write your code"
            defaultValue={data.code}
            autoFocus
        ></textarea>
    );
};

export default {
    component: HTMLPreview,
    structure,
    demo,
    settings,
    inlineToolbar: false,
};
