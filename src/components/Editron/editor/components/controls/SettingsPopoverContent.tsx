import { ImMoveDown, ImMoveUp } from "react-icons/im";
import { TbRowRemove } from "react-icons/tb";
import type { EditorBlock } from "../../types/blocks";
import Popover from "@theprojectsx/react-popover";

const SettingsPopoverContent = ({
    currentBlock,
    handleMoveUp,
    handleMoveDown,
    handleDeleteBlock,
}: {
    currentBlock: string | undefined;
    handleHardUpdate: (items: Partial<EditorBlock>) => void;
    handleMoveUp: () => void;
    handleMoveDown: () => void;
    handleDeleteBlock: () => void;
}) => {
    let BlockBasedSettings = <></>;

    if (currentBlock === "paragraph") {
        BlockBasedSettings = (
            <>
                <button className="popoverButton">Convert to Heading</button>
            </>
        );
    } else if (currentBlock === "heading") {
    } else if (currentBlock === "list") {
        BlockBasedSettings = (
            <>
                <button className="popoverButton">Convert to Ordered</button>
                <button className="popoverButton">Convert to Unordered</button>
            </>
        );
    } else if (currentBlock === "divider") {
        BlockBasedSettings = (
            <Popover
                gap={0}
                position="left"
                axis="top"
                parentStyles={{ width: "100%" }}
                viewOnHover
                content={<></>}
            >
                <button className="popoverButton">
                    Style
                </button>
            </Popover>
        );
    }

    return (
        <div className="shadow-md border border-gray-200 rounded-lg min-w-40 w-full bg-white max-h-56 overflow-auto scrollbar-thin">
            {/* {BlockBasedSettings} */}
            <button className="popoverButton" onClick={() => handleMoveUp()}>
                <ImMoveUp className="w-5" />
                <span>Move Up</span>
            </button>

            <button className="popoverButton" onClick={() => handleMoveDown()}>
                <ImMoveDown className="w-5" />
                <span>Move Down</span>
            </button>

            <button className="popoverButton" onClick={() => handleDeleteBlock()}>
                <TbRowRemove className="w-5" />
                <span>Remove</span>
            </button>
        </div>
    );
};

export default SettingsPopoverContent;
