type HTMLPreviewTags = "pre";
type HTMLPreviewData = {
    code: string;
    type: "preview" | "reveal";
};

export type HTMLPreviewBlock = {
    type: "code-preview";
    tag: HTMLPreviewTags;
    data: HTMLPreviewData;
    output: HTMLPreviewData;
};

export type HTMLPreviewProps = Omit<HTMLPreviewBlock, "type" | "output"> & {
    className?: string;
    onUpdate: (value: HTMLPreviewData) => void;
};
