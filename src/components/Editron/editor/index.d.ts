import type { OutputBlock } from "../editor-bak/types/blocks";
import type { EditorBlock, PluginType } from "./register/types";

export type UserConfig = {
    uploadImage?: (file: File) => Promise<string>;
    enableSectionLinks?: boolean;
    block?: {
        [name: string]: {
            inlineToolbar?: boolean;
            defaultTag?: string;
        };
    };
};

export interface EditorProps {
    blocks?: EditorBlock[] | any[];
    defaultBlock?: string;
    plugins?: PluginType[] | any[];
    config?: UserConfig;
}

export type EditorReturn = [React.FC, () => Promise<OutputBlock[]>];

declare const Editor: (props?: EditorProps) => EditorReturn;

export default Editor;
