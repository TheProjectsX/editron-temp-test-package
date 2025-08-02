import { createRef } from "react";
import { register } from "./register";
import EditorComponent from "./components/EditorComponent";
import "../styles/index.css";

const Editor = ({
    blocks = [],
    defaultBlock = "paragraph",
    plugins = [],
    config = {},
} = {}) => {
    const registers = register(plugins);

    const editorRef = createRef();
    const saveRunner = () => editorRef.current?.runSave() ?? [];

    const Component = () => (
        <EditorComponent
            registers={registers}
            values={blocks}
            ref={editorRef}
            defaultBlock={defaultBlock}
            config={config}
        />
    );

    return [Component, saveRunner];
};

export default Editor;
