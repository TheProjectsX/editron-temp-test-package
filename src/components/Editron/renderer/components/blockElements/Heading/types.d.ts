type data = {
    tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    html: string;
    style: Record<string, string>;
};

export type HeadingBlock = {
    type: "heading";
    data: data;
};

export type HeadingProps = Omit<HeadingBlock, "type"> & {
    className?: string;
    style: Record<string, string>;
};
