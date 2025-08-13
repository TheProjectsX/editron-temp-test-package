export type CodeTags = "pre";
export type CodeData = {
    label?: string;
    code: string;
};

export type CodeBlock = {
    type: "code";
    tag: CodeTags;
    data: CodeData;
};

export type CodeProps = Omit<CodeBlock, "type"> & {
    className?: string;
    style?: Record<string, string>;
};
