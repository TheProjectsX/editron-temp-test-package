import { useEffect, useState } from "react";
import { GoGear } from "react-icons/go";
import { IoAddOutline } from "react-icons/io5";
import Popover from "@theprojectsx/react-popover";
import PopoverContent from "./PopoverContent";
import type { BlockActions } from "../../hooks/useBlockForge";
import type { BlockStructure } from "../../libs/BlockStructures";
import type { Block } from "../../types/blocks";

type ControlsProps = {
    wrapper: HTMLDivElement | null;
    focusedBlock: {
        element: HTMLElement;
        block: Block;
    } | null;
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

    const [positions, setPositions] = useState<{ top: number }>({ top: 0 });

    useEffect(() => {
        if (!wrapper || !focusedBlock?.element || newItemOpened) return;

        const wrapperRect = wrapper.getBoundingClientRect();
        const blockRect = focusedBlock.element.getBoundingClientRect();

        setPositions({
            top: blockRect.top - wrapperRect.top,
        });
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
            currentId: focusedBlock?.block.id!,
            payload: payload as Omit<Block, "id">,
        });
    };

    useEffect(() => {
        setControllerFocused(newItemOpened);
    }, [newItemOpened]);


    return (
        <div
            data-name="block-controls"
            className="absolute right-0 flex items-center"
            style={positions}
        >
            <button className="p-1.5 rounded-lg text-lg text-gray-900 hover:bg-gray-100 cursor-pointer">
                <GoGear />
            </button>
            <Popover
                gap={3}
                position="left"
                axis="top"
                triggerType="manual"
                contentVisible={newItemOpened}
                onWrapperBlur={() => setNewItemOpened(false)}
                content={
                    <PopoverContent
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

export default Controls;
