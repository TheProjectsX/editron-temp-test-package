import useBlockForge from "./hooks/useBlockForge";
import BlockViewer from "./components/BlockViewer";
import type { EditronProps } from "./types";
import { useRef, useState } from "react";
import Controls from "./components/controls";

const Editron = ({ values = [] }: EditronProps) => {
    const [blocks, dispatch] = useBlockForge(values);
    const [focusedBlock, setFocusedBlock] = useState<HTMLElement | null>(null);

    const wrapperRef = useRef<HTMLDivElement | null>(null);

    return (
        <div data-name="editron-editor" ref={wrapperRef}>
            <div className="flex relative">
                <div data-name="editor-blocks-wrapper" className="flex-1">
                    {blocks.map((block) => (
                        <BlockViewer
                            key={block.id}
                            block={block}
                            dispatch={dispatch}
                            onMouseEnter={(e) =>
                                setFocusedBlock(e.target as HTMLElement)
                            }
                        />
                    ))}
                </div>

                <Controls
                    wrapper={wrapperRef.current}
                    focusedBlock={focusedBlock}
                />
            </div>
        </div>
    );
};

export default Editron;
