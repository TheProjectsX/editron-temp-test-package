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
    output: HTMLPreviewData;
};

export type HTMLPreviewProps = Omit<HTMLPreviewBlock, "type" | "output"> & {
    className?: string;
    onUpdate: (value: HTMLPreviewData) => void;
};
