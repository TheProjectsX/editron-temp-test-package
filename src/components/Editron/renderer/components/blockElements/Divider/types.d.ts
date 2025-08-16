type data = {
    tag: "hr";
    text?: string;
    type?: "solid" | "dashed" | "dotted";
};

type DividerBlock = {
    id: string;
    type: "divider";
    data: data;
};

export type DividerProps = {
    className?: string;
    style?: Record<string, string>;
    metadata: DividerBlock;
};
