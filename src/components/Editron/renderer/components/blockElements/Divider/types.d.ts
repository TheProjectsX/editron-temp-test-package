type data = {
    tag: "hr";
    text?: string;
    type?: "solid" | "dashed" | "dotted";
};

type DividerBlock = {
    type: "divider";
    data: data;
};

export type DividerProps = Omit<DividerBlock, "type"> & {
    className?: string;
    style?: Record<string, string>;
};
