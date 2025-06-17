import { ImMoveDown, ImMoveUp } from "react-icons/im";
import { TbRowRemove } from "react-icons/tb";
import type { EditorBlock, SettingsStructure } from "../../register/types";

const SettingsPopoverContent = ({
    currentBlock,
    moreSettings,
    handleHardUpdate,
    handleMoveUp,
    handleMoveDown,
    handleDeleteBlock,
}: {
    currentBlock: EditorBlock;
    moreSettings: Record<string, SettingsStructure[] | undefined>;
    handleHardUpdate: (values: Partial<EditorBlock>) => void;
    handleMoveUp: () => void;
    handleMoveDown: () => void;
    handleDeleteBlock: () => void;
}) => {
    let BlockBasedSettings;

    if (currentBlock && moreSettings[currentBlock.type]) {
        BlockBasedSettings = (
            <>
                {moreSettings[currentBlock.type]?.map((setting) => (
                    <button
                        key={setting.name}
                        className="popoverButton"
                        onClick={() => {
                            const transformedData =
                                setting.transform(currentBlock);
                            if (transformedData) {
                                handleHardUpdate(transformedData);
                            }
                        }}
                    >
                        {setting.icon ? (
                            <setting.icon className="w-5" />
                        ) : (
                            <span className="w-5"></span>
                        )}
                        <span>{setting.name}</span>
                    </button>
                ))}
            </>
        );
    }

    return (
        <div className="shadow-md border border-gray-200 rounded-lg min-w-40 w-full bg-white max-h-56 overflow-auto scrollbar-thin">
            {BlockBasedSettings && (
                <>
                    {BlockBasedSettings}

                    <div className="border-t-1 border-gray-300 pt-1 mt-1 mx-2"></div>
                </>
            )}
            <button className="popoverButton" onClick={() => handleMoveUp()}>
                <ImMoveUp className="w-5" />
                <span>Move Up</span>
            </button>

            <button className="popoverButton" onClick={() => handleMoveDown()}>
                <ImMoveDown className="w-5" />
                <span>Move Down</span>
            </button>

            <button
                className="popoverButton"
                onClick={() => handleDeleteBlock()}
            >
                <TbRowRemove className="w-5" />
                <span>Remove</span>
            </button>
        </div>
    );
};

export default SettingsPopoverContent;
