import { useEffect, useState } from "react";
import type { ListData, ListTags } from "../../../types/blockElements";
import { focusElement } from "../libs/events";

type ListProps = {
    className?: string;
    tag: ListTags;
    data: ListData;
    onUpdate: (value: ListData) => void;
};

const List = ({ className = "", tag: Tag, data, onUpdate }: ListProps) => {
    const [listData, setListData] = useState<string[]>(data.values);

    useEffect(() => {
        onUpdate({ values: listData });
    }, [listData]);

    return (
        <Tag
            className={`list-outside py-1 pl-4 ${
                Tag === "ol" ? "list-decimal" : "list-disc"
            } ${className}`}
        >
            {listData.map((value, idx) => (
                <li
                    onKeyDown={(e) => {
                        const element =
                            e.currentTarget ?? (e.target as HTMLLIElement);

                        if (e.key === "Enter") {
                            e.preventDefault();
                            setListData((prev) => [...prev, ""]);
                            setTimeout(() => {
                                focusElement(
                                    element.nextElementSibling as HTMLLIElement | null,
                                    false
                                );
                            }, 100);
                        } else if (e.key === "Backspace") {
                            if ((element.textContent ?? "") === "") {
                                e.preventDefault();
                                setListData((prev) =>
                                    prev.filter((_, id) => id !== idx)
                                );
                                const sibling =
                                    element.previousElementSibling as HTMLLIElement | null;
                                focusElement(sibling);
                            }
                        }
                    }}
                    onBlur={(e) => {
                        const element =
                            e.currentTarget ?? (e.target as HTMLLIElement);

                        setListData((prev) =>
                            prev.map((item, id) =>
                                id === idx ? element.textContent ?? "" : item
                            )
                        );
                    }}
                    contentEditable
                    key={idx}
                    className="outline-none"
                >
                    {value}
                </li>
            ))}
        </Tag>
    );
};

export default List;
