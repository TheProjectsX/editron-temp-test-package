import useBlockForge from "./hooks/useBlockForge";
import BlockViewer from "./components/BlockViewer";
import type { EditronProps } from "./types";
import { useEffect, useRef, useState } from "react";
import Controls from "./components/controls";
import type { Block } from "./types/blocks";
import "./index.css";
import { ParagraphDemo } from "./libs/demo";

const Editron = ({ values, onChange = () => {} }: EditronProps) => {
    const [blocks, dispatch] = useBlockForge(
        (values ?? []).length === 0 ? [ParagraphDemo] : values
    );
    const [controllerFocused, setControllerFocused] = useState<boolean>(false);

    const [focusedBlock, setFocusedBlock] = useState<{
        element: HTMLElement | null;
        block: Block | null;
    }>({ element: null, block: null });

    useEffect(() => {
        // Insert a Paragraph if no Block Item exist
        if (blocks.length === 0) {
            dispatch({ type: "INSERT", currentId: "", payload: ParagraphDemo });
        }
        // Set Initial focusedBlock
        if (!focusedBlock.block && blocks.length > 0) {
            setFocusedBlock((prev) => ({ ...prev, block: blocks[0] }));
        }

        onChange(blocks);
    }, [blocks]);


    const wrapperRef = useRef<HTMLDivElement | null>(null);

    return (
        <div data-name="editron-editor" ref={wrapperRef}>
            <div className="grid grid-cols-[1fr_60px] gap-2 relative">
                <div data-name="editor-blocks-wrapper" className="space-y-2 overflow-hidden">
                    {blocks.map((block) => (
                        <BlockViewer
                            key={block.id}
                            block={block}
                            dispatch={dispatch}
                            setFocusedBlock={setFocusedBlock}
                        />
                    ))}
                </div>

                <Controls
                    wrapper={wrapperRef.current}
                    focusedBlock={focusedBlock}
                    dispatch={dispatch}
                    controllerFocused={controllerFocused}
                    setControllerFocused={setControllerFocused}
                />
            </div>
        </div>
    );
};

export default Editron;
