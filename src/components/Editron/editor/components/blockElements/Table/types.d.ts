type TableTags = "table";
type TableData = {
    headers?: string[]
    body: string[][];
    style?: Record<string, string>;
};

export type TableBlock = {
    type: "table";
    tag: TableTags;
    data: TableData;
    output: TableData;
};

export type TableProps = Omit<TableBlock, "type" | "output"> & {
    className?: string;
    onUpdate: (value: TableData) => void;
};
