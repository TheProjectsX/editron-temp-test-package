import type { EditorComponentProps } from "../components/EditorComponent";
import type { AllBlockType, EditorBlock } from "./blocks";

export interface EditronProps {
    values?: EditorBlock[] | any[];
    defaultBlock?: AllBlockType;
}


export type EditronReturn = [React.FC, () => EditorBlock[]];

declare const Editron: (props: EditronProps) => EditronReturn;

export default Editron;
