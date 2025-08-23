import { useEffect, useState } from "react";
import { focusElement } from "../libs/events";
import type { ListProps } from "./types";
import { settings, structure } from "./meta";

const List = ({ className = "", data, onUpdate }: ListProps) => {
    const [listData, setListData] = useState<{ html: string }[]>(data.values);

    useEffect(() => {
        onUpdate({ ...data, values: listData });
    }, [listData]);

    const Tag = data.tag;

    return (
        <Tag
            className={`list-outside dark:text-gray-200 py-1 pl-5 ${
                data.tag === "ol" ? "list-decimal" : "list-disc"
            } ${className}`}
            style={data.style ?? {}}
        >
            {listData.map((itemData, idx) => (
                <li
                    onKeyDown={(e) => {
                        const target =
                            e.currentTarget ?? (e.target as HTMLLIElement);

                        if (e.key === "Enter") {
                            e.preventDefault();
                            setListData((prev) => [
                                ...prev.map((item, id) =>
                                    idx === id
                                        ? { html: target.innerHTML }
                                        : item
                                ),
                                { html: "" },
                            ]);

                            // Getting the element inside, cause outside timeout, it's not rendered yet
                            setTimeout(() => {
                                const sibling =
                                    target.nextElementSibling as HTMLLIElement | null;
                                focusElement(sibling, false);
                            }, 0);
                        } else if (e.key === "Backspace") {
                            if ((target.textContent ?? "") === "") {
                                e.preventDefault();
                                setListData((prev) =>
                                    prev.filter((_, id) => id !== idx)
                                );

                                // Getting the element outside, cause inside timeout it's already removed
                                const sibling =
                                    target.previousElementSibling as HTMLLIElement | null;

                                setTimeout(() => {
                                    focusElement(sibling);
                                }, 0);
                            }
                        }
                    }}
                    onBlur={(e) => {
                        const target = e.currentTarget ?? e.target;

                        setListData((prev) =>
                            prev.map((item, id) =>
                                idx === id ? { html: target.innerHTML } : item
                            )
                        );
                    }}
                    key={idx}
                    className="outline-none"
                    contentEditable
                    dangerouslySetInnerHTML={{ __html: itemData.html }}
                ></li>
            ))}
        </Tag>
    );
};

export default {
    component: List,
    structure,
    settings,
};
