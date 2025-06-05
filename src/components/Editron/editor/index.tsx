import EditorComponent, {
    type EditorComponentSaveHandle,
} from "./components/EditorComponent";
import type { EditronProps, EditronReturn } from "./types";
import "./index.css";
import { createRef } from "react";

const Editron = ({
    values = [],
    defaultBlock = "paragraph",
}: EditronProps = {}): EditronReturn => {
    const editorRef = createRef<EditorComponentSaveHandle>();

    const saveRunner = () => editorRef.current?.runSave() ?? [];

    const Component = () => (
        <EditorComponent
            values={values}
            ref={editorRef}
            defaultBlock={defaultBlock}
        />
    );

    return [Component, saveRunner];
};

export default Editron;
