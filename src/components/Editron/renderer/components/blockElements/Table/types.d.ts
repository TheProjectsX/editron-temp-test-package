type TableTags = "table";
type TableData = {
    headers?: string[];
    body: string[][];
    style?: Record<string, string>;
};

export type TableBlock = {
    type: "table";
    tag: TableTags;
    data: TableData;
};

export type TableProps = Omit<TableBlock, "type"> & {
    className?: string;
    style?: Record<string, string>;
};
