import useBlockForge from "../../hooks/useBlockForge";
import BlockViewer from "../BlockViewer";
import {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from "react";
import Controls from "../controls";
import type { Block } from "../../types/blocks";
import { ParagraphDemo } from "../../libs/demo";

// export type EditorComponentProps = {
//     blocks: Block[];
//     dispatch: React.Dispatch<BlockActions>;
// };

export type EditorComponentProps = {
    values?: Block[];
};

export type EditorComponentSaveHandle = {
    runSave: () => Block[];
};

const EditorComponent = forwardRef<
    EditorComponentSaveHandle,
    EditorComponentProps
>(({ values = [] }, ref) => {
    const [blocks, dispatch] = useBlockForge(
        values.length === 0 ? [ParagraphDemo] : values
    );

    const [controllerFocused, setControllerFocused] = useState<boolean>(false);

    const [focusedBlock, setFocusedBlock] = useState<{
        element: HTMLElement | null;
        block: Block | null;
    }>({ element: null, block: null });

    // If no block exist, add Paragraph as Default.
    // If It's initial and no focused block exist, add the 1st block as focused
    useEffect(() => {
        if (blocks.length === 0) {
            dispatch({ type: "INSERT", currentId: "", payload: ParagraphDemo });
        }

        // Set Initial focusedBlock
        if (!focusedBlock.block && blocks.length > 0) {
            setFocusedBlock((prev) => ({ ...prev, block: blocks[0] }));
        }
    }, [blocks]);

    // Run the runSave Function
    useImperativeHandle(ref, () => ({
        runSave: () => blocks,
    }));

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
});

// const EditorComponent = ({ values = [] }: EditorComponentProps) => {
//     const [blocks, dispatch] = useBlockForge(
//         values.length === 0 ? [ParagraphDemo] : values
//     );

//     const [controllerFocused, setControllerFocused] = useState<boolean>(false);

//     const [focusedBlock, setFocusedBlock] = useState<{
//         element: HTMLElement | null;
//         block: Block | null;
//     }>({ element: null, block: null });

//     useEffect(() => {
//         if (blocks.length === 0) {
//             dispatch({ type: "INSERT", currentId: "", payload: ParagraphDemo });
//         }

//         // Set Initial focusedBlock
//         if (!focusedBlock.block && blocks.length > 0) {
//             setFocusedBlock((prev) => ({ ...prev, block: blocks[0] }));
//         }
//     }, [blocks]);

//     const wrapperRef = useRef<HTMLDivElement | null>(null);

//     return (
//         <div data-name="editron-editor" ref={wrapperRef}>
//             <div className="grid grid-cols-[1fr_60px] gap-2 relative">
//                 <div
//                     data-name="editor-blocks-wrapper"
//                     className="space-y-2 overflow-hidden"
//                 >
//                     {blocks.map((block) => (
//                         <BlockViewer
//                             key={block.id}
//                             block={block}
//                             dispatch={dispatch}
//                             setFocusedBlock={setFocusedBlock}
//                         />
//                     ))}
//                 </div>

//                 <Controls
//                     wrapper={wrapperRef.current}
//                     focusedBlock={focusedBlock}
//                     dispatch={dispatch}
//                     controllerFocused={controllerFocused}
//                     setControllerFocused={setControllerFocused}
//                 />
//             </div>
//         </div>
//     );
// };

export default EditorComponent;
