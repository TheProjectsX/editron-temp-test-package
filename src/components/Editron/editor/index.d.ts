import type { AllTypes, EditorBlock, PluginType } from "./register/types";

export type UserConfig = {
    uploadImage?: (file: File) => string;
};

export interface EditronProps {
    values?: EditorBlock[];
    defaultBlock?: AllTypes | (string & {});
    plugins?: PluginType[] | any[];
    config?: UserConfig;
}

export type EditronReturn = [React.FC, () => any[]];

declare const Editron: (props?: EditronProps) => EditronReturn;

export default Editron;
