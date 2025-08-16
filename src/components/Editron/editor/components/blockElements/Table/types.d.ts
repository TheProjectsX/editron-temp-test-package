type data = {
    tag: "table";
    headers?: string[];
    body: string[][];
    style?: Record<string, string>;
};

type config = {};

export type TableBlock = {
    type: "table";
    data: data;
    config?: config;
};

export type TableProps = Omit<TableBlock, "type"> & {
    className?: string;
    onUpdate: (value: data) => void;
};
