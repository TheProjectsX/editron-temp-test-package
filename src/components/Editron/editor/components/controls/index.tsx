import React, { useEffect, useState } from "react";
import { GoGear } from "react-icons/go";
import { IoAddOutline } from "react-icons/io5";
import Popover from "@theprojectsx/react-popover";
import AddButtonPopoverContent from "./AddButtonPopoverContent";
import type { BlockActions } from "../../hooks/useBlockForge";
import type {
    BlockStructure,
    EditorBlock,
    SettingsStructure,
} from "../../register/types";
import SettingsPopoverContent from "./SettingsPopoverContent";

type ControlsProps = {
    wrapper: HTMLDivElement | null;
    focusedBlock: {
        element: HTMLElement | null;
        block: EditorBlock | null;
    };
    structures: BlockStructure[];
    settings: Record<string, SettingsStructure[] | undefined>;
    controllerFocused: boolean;
    setControllerFocused: React.Dispatch<React.SetStateAction<boolean>>;
    dispatch: React.Dispatch<BlockActions>;
};

const Controls = ({
    wrapper,
    focusedBlock,
    structures,
    settings,
    dispatch,
    setControllerFocused,
}: ControlsProps) => {
    const [newItemOpened, setNewItemOpened] = useState(false);
    const [settingsOpened, setSettingsOpened] = useState(false);

    const [positions, setPositions] = useState<{ top: number }>({ top: 0 });

    // Set position of the Controller
    useEffect(() => {
        if (
            !wrapper ||
            !focusedBlock?.element ||
            newItemOpened ||
            settingsOpened
        )
            return;

        const wrapperRect = wrapper.getBoundingClientRect();
        const blockRect = focusedBlock.element.getBoundingClientRect();

        setPositions((prev) =>
            prev.top === blockRect.top - wrapperRect.top
                ? prev
                : {
                      top: blockRect.top - wrapperRect.top,
                  }
        );
    }, [wrapper, focusedBlock]);

    // Handle Add new Block
    const handleAddNewBlock = (structure: BlockStructure) => {
        const currentFocusedElement = focusedBlock.element;

        const payload = {
            tag: structure.tags,
            type: structure.type,
            data: structure.data,
        };

        dispatch({
            type: "INSERT",
            currentId: focusedBlock.block?.id!,
            payload: payload as Omit<EditorBlock, "id">,
        });

        setNewItemOpened(false);

        setTimeout(() => {
            const newBlock = currentFocusedElement?.nextElementSibling;
            (
                newBlock?.querySelector(
                    `[contenteditable]`
                ) as HTMLElement | null
            )?.focus();
        }, 0);
    };

    // Handle Hard Update (Hard update, not only `data` property, but also other properties)
    const handleHardUpdate = (values: Partial<EditorBlock>) => {
        const payload = {
            ...values,
        };

        dispatch({
            type: "UPDATE",
            id: focusedBlock.block?.id!,
            payload,
        });

        setSettingsOpened(false);
    };

    // Handle Delete Block
    const handleDeleteBlock = () => {
        dispatch({ type: "DELETE", id: focusedBlock.block?.id! });
        setSettingsOpened(false);
    };

    // Handle Move Block Up
    const handleMoveUp = () => {
        dispatch({ type: "MOVE_UP", id: focusedBlock.block?.id! });
        setSettingsOpened(false);
    };

    // Handle Move Block Down
    const handleMoveDown = () => {
        dispatch({ type: "MOVE_DOWN", id: focusedBlock.block?.id! });
        setSettingsOpened(false);
    };

    useEffect(() => {
        setControllerFocused(newItemOpened || settingsOpened);
    }, [newItemOpened, settingsOpened]);

    return (
        <div
            data-name="block-controls"
            className="absolute right-0 flex items-center"
            style={positions}
        >
            <Popover
                gap={3}
                position="left"
                axis="top"
                triggerType="manual"
                contentVisible={settingsOpened}
                onWrapperBlur={() => setSettingsOpened(false)}
                content={
                    <SettingsPopoverContent
                        currentBlock={focusedBlock.block!}
                        moreSettings={settings}
                        settingsOpened={settingsOpened}
                        handleHardUpdate={handleHardUpdate}
                        handleMoveUp={handleMoveUp}
                        handleMoveDown={handleMoveDown}
                        handleDeleteBlock={handleDeleteBlock}
                    />
                }
            >
                <button
                    className="p-1.5 rounded-lg text-lg text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700 cursor-pointer"
                    onClick={() => setSettingsOpened((prev) => !prev)}
                >
                    <GoGear />
                </button>
            </Popover>
            <Popover
                gap={3}
                position="left"
                axis="top"
                triggerType="manual"
                contentVisible={newItemOpened}
                onWrapperBlur={() => setNewItemOpened(false)}
                content={
                    <AddButtonPopoverContent
                        structures={structures}
                        newItemOpened={newItemOpened}
                        handleAddNewBlock={handleAddNewBlock}
                    />
                }
            >
                <button
                    className="p-1.5 rounded-lg text-lg text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700 cursor-pointer"
                    onClick={() => setNewItemOpened((prev) => !prev)}
                >
                    <IoAddOutline />
                </button>
            </Popover>
        </div>
    );
};

export default React.memo(Controls);
