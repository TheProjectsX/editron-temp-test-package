import type { CodeTags, EditorCodeData } from "../../../types/blockElements";

type CodeProps = {
    className?: string;
    tag: CodeTags;
    data: EditorCodeData;
    onUpdate: (value: EditorCodeData) => void;
};

const Code = ({ className = "", data, onUpdate }: CodeProps) => {
    return (
        <textarea
            className={`outline-none py-3 px-4 font-mono text-sm bg-zinc-100 text-gray-700 rounded-lg w-full ${className}`}
            rows={5}
            onBlur={(e) => {
                const target = e.currentTarget ?? e.target;
                onUpdate({ code: target.value });
            }}
            placeholder="Write your code"
            defaultValue={data.code}
            autoFocus
        ></textarea>
    );
};

export default Code;
