type HTMLPreviewTags = "pre";
type HTMLPreviewData = {
    head?: string;
    html: string;
    type: "preview" | "reveal";
    layout: "auto" | "tabs" | "stack";
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
