import { structure } from "./meta";
import type { CodeProps } from "./types";

const Code = ({ className = "", data, onUpdate }: CodeProps) => {
    return (
        <div className={`space-y-1.5 ${className}`}>
            <input
                type="text"
                name="label"
                className="outline-none py-3 px-4 font-mono text-sm bg-[#f5f5f5] dark:bg-[#1c2641] text-gray-800 dark:text-slate-200 rounded-sm w-full"
                placeholder="Label / Title for the code"
                onBlur={(e) => {
                    const target = e.currentTarget ?? e.target;
                    onUpdate({ ...data, label: target.value });
                }}
                defaultValue={data.label}
            />
            <textarea
                className={`outline-none py-3 px-4 font-mono text-sm bg-[#f5f5f5] dark:bg-[#1c2641] text-gray-800 dark:text-slate-200 rounded-sm w-full scrollbar-thin`}
                name="code"
                rows={8}
                onBlur={(e) => {
                    const target = e.currentTarget ?? e.target;
                    onUpdate({ ...data, code: target.value });
                }}
                placeholder="Write your code"
                defaultValue={data.code}
            ></textarea>
        </div>
    );
};

export default {
    component: Code,
    structure,
};
