import { cleanInnerHTML } from "../libs/utilities";
import { preventNewLine } from "../libs/events";
import type { HeadingProps } from "./types";
import { processor, settings, structure } from "./meta";
import { GoDotFill } from "react-icons/go";

const Heading = ({ className = "", data, config, onUpdate }: HeadingProps) => {
    const Tag = data.tag;

    const cryptography = {
        h1: "text-2xl sm:text-3xl font-bold",
        h2: "text-xl sm:text-2xl font-semibold",
        h3: "text-lg sm:text-xl font-semibold",
        h4: "text-base sm:text-lg font-semibold",
        h5: "text-base font-medium",
        h6: "text-sm sm:text-base font-medium",
    };

    const relativeHeight = {
        h1: "h-8 sm:h-10",
        h2: "h-7 sm:h-8",
        h3: "h-6 sm:h-7",
        h4: "h-6",
        h5: "h-6",
        h6: "h-5",
    };

    return (
        <div className={`${className} relative`}>
            {config?.flaggable && (
                <button
                    className={`absolute -left-5 cursor-pointer text-gray-300 dark:text-gray-600 hover:text-gray-400 dark:hover:text-gray-500 data-[flagged=true]:text-black data-[flagged=true]:dark:text-white ${relativeHeight[Tag]}`}
                    data-flagged={data.flagged}
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
                    title="Table of Content"
                >
                    <GoDotFill />
                </button>
            )}

            <Tag
                className={`${cryptography[Tag]} outline-none`}
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
            ></Tag>
        </div>
    );
};

export default {
    component: Heading,
    structure,
    settings,
    processor,
};
