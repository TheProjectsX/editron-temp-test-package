import type { AllTypes, EditorBlock, PluginType } from "./register/types";

export interface EditronProps {
    values?: EditorBlock[];
    defaultBlock?: AllTypes | (string & {});
    plugins?: PluginType[] | any[];
}

export type EditronReturn = [React.FC, () => any[]];

declare const Editron: (props?: EditronProps) => EditronReturn;

export default Editron;
