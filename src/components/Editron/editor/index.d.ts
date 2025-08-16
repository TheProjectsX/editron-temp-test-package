import type { OutputBlock } from "../editor-bak/types/blocks";
import type { EditorBlock, PluginType } from "./register/types";

export type UserConfig = {
    uploadImage?: (file: File) => Promise<string>;
    enableTableOfContents?: boolean;
    block?: {
        [name: string]: {
            inlineToolbar?: boolean;
            defaultTag?: string;
        };
    };
};

export interface EditorProps {
    initials?:
        | {
              blocks: EditorBlock[] | any[];
          }
        | EditorBlock[]
        | any[];
    defaultBlock?: string;
    plugins?: PluginType[] | any[];
    config?: UserConfig;
}

export type Output = {
    blocks: {
        id: string;
        type: string;
        data: { tag: string } & Record<string, any>;
    }[];
    tableOfContents?: { label: string; id: string }[];
};

export type EditorReturn = [React.FC, () => Promise<Output>];

declare const Editor: (props?: EditorProps) => EditorReturn;

export default Editor;
