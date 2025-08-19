import type { IconType } from "react-icons";

// -------------------
// Prebuilt Block Types
// -------------------
export type AllTypes =
    | "paragraph"
    | "heading"
    | "list"
    | "table"
    | "divider"
    | "code"
    | "quote"
    | "image"
    | "html-preview";

// -------------------
// Editor Block
// -------------------
export type EditorBlock = {
    id: string;
    type: string; // string = user-defined block type
    config?: Record<string, any>;
    data: { tag: string } & Record<string, any>;
};

// -------------------
// Structure Tag Type
// -------------------
export type SubTag = {
    name: string;
    tag: string;
    icon: IconType;
};

// -------------------
// Block Structure
// -------------------
export type BlockStructure = {
    name: string;
    icon: IconType;
    type: string;
    tags: string | SubTag[];
    data: { tag: string } & Record<string, any>;
};

// -------------------
// Plugin Structure
// -------------------
export type PluginStructure = {
    name: string;
    icon: IconType;
    type: string;
    tags: string | SubTag[];
    data: { tag: string } & Record<string, any>;
};

// -------------------
// Settings Structure
// -------------------
export type SettingsStructure = {
    name: string;
    icon?: IconType;
    transform?: (values: EditorBlock) => Partial<EditorBlock> | null;
    actions: {
        name: string;
        icon?: IconType;
        transform: (values: EditorBlock) => Partial<EditorBlock> | null;
    }[];
};

// -------------------
// Plugin Props & Type
// -------------------
export type PluginProps = {
    className?: string;
    data: { tag: string } & Record<string, any>;
    onUpdate: (value: Record<string, any>) => void;
};

export type PluginType = {
    component: React.FC<PluginProps>;
    structure: PluginStructure;
    settings?: SettingsStructure[];
    processor?: (block: Record<string, any>) => Promise<Record<string, any>>;
};

// -------------------
// User Configuration
// -------------------
export type UserConfig = {
    uploadImage?: (file: File) => Promise<string>;
    enableTableOfContents?: boolean;
    blocks?: Partial<
        Record<
            AllTypes | (string & {}),
            {
                inlineToolbar?: boolean;
                defaultTag?: string;
            }
        >
    >;
};

// -------------------
// Editor Props
// -------------------
export interface EditorProps {
    initials?: { blocks: EditorBlock[] | any[] } | EditorBlock[] | any[];
    defaultBlock?: AllTypes | (string & {});
    plugins?: PluginType[] | any[];
    config?: UserConfig;
}

// -------------------
// Output & Return Types
// -------------------
export type Output = {
    blocks: {
        id: string;
        type: AllTypes;
        data: { tag: string } & Record<string, any>;
    }[];
    tableOfContents?: { label: string; id: string }[];
};

export type EditorReturn = [React.FC, () => Promise<Output>];

// -------------------
// Main Export
// -------------------
declare const Editor: (props?: EditorProps) => EditorReturn;
export default Editor;
