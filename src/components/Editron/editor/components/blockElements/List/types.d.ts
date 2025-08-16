export type data = {
    tag: "ul" | "ol";
    values: {
        html: string;
    }[];
    style?: Record<string, string>;
};

type config = {};

export type ListBlock = {
    type: "list";
    data: data;
    config?: config;
};

export type ListProps = Omit<ListBlock, "type"> & {
    className?: string;
    onUpdate: (value: data) => void;
};
