type HeadingTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingData = {
    html: string;
};

export type HeadingBlock = {
    type: "heading";
    tag: HeadingTags;
    data: HeadingData;
};

export type HeadingProps = Omit<HeadingBlock, "type"> & {
    className?: string;
    onUpdate: (value: HeadingData) => void;
};
