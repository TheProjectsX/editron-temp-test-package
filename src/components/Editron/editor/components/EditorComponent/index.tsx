import { type BlockActions } from "../../hooks/useBlockForge";
import BlockViewer from "../BlockViewer";
import { useEffect, useRef, useState } from "react";
import Controls from "../controls";
import type { Block } from "../../types/blocks";

export type EditorComponentProps = {
    blocks: Block[];
    dispatch: React.Dispatch<BlockActions>;
};

const EditorComponent = ({ blocks, dispatch }: EditorComponentProps) => {
    const [controllerFocused, setControllerFocused] = useState<boolean>(false);

    const [focusedBlock, setFocusedBlock] = useState<{
        element: HTMLElement | null;
        block: Block | null;
    }>({ element: null, block: null });

    useEffect(() => {
        // Set Initial focusedBlock
        if (!focusedBlock.block && blocks.length > 0) {
            setFocusedBlock((prev) => ({ ...prev, block: blocks[0] }));
        }
    }, [blocks]);

    const wrapperRef = useRef<HTMLDivElement | null>(null);

    return (
        <div data-name="editron-editor" ref={wrapperRef}>
            <div className="grid grid-cols-[1fr_60px] gap-2 relative">
                <div
                    data-name="editor-blocks-wrapper"
                    className="space-y-2 overflow-hidden"
                >
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

export default EditorComponent;
