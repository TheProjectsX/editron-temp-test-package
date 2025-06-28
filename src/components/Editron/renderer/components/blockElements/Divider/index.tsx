import type { DividerProps } from "./types";

const Divider = ({ className = "", style, data }: DividerProps) => {
    return (
        <div
            className={`h-8 flex items-center cursor-pointer ${className}`}
            style={style ?? {}}
        >
            <span
                className="border-t border-gray-600 flex-1"
                style={{
                    borderStyle: data.type ?? "solid",
                }}
            ></span>
            {data.text && (
                <>
                    <span className="text-sm px-1.5 text-gray-600 font-medium outline-none cursor-text">
                        {data.text}
                    </span>
                    <span
                        className="border-t border-gray-600 flex-1"
                        style={{
                            borderStyle: data.type ?? "solid",
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
