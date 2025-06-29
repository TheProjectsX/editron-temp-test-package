import type { OutputBlock } from "../editor-bak/types/blocks";
import type { AllTypes, EditorBlock, PluginType } from "./register/types";

export type UserConfig = {
    uploadImage?: (file: File) => Promise<string>;
};

export interface EditorProps {
    blocks?: EditorBlock[] | any[];
    defaultBlock?: AllTypes | (string & {});
    plugins?: PluginType[] | any[];
    config?: UserConfig;
}

export type EditorReturn = [React.FC, () => Promise<OutputBlock[]>];

declare const Editor: (props?: EditorProps) => EditorReturn;

export default Editor;
