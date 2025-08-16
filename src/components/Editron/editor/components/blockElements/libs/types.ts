// Create Editor Block type from Data. Remove `config` and add `id`
export type EditorBlock<T> = { id: string } & Omit<T, "config">;

// Demo All Blocks
export type AllBlocks = {
    id: string;
    type: string;
    data: Record<string, any>;
};
