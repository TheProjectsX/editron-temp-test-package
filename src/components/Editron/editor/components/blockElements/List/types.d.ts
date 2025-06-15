export type ListTags = "ul" | "ol";
export type ListData = {
    values: {
        html: string;
    }[];
};

export type ListBlock = {
    type: "list";
    tag: ListTags;
    data: ListData;
};

export type ListProps = Omit<ListBlock, "type"> & {
    className?: string;
    onUpdate: (value: ListData) => void;
};
