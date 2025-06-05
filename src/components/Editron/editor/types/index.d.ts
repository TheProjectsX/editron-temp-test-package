import type { EditorComponentProps } from "../components/EditorComponent";
import type { AllBlockType, Block } from "./blocks";

export interface EditronProps {
    values?: Block[] | any[];
    defaultBlock?: AllBlockType;
}


export type EditronReturn = [React.FC, () => Block[]];

declare const Editron: (props: EditronProps) => EditronReturn;

export default Editron;
