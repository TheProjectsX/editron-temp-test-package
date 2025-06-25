type HeadingTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingData = {
    html: string;
    style: Record<string, string>;
};

export type HeadingBlock = {
    type: "heading";
    tag: HeadingTags;
    data: HeadingData;
    output: HeadingData
};

export type HeadingProps = Omit<HeadingBlock, "type" | "output"> & {
    className?: string;
    onUpdate: (value: HeadingData) => void;
};
