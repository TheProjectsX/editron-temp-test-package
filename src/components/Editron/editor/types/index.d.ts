import type { Block } from "./blocks";

export interface EditronProps {
    values?: Block[] | any[];
    onChange: (blocks: Block[]) => void;
}

declare const Editron: (props: EditronProps) => React.ReactElement;
export default Editron;
