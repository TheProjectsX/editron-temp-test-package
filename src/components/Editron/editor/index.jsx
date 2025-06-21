import { createRef, useEffect } from "react";
import { register } from "./register";
import EditorComponent from "./components/EditorComponent";
import "./index.css";

const Editron = ({
    values = [],
    defaultBlock = "paragraph",
    plugins = [],
} = {}) => {
    const registers = register(plugins);

    const editorRef = createRef();
    const saveRunner = () => editorRef.current?.runSave() ?? [];

    const Component = () => (
        <EditorComponent
            registers={registers}
            values={values}
            ref={editorRef}
            defaultBlock={defaultBlock}
        />
    );

    return [Component, saveRunner];
};

export default Editron;
