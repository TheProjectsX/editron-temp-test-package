import { spacingConfig } from "../libs/styles";
import { demo, structure } from "./meta";
import type { CodeProps } from "./types";

const Code = ({ className = "", data, onUpdate }: CodeProps) => {
    return (
        <textarea
            className={`outline-none py-3 px-4 font-mono text-sm bg-[#f5f5f5] dark:bg-[#1c2641] text-gray-800 dark:text-slate-200 rounded-sm w-full scrollbar-thin ${spacingConfig["code"]} ${className}`}
            rows={5}
            onBlur={(e) => {
                const target = e.currentTarget ?? e.target;
                onUpdate({ code: target.value });
            }}
            placeholder="Write your code"
            defaultValue={data.code}
        ></textarea>
    );
};

export default {
    component: Code,
    structure,
    demo,
    inlineToolbar: false,
};
