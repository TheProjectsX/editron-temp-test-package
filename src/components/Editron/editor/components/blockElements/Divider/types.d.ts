type data = {
    tag: "hr";
    text?: string;
    type?: "solid" | "dashed" | "dotted";
};

type config = {};

export type DividerBlock = {
    type: "divider";
    data: data;
    config?: config;
};

export type DividerProps = Omit<DividerBlock, "type"> & {
    className?: string;
    onUpdate: (value: data) => void;
};
