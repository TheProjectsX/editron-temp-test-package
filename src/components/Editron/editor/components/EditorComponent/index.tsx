import useBlockForge from "../../hooks/useBlockForge";
import BlockViewer, { type BlockElement } from "../BlockViewer";
import {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from "react";
import Controls from "../controls";
import type {
    AllTypes,
    BlockStructure,
    EditorBlock,
} from "../../register/types";
import type { RegisterReturn } from "../../register";
import InlineToolbar from "../InlineToolbar";
import type { UserConfig } from "../..";

export type EditorComponentProps = {
    values?: EditorBlock[];
    defaultBlock?: AllTypes;
    registers: RegisterReturn[];
    config?: UserConfig;
};

export type EditorComponentSaveHandle = {
    runSave: () => EditorBlock[];
};

// Util func to get registered value
const getFromRegister = (
    registers: RegisterReturn[],
    type: AllTypes,
    valueOf: "component" | "structure" | "demo"
) => {
    const target = registers.find(
        (register) => register.structure.type === type
    );

    if (!target) return null;

    return target[valueOf];
};

const EditorComponent = forwardRef<
    EditorComponentSaveHandle,
    EditorComponentProps
>(({ values = [], defaultBlock = "paragraph", registers }, ref) => {
    const defaultDemo = (getFromRegister(registers, defaultBlock, "demo") ??
        getFromRegister(registers, "paragraph", "demo")) as EditorBlock;

    const [blocks, dispatch] = useBlockForge(
        values.length === 0 ? [defaultDemo] : values
    );

    const [controllerFocused, setControllerFocused] = useState<boolean>(false);

    const [focusedBlock, setFocusedBlock] = useState<{
        element: HTMLElement | null;
        block: EditorBlock | null;
    }>({ element: null, block: null });

    // If no block exist, add Paragraph as Default.
    // If It's initial and no focused block exist, add the 1st block as focused
    useEffect(() => {
        if (blocks.length === 0) {
            dispatch({ type: "INSERT", currentId: "", payload: defaultDemo! });
        }

        // Set Initial focusedBlock
        if (!focusedBlock.block && blocks.length > 0) {
            setFocusedBlock((prev) => ({ ...prev, block: blocks[0] }));
        } else {
            // Update the current focusedBlock Data
            setFocusedBlock((prev) => ({
                ...prev,
                block:
                    blocks.find((block) => block.id === prev.block?.id) || null,
            }));
        }
    }, [blocks]);

    // Run the runSave Function
    useImperativeHandle(ref, () => ({
        runSave: () => blocks,
    }));

    const wrapperRef = useRef<HTMLDivElement | null>(null);

    return (
        <div data-name="editron-editor" ref={wrapperRef}>
            <InlineToolbar focusedBlock={focusedBlock} />
            <div className="grid grid-cols-[1fr_60px] gap-2 relative">
                <div
                    data-name="editor-blocks-wrapper"
                    className="space-y-3 overflow-hidden"
                >
                    {blocks.map((block) => {
                        const currentBlockComponent = getFromRegister(
                            registers,
                            block.type,
                            "component"
                        ) as BlockElement;

                        return (
                            <BlockViewer
                                key={block.id}
                                Component={currentBlockComponent}
                                metadata={block}
                                dispatch={dispatch}
                                setFocusedBlock={setFocusedBlock}
                            />
                        );
                    })}
                </div>

                <Controls
                    wrapper={wrapperRef.current}
                    focusedBlock={focusedBlock}
                    dispatch={dispatch}
                    structures={registers.map(
                        (register) => register.structure as BlockStructure
                    )}
                    settings={Object.fromEntries(
                        registers.map((register) => [
                            register.structure.type,
                            register.settings,
                        ])
                    )}
                    controllerFocused={controllerFocused}
                    setControllerFocused={setControllerFocused}
                />
            </div>
        </div>
    );
});

export default EditorComponent;
