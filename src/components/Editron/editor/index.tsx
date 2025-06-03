import useBlockForge from "./hooks/useBlockForge";
import BlockViewer from "./components/BlockViewer";
import type { EditronProps } from "./types";
import { useRef, useState } from "react";
import Controls from "./components/controls";
import type { Block } from "./types/blocks";
import "./index.css";
import { ParagraphDemo } from "./libs/demo";

const Editron = ({ values }: EditronProps) => {
    const [blocks, dispatch] = useBlockForge(
        (values ?? []).length === 0 ? [ParagraphDemo] : values
    );
    const [controllerFocused, setControllerFocused] = useState<boolean>(false);

    const [focusedBlock, setFocusedBlock] = useState<{
        element: HTMLElement;
        block: Block;
    } | null>(null);

    const wrapperRef = useRef<HTMLDivElement | null>(null);

    return (
        <div data-name="editron-editor" ref={wrapperRef}>
            <div className="flex relative">
                <div
                    data-name="editor-blocks-wrapper"
                    className="flex-1 space-y-1"
                >
                    {blocks.map((block) => (
                        <BlockViewer
                            key={block.id}
                            block={block}
                            dispatch={dispatch}
                            onMouseEnter={(e) => {
                                setFocusedBlock({
                                    element: e.target as HTMLElement,
                                    block,
                                });
                            }}
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
