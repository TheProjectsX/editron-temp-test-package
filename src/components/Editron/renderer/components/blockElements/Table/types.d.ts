type data = {
    tag: "table";
    headers?: string[];
    body: string[][];
    style?: Record<string, string>;
};

export type TableBlock = {
    id: string;
    type: "table";
    data: data;
};

export type TableProps = {
    className?: string;
    style?: Record<string, string>;
    metadata: TableBlock;
};
