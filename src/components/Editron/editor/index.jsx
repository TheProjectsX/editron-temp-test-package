import { createRef } from "react";
import { register } from "./register";
import EditorComponent from "./components/EditorComponent";
import "../styles/index.css"
import "../styles/editor.css";

const Editor = ({
    initials = [],
    defaultBlock = "paragraph",
    plugins = [],
    config = {},
} = {}) => {
    const registers = register(plugins, config);

    const editorRef = createRef();
    const saveRunner = () => editorRef.current?.runSave() ?? [];

    const Component = () => (
        <EditorComponent
            registers={registers}
            values={Array.isArray(initials) ? initials : initials.blocks}
            ref={editorRef}
            defaultBlock={defaultBlock}
            config={config}
        />
    );

    return [Component, saveRunner];
};

export default Editor;
