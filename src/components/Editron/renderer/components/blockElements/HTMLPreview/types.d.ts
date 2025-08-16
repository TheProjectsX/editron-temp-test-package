type data = {
    tag: "pre";
    head?: string;
    html: string;
    css?: string;
    js?: string;
    type: "preview" | "reveal";
};

export type HTMLPreviewBlock = {
    type: "html-preview";
    data: data;
};

export type HTMLPreviewProps = Omit<HTMLPreviewBlock, "type"> & {
    className?: string;
    style?: Record<string, string>;
};
