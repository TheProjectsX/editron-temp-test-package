import { useEffect, useState } from "react";
import type { DividerProps } from "./types";
import { settings, structure } from "./meta";

const Divider = ({ data, onUpdate }: DividerProps) => {
    const [dividerText, setDividerText] = useState<string | undefined>(
        data.text
    );

    useEffect(() => {
        if (dividerText === "") return;

        onUpdate(
            dividerText
                ? { ...data, text: dividerText }
                : (({ text, ...rest }) => rest)(data)
        );
    }, [dividerText]);

    return (
        <div
            className="h-6 mb-2 flex items-center cursor-pointer"
            onClick={(e) => {
                if (e.target !== e.currentTarget) return;
                setDividerText((prev) => {
                    if (prev === undefined) return "";
                    if (prev === "") return undefined;
                    return prev;
                });
            }}
        >
            <span
                className="border-t border-gray-400 flex-1"
                style={{
                    borderStyle: data.type ?? "solid",
                }}
            ></span>
            {typeof dividerText === "string" && (
                <>
                    <input
                        type="text"
                        className="text-sm text-gray-500 dark:text-gray-200 font-medium outline-none w-fit px-1.5 text-center"
                        data-name="divider-text"
                        value={dividerText ?? ""}
                        maxLength={26}
                        onChange={(e) => setDividerText(e.target.value)}
                        onBlur={(e) => {
                            const val = e.target.value;
                            setDividerText(val.length > 0 ? val : undefined);
                        }}
                    />

                    <span
                        className="border-t border-gray-400 flex-1"
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
    component: Divider,
    structure,
    settings,
};
