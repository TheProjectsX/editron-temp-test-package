import { ImMoveDown, ImMoveUp } from "react-icons/im";
import { TbRowRemove } from "react-icons/tb";

const SettingsPopoverContent = ({
    handleMoveUp,
    handleMoveDown,
    handleDeleteBlock,
}: {
    handleMoveUp: () => void;
    handleMoveDown: () => void;
    handleDeleteBlock: () => void;
}) => {
    return (
        <div className="shadow-md border border-gray-200 rounded-lg min-w-40 w-full bg-white max-h-56 overflow-auto scrollbar-thin">
            <button
                className="w-full py-2.5 px-4 text-gray-600 font-medium hover:bg-gray-100 flex items-center gap-1.5 cursor-pointer"
                onClick={() => handleMoveUp()}
            >
                <ImMoveUp className="w-5" />
                <span>Move Up</span>
            </button>

            <button
                className="w-full py-2.5 px-4 text-gray-600 font-medium hover:bg-gray-100 flex items-center gap-1.5 cursor-pointer"
                onClick={() => handleMoveDown()}
            >
                <ImMoveDown className="w-5" />
                <span>Move Down</span>
            </button>

            <button
                className="w-full py-2.5 px-4 text-gray-600 font-medium hover:bg-gray-100 flex items-center gap-1.5 cursor-pointer"
                onClick={() => handleDeleteBlock()}
            >
                <TbRowRemove className="w-5" />
                <span>Remove</span>
            </button>
        </div>
    );
};

export default SettingsPopoverContent;
