type data = {
    tag: "pre";
    label?: string;
    code: string;
};

type CodeBlock = {
    type: "code";
    data: data;
};

export type CodeProps = Omit<CodeBlock, "type"> & {
    className?: string;
    style?: Record<string, string>;
};
