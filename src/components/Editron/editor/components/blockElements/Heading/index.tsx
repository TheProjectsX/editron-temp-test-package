import { cleanInnerHTML } from "../libs/utilities";
import { preventNewLine } from "../libs/events";
import type { HeadingProps } from "./types";
import { processor, settings, structure } from "./meta";
import { spacingConfig } from "../libs/styles";
import { FaBookmark } from "react-icons/fa";

const Heading = ({ className = "", data, config, onUpdate }: HeadingProps) => {
    const Tag = data.tag;

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
            {config?.flaggable && (
                <button
                    data-flagged={data.flagged}
                    className="rotate-90 cursor-pointer text-gray-200 dark:text-gray-700 hover:text-gray-500 px-1.5 py-1.5 data-[flagged=true]:text-blue-400"
                    onClick={(e) => {
                        const target = (e.currentTarget ??
                            e.target) as HTMLButtonElement;
                        const flagged =
                            target.dataset.flagged === "true" ? false : true;

                        onUpdate({
                            ...data,
                            flagged,
                        });

                        target.dataset.flagged = String(flagged);
                    }}
                    title="Flag as Section"
                >
                    <FaBookmark className="text-sm" />
                </button>
            )}
        </Tag>
    );
};

export default {
    component: Heading,
    structure,
    settings,
    processor,
};
