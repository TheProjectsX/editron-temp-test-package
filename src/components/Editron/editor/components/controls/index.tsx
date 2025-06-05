import React, { useEffect, useState } from "react";
import { GoGear } from "react-icons/go";
import { IoAddOutline } from "react-icons/io5";
import Popover from "@theprojectsx/react-popover";
import AddButtonPopoverContent from "./AddButtonPopoverContent";
import type { BlockActions } from "../../hooks/useBlockForge";
import type { BlockStructure } from "../../libs/BlockStructures";
import type { Block } from "../../types/blocks";
import SettingsPopoverContent from "./SettingsPopoverContent";


type ControlsProps = {
    wrapper: HTMLDivElement | null;
    focusedBlock: {
        element: HTMLElement | null;
        block: Block | null;
    };
    controllerFocused: boolean;
    setControllerFocused: React.Dispatch<React.SetStateAction<boolean>>;
    dispatch: React.Dispatch<BlockActions>;
};

const Controls = ({
    wrapper,
    focusedBlock,
    dispatch,
    setControllerFocused,
}: ControlsProps) => {
    const [newItemOpened, setNewItemOpened] = useState(false);
    const [settingsOpened, setSettingsOpened] = useState(false);

    const [positions, setPositions] = useState<{ top: number }>({ top: 0 });

    useEffect(() => {
        if (!wrapper || !focusedBlock?.element || newItemOpened) return;

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
        const payload = {
            tag: structure.tags,
            type: structure.type,
            data: structure.data,
        };

        dispatch({
            type: "INSERT",
            currentId: focusedBlock.block?.id!,
            payload: payload as Omit<Block, "id">,
        });

        setNewItemOpened(false);
    };

    // Handle Hard Update (Hard update, not only `data` property, but also other properties)
    const handleHardUpdate = (items: Partial<Block>) => {
        const payload = {
            ...focusedBlock,
            ...items,
        } as Block;

        dispatch({ type: "UPDATE", payload });
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
    }, [newItemOpened]);

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
                        currentBlock={focusedBlock.block?.type}
                        handleHardUpdate={handleHardUpdate}
                        handleMoveUp={handleMoveUp}
                        handleMoveDown={handleMoveDown}
                        handleDeleteBlock={handleDeleteBlock}
                    />
                }
            >
                <button
                    className="p-1.5 rounded-lg text-lg text-gray-900 hover:bg-gray-100 cursor-pointer"
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
                        newItemOpened={newItemOpened}
                        handleAddNewBlock={handleAddNewBlock}
                    />
                }
            >
                <button
                    className="p-1.5 rounded-lg text-lg text-gray-900 hover:bg-gray-100 cursor-pointer"
                    onClick={() => setNewItemOpened((prev) => !prev)}
                >
                    <IoAddOutline />
                </button>
            </Popover>
        </div>
    );
};

export default React.memo(Controls);
