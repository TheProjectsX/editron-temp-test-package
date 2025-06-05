import EditorComponent, {
    type EditorComponentSaveHandle,
} from "./components/EditorComponent";
import type { EditronProps, EditronReturn } from "./types";
import "./index.css";
import { createRef } from "react";

const Editron = ({ values = [] }: EditronProps = {}): EditronReturn => {
    const editorRef = createRef<EditorComponentSaveHandle>();

    const saveRunner = () => editorRef.current?.runSave() ?? [];

    return [
        () => <EditorComponent values={values} ref={editorRef} />,
        saveRunner,
    ];
};

export default Editron;
