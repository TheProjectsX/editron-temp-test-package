type data = {
    tag: "pre";
    head?: string;
    html: string;
    css?: string;
    js?: string;
    mode: "preview" | "reveal";
};

export type HTMLPreviewBlock = {
    id: string;
    type: "html-preview";
    data: data;
};

export type HTMLPreviewProps = {
    className?: string;
    style?: Record<string, string>;
    metadata: HTMLPreviewBlock;
};
