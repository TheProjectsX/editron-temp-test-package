type data = {
    tag: "pre";
    head?: string;
    html: string;
    css?: string;
    js?: string;
    type: "preview" | "reveal";
};

type config = {};

export type HTMLPreviewBlock = {
    type: "html-preview";
    data: data;
    config?: config;
};

export type HTMLPreviewProps = Omit<HTMLPreviewBlock, "type"> & {
    className?: string;
    onUpdate: (value: data) => void;
};
