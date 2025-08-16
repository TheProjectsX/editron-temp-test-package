type data = {
    tag: "pre";
    label?: string;
    code: string;
};

type config = {};

export type CodeBlock = {
    type: "code";
    data: data;
    config?: config;
};

export type CodeProps = Omit<CodeBlock, "type"> & {
    className?: string;
    onUpdate: (value: data) => void;
};
