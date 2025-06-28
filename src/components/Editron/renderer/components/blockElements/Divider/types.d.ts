export type DividerTags = "hr";
export type DividerData = {
    text?: string;
    type?: "solid" | "dashed" | "dotted";
};

export type DividerBlock = {
    type: "divider";
    tag: DividerTags;
    data: DividerData;
};

export type DividerProps = Omit<DividerBlock, "type"> & {
    className?: string;
    style?: Record<string, string>;
};
