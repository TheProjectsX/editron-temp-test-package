import type { ListProps } from "./types";

const List = ({ className = "", style, tag: Tag, data }: ListProps) => {
    return (
        <Tag
            className={`list-outside py-1 pl-5 ${
                Tag === "ol" ? "list-decimal" : "list-disc"
            } ${className}`}
            style={{
                ...(data.style ?? {}),
                ...(style ?? {}),
            }}
        >
            {data.values.map((item, idx) => (
                <li
                    key={idx}
                    dangerouslySetInnerHTML={{ __html: item.html }}
                ></li>
            ))}
        </Tag>
    );
};

export default {
    type: "list",
    component: List,
};
