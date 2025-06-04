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
    const [listData, setListData] = useState<{ html: string }[]>(data.values);
    
    // console.log(listData)

    useEffect(() => {
        console.log(listData)
        onUpdate({ values: listData });
    }, [listData]);

    return (
        <Tag
            className={`list-outside py-1 pl-4 ${
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
                            setListData((prev) => [...prev, { html: "" }]);

                            setTimeout(() => {
                                focusElement(
                                    target.nextElementSibling as HTMLLIElement | null,
                                    false
                                );
                            }, 100);
                        } else if (e.key === "Backspace") {
                            if ((target.textContent ?? "") === "") {
                                e.preventDefault();
                                setListData((prev) =>
                                    prev.filter((_, id) => id !== idx)
                                );
                                const sibling =
                                    target.previousElementSibling as HTMLLIElement | null;
                                focusElement(sibling);
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

export default List;
