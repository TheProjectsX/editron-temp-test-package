export type ListTags = "ul" | "ol";
export type ListData = {
    values: {
        html: string;
    }[];
    style?: Record<string, string>;
};

export type ListBlock = {
    type: "list";
    tag: ListTags;
    data: ListData;
    output: ListData;
};

export type ListProps = Omit<ListBlock, "type" | "output"> & {
    className?: string;
    onUpdate: (value: ListData) => void;
};
