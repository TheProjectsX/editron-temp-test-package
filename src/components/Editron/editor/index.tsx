import EditorComponent from "./components/EditorComponent";
import useBlockForge from "./hooks/useBlockForge";
import { ParagraphDemo } from "./libs/demo";
import type { EditronProps, EditronReturn } from "./types";
import "./index.css";
import { useEffect } from "react";

const Editron = ({ values = [] }: EditronProps = {}): EditronReturn => {
    const [blocks, dispatch] = useBlockForge(
        (values ?? []).length === 0 ? [ParagraphDemo] : values
    );

    useEffect(() => {
        // Insert a Paragraph if no Block Item exist
        if (blocks.length === 0) {
            dispatch({ type: "INSERT", currentId: "", payload: ParagraphDemo });
        }
    }, [blocks]);

    return [
        () => <EditorComponent blocks={blocks} dispatch={dispatch} />,
        () => blocks,
    ];
};

export default Editron;
