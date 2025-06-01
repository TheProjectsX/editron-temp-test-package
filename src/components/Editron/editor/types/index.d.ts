import type { Block } from "./blocks";

export interface EditronProps {
    values?: Block[] | any;
}

declare const Editron: (props: EditronProps) => React.ReactElement;
export default Editron;
