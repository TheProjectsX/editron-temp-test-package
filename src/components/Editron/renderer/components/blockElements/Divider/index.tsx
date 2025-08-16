import type { DividerProps } from "./types";

const Divider = ({ className = "", style, metadata }: DividerProps) => {
    return (
        <div
            className={`mb-4 flex items-center cursor-pointer ${className}`}
            style={style ?? {}}
        >
            <span
                className="border-t border-gray-400 dark:border-gray-500 flex-1"
                style={{
                    borderStyle: metadata.data.type ?? "solid",
                }}
            ></span>
            {metadata.data.text && (
                <>
                    <span className="text-sm px-1.5 text-gray-500 dark:text-gray-200 font-medium outline-none cursor-text">
                        {metadata.data.text}
                    </span>
                    <span
                        className="border-t border-gray-400 dark:border-gray-500 flex-1"
                        style={{
                            borderStyle: metadata.data.type ?? "solid",
                        }}
                    ></span>
                </>
            )}
        </div>
    );
};

export default {
    type: "divider",
    component: Divider,
};
