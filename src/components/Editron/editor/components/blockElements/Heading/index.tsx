import { cleanInnerHTML } from "../libs/utilities";
import { preventNewLine } from "../libs/events";
import type { HeadingProps } from "./types";
import { demo, settings, structure } from "./meta";
import { spacingConfig } from "../libs/styles";
import { FaBookmark } from "react-icons/fa";

const Heading = ({
    className = "",
    tag: Tag,
    data,
    onUpdate,
}: HeadingProps) => {
    return (
        <Tag className={`${spacingConfig["heading"][Tag]} ${className}`}>
            <span
                className={`outline-none mr-1`}
                onKeyDown={preventNewLine}
                onBlur={(e) => {
                    const target = e.currentTarget ?? e.target;
                    onUpdate({
                        ...data,
                        html: cleanInnerHTML(target.innerHTML),
                    });
                }}
                style={data.style ?? {}}
                data-placeholder={`Enter your heading...`}
                data-align={data.style?.textAlign ?? ""}
                contentEditable
                dangerouslySetInnerHTML={{ __html: data.html }}
            ></span>
            <button
                className="rotate-90 cursor-pointer text-gray-200 dark:text-gray-700 hover:text-gray-500 px-1.5 py-1.5"
                title="Flag as Section"
            >
                <FaBookmark className="text-sm" />
            </button>
        </Tag>
    );
};

export default {
    component: Heading,
    structure,
    demo,
    settings,
};
