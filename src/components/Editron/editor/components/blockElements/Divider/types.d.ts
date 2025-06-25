export type DividerTags = "hr";
export type DividerData = {
    text?: string;
    type?: "solid" | "dashed" | "dotted";
};

export type DividerBlock = {
    type: "divider";
    tag: DividerTags;
    data: DividerData;
    output: DividerData;
};

export type DividerProps = Omit<DividerBlock, "type" | "output"> & {
    className?: string;
    onUpdate: (value: DividerData) => void;
};
