import { spacingConfig } from "../libs/styles";
import type { ListProps } from "./types";

const List = ({ className = "", style, metadata }: ListProps) => {
    const Tag = metadata.data.tag;

    return (
        <Tag
            className={`list-outside dark:text-gray-200 py-1 pl-5 ${
                spacingConfig["list"]
            } ${Tag === "ol" ? "list-decimal" : "list-disc"} ${className}`}
            style={{
                ...(metadata.data.style ?? {}),
                ...(style ?? {}),
            }}
        >
            {metadata.data.values.map((item, idx) => (
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
