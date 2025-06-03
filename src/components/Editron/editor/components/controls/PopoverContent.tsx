import Popover from "@theprojectsx/react-popover";
import BlockStructures, {
    type BlockStructure,
} from "../../libs/BlockStructures";

const PopoverContent = ({
    newItemOpened,
    handleAddNewBlock,
}: {
    newItemOpened: boolean;
    handleAddNewBlock: (structure: BlockStructure) => void;
}) => {
    return (
        <div className="shadow-md border border-gray-200 rounded-lg min-w-40 w-full bg-white max-h-56 overflow-auto scrollbar-thin">
            {BlockStructures.map((structure) => {
                if (typeof structure.tags === "string")
                    return (
                        <button
                            key={structure.type}
                            className="w-full py-2.5 px-4 text-gray-600 font-medium hover:bg-gray-100 flex items-center gap-1.5 cursor-pointer"
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
                                <div className="shadow-md border border-gray-200 rounded-lg min-w-40 w-full bg-white max-h-56 overflow-auto scrollbar-thin">
                                    {structure.tags.map((sub) => (
                                        <button
                                            key={sub.tag}
                                            className="w-full py-2.5 px-4 text-gray-600 text-sm font-medium hover:bg-gray-100 flex items-center gap-1.5 cursor-pointer"
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
                        <button className="w-full py-2.5 px-4 text-gray-600 font-medium hover:bg-gray-100 flex items-center gap-1.5 cursor-pointer">
                            <structure.icon className="w-5" />
                            <span>{structure.name}</span>
                        </button>
                    </Popover>
                );
            })}
        </div>
    );
};

export default PopoverContent;
