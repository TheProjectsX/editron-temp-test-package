export type CodeTags = "pre";
export type CodeData = {
    label?: string;
    code: string;
};

export type CodeBlock = {
    type: "code";
    tag: CodeTags;
    data: CodeData;
    output: CodeData;
};

export type CodeProps = Omit<CodeBlock, "type" | "output"> & {
    className?: string;
    onUpdate: (value: CodeData) => void;
};
