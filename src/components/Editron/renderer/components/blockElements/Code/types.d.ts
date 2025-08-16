type data = {
    tag: "pre";
    label?: string;
    code: string;
};

type CodeBlock = {
    id: string;
    type: "code";
    data: data;
};

export type CodeProps = {
    className?: string;
    style?: Record<string, string>;
    metadata: CodeBlock;
};
