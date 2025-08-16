type data = {
    tag: "ul" | "ol";
    values: {
        html: string;
    }[];
    style?: Record<string, string>;
};

export type ListBlock = {
    id: string;
    type: "list";
    data: data;
};

export type ListProps = {
    className?: string;
    style?: Record<string, string>;
    metadata: ListBlock;
};
