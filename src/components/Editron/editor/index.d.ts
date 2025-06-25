import type { OutputBlock } from "../editor-bak/types/blocks";
import type { AllTypes, EditorBlock, PluginType } from "./register/types";

export type UserConfig = {
    uploadImage?: (file: File) => Promise<string>;
};

export interface EditronProps {
    values?: EditorBlock[];
    defaultBlock?: AllTypes | (string & {});
    plugins?: PluginType[] | any[];
    config?: UserConfig;
}

export type EditronReturn = [React.FC, () => Promise<OutputBlock[]>];

declare const Editron: (props?: EditronProps) => EditronReturn;

export default Editron;
