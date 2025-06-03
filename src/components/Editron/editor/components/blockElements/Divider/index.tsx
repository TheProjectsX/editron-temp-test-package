import { useEffect, useState } from "react";
import type { DividerData, DividerTags } from "../../../types/blockElements";

type DividerProps = {
    className?: string;
    tag: DividerTags;
    data: DividerData;
    onUpdate: (value: DividerData) => void;
};

const Divider = ({ data, onUpdate }: DividerProps) => {
    const [dividerText, setDividerText] = useState<string | undefined>(
        data.text
    );

    useEffect(() => {
        if (dividerText === "") return;

        onUpdate(dividerText ? { text: dividerText } : {});
    }, [dividerText]);

    return (
        <div
            className="h-8 flex items-center cursor-pointer"
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
                className="border-t border-gray-600 flex-1"
                style={{
                    borderStyle: data.type ?? "solid",
                }}
            ></span>
            {typeof dividerText === "string" && (
                <>
                    <span
                        className="text-sm px-1.5 text-gray-600 font-medium outline-none cursor-text"
                        data-name="divider-text"
                        onBlur={(e) => {
                            const target = e.currentTarget ?? e.target;

                            setDividerText(
                                (target.textContent ?? "").length > 0
                                    ? target.textContent ?? ""
                                    : undefined
                            );
                        }}
                        autoFocus
                        contentEditable
                    >
                        {dividerText}
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

export default Divider;
