import {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from "react";

import useBlockForge from "../../hooks/useBlockForge";

import type { BlockStructure, EditorBlock } from "../../register/types";

import BlockViewer, { type BlockElement } from "../BlockViewer";
import Controls from "../controls";
import InlineToolbar from "../InlineToolbar";

import {
    genDemo,
    getFromRegister,
    handleArrowKeyDown,
    processExport,
    recordFromRegister,
} from "./utils";
import type { EditorComponentProps, EditorComponentSaveHandle } from "./types";

const EditorComponent = forwardRef<
    EditorComponentSaveHandle,
    EditorComponentProps
>(({ values = [], defaultBlock = "paragraph", registers, config }, ref) => {
    const defaultDemo = genDemo(
        (getFromRegister(registers, defaultBlock, "structure") ??
            getFromRegister(
                registers,
                "paragraph",
                "structure"
            )) as BlockStructure
    ) as EditorBlock;

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
        runSave: () =>
            processExport(
                blocks,
                config,
                recordFromRegister(registers, "processor")
            ),
    }));

    const wrapperRef = useRef<HTMLDivElement | null>(null);

    return (
        <div data-name="articwriter-editor" ref={wrapperRef}>
            <div className="relative">
                <div
                    data-name="editor-blocks-wrapper"
                    onKeyDown={handleArrowKeyDown}
                    className="dark:text-gray-100"
                >
                    {blocks.map((block) => {
                        const Component = getFromRegister(
                            registers,
                            block.type,
                            "component"
                        ) as BlockElement;
                        const config = getFromRegister(
                            registers,
                            block.type,
                            "config"
                        ) as BlockElement;

                        const metadata = {
                            config,
                            ...block,
                        };

                        return (
                            <BlockViewer
                                className="pr-[68px]"
                                key={block.id}
                                Component={Component}
                                metadata={metadata}
                                dispatch={dispatch}
                                controllerFocused={controllerFocused}
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

                <InlineToolbar
                    config={recordFromRegister(registers, "config")}
                />
            </div>
        </div>
    );
});

export default EditorComponent;
