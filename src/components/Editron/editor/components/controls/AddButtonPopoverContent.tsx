import Popover from "@theprojectsx/react-popover";
import type { BlockStructure } from "../../register/types";

const AddButtonPopoverContent = ({
    structures,
    newItemOpened,
    handleAddNewBlock,
}: {
    structures: BlockStructure[];
    newItemOpened: boolean;
    handleAddNewBlock: (structure: BlockStructure) => void;
}) => {
    return (
        <div className="shadow-md border border-gray-200 dark:border-gray-700 rounded-md min-w-40 w-full bg-white dark:bg-gray-800 max-h-64 overflow-auto scrollbar-thin">
            {structures.map((structure) => {
                if (typeof structure.tags === "string")
                    return (
                        <button
                            className="editron__popover-button"
                            key={structure.type}
                            onClick={() =>
                                handleAddNewBlock(structure as BlockStructure)
                            }
                        >
                            <structure.icon className="w-5" />
                            <span>{structure.name}</span>
                        </button>
                    );

                return (
                    <Popover
                        key={structure.type}
                        gap={0}
                        position="left"
                        axis="top"
                        parentStyles={{ width: "100%" }}
                        viewOnHover
                        content={
                            newItemOpened && (
                                <div className="shadow-md border border-gray-200 dark:border-gray-700 rounded-lg min-w-40 w-full bg-white dark:bg-gray-800 max-h-56 overflow-auto scrollbar-thin">
                                    {structure.tags.map((sub) => (
                                        <button
                                            className="editron__popover-button"
                                            key={sub.tag}
                                            onClick={() =>
                                                handleAddNewBlock({
                                                    ...structure,
                                                    tags: sub.tag,
                                                } as BlockStructure)
                                            }
                                        >
                                            <sub.icon className="w-4 text-base" />
                                            <span>{sub.name}</span>
                                        </button>
                                    ))}
                                </div>
                            )
                        }
                    >
                        <button className="editron__popover-button">
                            <structure.icon className="w-5" />
                            <span>{structure.name}</span>
                        </button>
                    </Popover>
                );
            })}
        </div>
    );
};

export default AddButtonPopoverContent;
