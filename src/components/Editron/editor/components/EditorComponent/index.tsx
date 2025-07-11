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
    OutputDataBlock,
} from "../../register/types";
import type { RegisterReturn } from "../../register";
import InlineToolbar from "../InlineToolbar";
import type { UserConfig } from "../..";
import { processExport } from "./processor";

export type EditorComponentProps = {
    values?: EditorBlock[];
    defaultBlock?: AllTypes;
    registers: RegisterReturn[];
    config?: UserConfig;
};

export type EditorComponentSaveHandle = {
    runSave: () => Promise<OutputDataBlock[]>;
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

const recordFromRegister = <K extends keyof RegisterReturn>(
    registers: RegisterReturn[],
    property: K
): Record<string, RegisterReturn[K]> => {
    return registers.reduce<Record<string, RegisterReturn[K]>>((acc, item) => {
        acc[item.structure.type] = item[property];
        return acc;
    }, {} as Record<string, RegisterReturn[K]>);
};

const setCaretToEnd = (el: HTMLElement) => {
    const range = document.createRange();
    const sel = window.getSelection();
    range.selectNodeContents(el);
    range.collapse(false);
    sel?.removeAllRanges();
    sel?.addRange(range);
};

const EditorComponent = forwardRef<
    EditorComponentSaveHandle,
    EditorComponentProps
>(({ values = [], defaultBlock = "paragraph", registers, config }, ref) => {
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
        runSave: () =>
            processExport(
                blocks,
                config,
                recordFromRegister(registers, "processor")
            ),
    }));

    const wrapperRef = useRef<HTMLDivElement | null>(null);

    return (
        <div data-name="editron-editor" ref={wrapperRef}>
            <InlineToolbar focusedBlock={focusedBlock} />
            <div className="grid grid-cols-[1fr_60px] gap-2 relative">
                <div
                    data-name="editor-blocks-wrapper"
                    className="space-y-5"
                    onKeyDown={(e) => {
                        const key = e.key;
                        if (key !== "ArrowUp" && key !== "ArrowDown") return;

                        const editables = Array.from(
                            e.currentTarget.querySelectorAll(
                                '[contenteditable="true"]'
                            )
                        );
                        const current = e.target as HTMLElement;
                        const index = editables.indexOf(current);
                        if (index === -1) return;

                        e.preventDefault();
                        const next =
                            key === "ArrowDown"
                                ? editables[index + 1]
                                : editables[index - 1];

                        if (next) {
                            (next as HTMLElement).focus();
                            setTimeout(
                                () => setCaretToEnd(next as HTMLElement),
                                0
                            );
                        }
                    }}
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
            </div>
        </div>
    );
});

export default EditorComponent;
