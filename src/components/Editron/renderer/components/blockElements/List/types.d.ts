type data = {
    tag: "ul" | "ol";
    values: {
        html: string;
    }[];
    style?: Record<string, string>;
};

export type ListBlock = {
    type: "list";
    data: data;
};

export type ListProps = Omit<ListBlock, "type"> & {
    className?: string;
    style?: Record<string, string>;
};
