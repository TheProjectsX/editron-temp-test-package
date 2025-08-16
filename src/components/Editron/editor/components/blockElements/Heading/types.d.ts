type data = {
    tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    html: string;
    style: Record<string, string>;
    flagged?: boolean;
};

type config = {
    flaggable?: boolean;
} & Record<string, any>;

export type HeadingBlock = {
    type: "heading";
    data: data;
    config?: config;
};

export type HeadingProps = Omit<HeadingBlock, "type"> & {
    className?: string;
    onUpdate: (value: data) => void;
};
