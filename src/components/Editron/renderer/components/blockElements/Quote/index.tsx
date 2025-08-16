import { spacingConfig } from "../libs/styles";
import type { QuoteProps } from "./types";

const Quote = ({ className = "", style, metadata }: QuoteProps) => {
    return (
        <blockquote
            className={`${
                metadata.data.type === "highlighted"
                    ? "p-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800"
                    : ""
            } ${spacingConfig["quote"]} ${className}`}
            style={style ?? {}}
        >
            <p
                className="outline-none text-xl leading-relaxed text-gray-900 dark:text-white cursor-text"
                style={metadata.data.style ?? {}}
            >
                <em
                    dangerouslySetInnerHTML={{
                        __html: `“${metadata.data.quote}”`,
                    }}
                ></em>
            </p>

            {metadata.data.author.length > 0 && (
                <h3 className="text-base font-semibold text-gray-800 dark:text-neutral-400 text-right mt-1.5">
                    - {metadata.data.author}
                </h3>
            )}
        </blockquote>
    );
};

export default {
    type: "quote",
    component: Quote,
};
