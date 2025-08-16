type data = {
    tag: "table";
    headers?: string[];
    body: string[][];
    style?: Record<string, string>;
};

export type TableBlock = {
    type: "table";
    data: data;
};

export type TableProps = Omit<TableBlock, "type"> & {
    className?: string;
    style?: Record<string, string>;
};
