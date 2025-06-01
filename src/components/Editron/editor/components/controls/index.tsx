import { useEffect, useState } from "react";
import { GoGear } from "react-icons/go";
import { IoAddOutline } from "react-icons/io5";

type ControlsProps = {
    wrapper: HTMLDivElement | null;
    focusedBlock: HTMLElement | null;
};

const Controls = ({ wrapper, focusedBlock }: ControlsProps) => {
    const [positions, setPositions] = useState<{ top: number }>({ top: 0 });

    useEffect(() => {
        if (!wrapper || !focusedBlock) return;

        const wrapperRect = wrapper.getBoundingClientRect();
        const blockRect = focusedBlock.getBoundingClientRect();

        setPositions({
            top: blockRect.top - wrapperRect.top,
        });
    }, [wrapper, focusedBlock]);

    return (
        <div
            data-name="block-controls"
            className="absolute right-0"
            style={positions}
        >
            <button className="p-1.5 rounded-lg text-lg text-gray-900 hover:bg-gray-100 cursor-pointer">
                <GoGear />
            </button>
            <button className="p-1.5 rounded-lg text-lg text-gray-900 hover:bg-gray-100 cursor-pointer">
                <IoAddOutline />
            </button>
        </div>
    );
};

export default Controls;
