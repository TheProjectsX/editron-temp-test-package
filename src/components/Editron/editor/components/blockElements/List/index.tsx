import { useEffect, useState } from "react";
import { focusElement } from "../libs/events";
import type { ListData, ListTags } from "./types";
import { demo, settings, structure } from "./meta";

type ListProps = {
    className?: string;
    tag: ListTags;
    data: ListData;
    onUpdate: (value: ListData) => void;
};

const List = ({ className = "", tag: Tag, data, onUpdate }: ListProps) => {
    const [listData, setListData] = useState<{ html: string }[]>(data.values);

    useEffect(() => {
        onUpdate({ values: listData });
    }, [listData]);

    return (
        <Tag
            className={`list-outside py-1 pl-5 ${
                Tag === "ol" ? "list-decimal" : "list-disc"
            } ${className}`}
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

                            // Getting the element inside, cause outside timeout it's not rendered yet
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
    demo,
    settings,
};
