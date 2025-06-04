import type { EditorComponentProps } from "../components/EditorComponent";
import type { Block } from "./blocks";

export interface EditronProps {
    values?: Block[];
}

export type EditronReturn = [React.FC, () => any];

declare const Editron: (props: EditronProps) => EditronReturn;

export default Editron;
