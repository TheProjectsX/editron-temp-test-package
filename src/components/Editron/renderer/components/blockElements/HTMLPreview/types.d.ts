type HTMLPreviewTags = "pre";
type HTMLPreviewData = {
    code: string;
    type: "preview" | "reveal";
};

export type HTMLPreviewBlock = {
    type: "code-preview";
    tag: HTMLPreviewTags;
    data: HTMLPreviewData;
};

export type HTMLPreviewProps = Omit<HTMLPreviewBlock, "type"> & {
    className?: string;
    style?: Record<string, string>
};
