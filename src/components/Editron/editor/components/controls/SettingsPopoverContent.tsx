import { ImMoveDown, ImMoveUp } from "react-icons/im";
import { TbRowRemove } from "react-icons/tb";
import type { EditorBlock, SettingsStructure } from "../../register/types";
import Popover from "@theprojectsx/react-popover";

const SettingsPopoverContent = ({
    currentBlock,
    moreSettings,
    settingsOpened,
    handleHardUpdate,
    handleMoveUp,
    handleMoveDown,
    handleDeleteBlock,
}: {
    currentBlock: EditorBlock;
    moreSettings: Record<string, SettingsStructure[] | undefined>;
    settingsOpened: boolean;
    handleHardUpdate: (values: Partial<EditorBlock>) => void;
    handleMoveUp: () => void;
    handleMoveDown: () => void;
    handleDeleteBlock: () => void;
}) => {
    let BlockBasedSettings;

    if (currentBlock && moreSettings[currentBlock.type]) {
        BlockBasedSettings = (
            <>
                {moreSettings[currentBlock.type]?.map((setting) => {
                    if (setting.transform) {
                        return (
                            <button
                                key={setting.name}
                                className="articwriter__popover-button"
                                onClick={() => {
                                    const transformedData =
                                        setting.transform!(currentBlock);
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
                        );
                    }

                    if (setting.actions) {
                        return (
                            <Popover
                                key={setting.name}
                                gap={0}
                                position="left"
                                axis="top"
                                parentStyles={{ width: "100%" }}
                                viewOnHover
                                content={
                                    settingsOpened && (
                                        <div className="shadow-md border border-gray-200 dark:border-gray-700 rounded-md min-w-40 w-full bg-white dark:bg-gray-800 max-h-64 overflow-auto scrollbar-thin">
                                            {setting.actions.map((action) => (
                                                <button
                                                    key={action.name}
                                                    className="articwriter__popover-button"
                                                    onClick={() => {
                                                        const transformedData =
                                                            action.transform(
                                                                currentBlock
                                                            );
                                                        if (transformedData) {
                                                            handleHardUpdate(
                                                                transformedData
                                                            );
                                                        }
                                                    }}
                                                >
                                                    {action.icon ? (
                                                        <action.icon className="w-5" />
                                                    ) : (
                                                        <span className="w-5"></span>
                                                    )}
                                                    <span>{action.name}</span>
                                                </button>
                                            ))}
                                        </div>
                                    )
                                }
                            >
                                <button
                                    key={setting.name}
                                    className="articwriter__popover-button"
                                >
                                    {setting.icon ? (
                                        <setting.icon className="w-5" />
                                    ) : (
                                        <span className="w-5"></span>
                                    )}
                                    <span>{setting.name}</span>
                                </button>
                            </Popover>
                        );
                    }
                })}
            </>
        );
    }

    return (
        <div className="shadow-md border border-gray-200 dark:border-gray-700 rounded-md min-w-40 w-full bg-white dark:bg-gray-800 max-h-64 overflow-auto scrollbar-thin">
            {BlockBasedSettings && (
                <>
                    {BlockBasedSettings}

                    <div className="border-t-1 border-gray-300 pt-1 mt-1 mx-2"></div>
                </>
            )}
            <button className="articwriter__popover-button" onClick={() => handleMoveUp()}>
                <ImMoveUp className="w-5" />
                <span>Move Up</span>
            </button>

            <button className="articwriter__popover-button" onClick={() => handleMoveDown()}>
                <ImMoveDown className="w-5" />
                <span>Move Down</span>
            </button>

            <button
                className="articwriter__popover-button"
                onClick={() => handleDeleteBlock()}
            >
                <TbRowRemove className="w-5" />
                <span>Remove</span>
            </button>
        </div>
    );
};

export default SettingsPopoverContent;
