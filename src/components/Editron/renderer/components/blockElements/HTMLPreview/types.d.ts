type HTMLPreviewTags = "pre";
type HTMLPreviewData = {
    head?: string;
    html: string;
    css?: string;
    js?: string;
    type: "preview" | "reveal";
};

export type HTMLPreviewBlock = {
    type: "html-preview";
    tag: HTMLPreviewTags;
    data: HTMLPreviewData;
};

export type HTMLPreviewProps = Omit<HTMLPreviewBlock, "type"> & {
    className?: string;
    style?: Record<string, string>;
};
