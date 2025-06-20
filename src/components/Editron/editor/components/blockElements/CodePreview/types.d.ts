type CodePreviewTags = "pre";
type CodePreviewData = {
    code: string;
    mode: "preview" | "reveal";
};

export type CodePreviewBlock = {
    type: "code-preview";
    tag: CodePreviewTags;
    data: CodePreviewData;
};

export type CodePreviewProps = Omit<CodePreviewBlock, "type"> & {
    className?: string;
    onUpdate: (value: CodePreviewData) => void;
};
