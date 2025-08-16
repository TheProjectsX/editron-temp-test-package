type data = {
    tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    html: string;
    style: Record<string, string>;
    flagged?: boolean;
};

export type HeadingBlock = {
    id: string;
    type: "heading";
    data: data;
};

export type HeadingProps = {
    className?: string;
    style: Record<string, string>;
    metadata: HeadingBlock;
};
