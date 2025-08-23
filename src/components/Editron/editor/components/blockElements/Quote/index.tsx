import { preventNewLine } from "../libs/events";
import { cleanInnerHTML } from "../libs/utilities";
import { settings, structure } from "./meta";
import type { QuoteProps } from "./types";

const Quote = ({ className = "", data, onUpdate }: QuoteProps) => {
    return (
        <blockquote
            className={`${
                data.type === "highlighted"
                    ? "p-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800"
                    : ""
            } ${className}`}
        >
            <p
                className="outline-none text-xl italic leading-relaxed text-gray-900 dark:text-white cursor-text mb-1.5"
                onClick={(e) => {
                    const target = e.currentTarget ?? e.target;

                    (
                        target.querySelector(
                            "[data-name='quote-content']"
                        ) as HTMLSpanElement
                    ).focus();
                }}
                style={data.style ?? {}}
            >
                <span>“</span>
                <span
                    data-name="quote-content"
                    onKeyDown={preventNewLine}
                    onBlur={(e) => {
                        const target = e.currentTarget ?? e.target;

                        onUpdate({
                            ...data,
                            quote: cleanInnerHTML(target.innerHTML) ?? "",
                        });
                    }}
                    className="min-w-[1ch] min-h-[1em] outline-none"
                    dangerouslySetInnerHTML={{ __html: data.quote }}
                    contentEditable
                ></span>
                <span>”</span>
            </p>
            <h3 className="text-base font-semibold text-gray-800 dark:text-neutral-300 flex justify-end gap-1.5">
                <span>-</span>{" "}
                <span
                    className="min-w-32 inline-block outline-none text-left"
                    data-name="quote-author"
                    data-placeholder="Unknown Author"
                    onKeyDown={preventNewLine}
                    onBlur={(e) => {
                        const target = e.currentTarget ?? e.target;
                        onUpdate({
                            ...data,
                            author: target.textContent ?? "",
                        });
                    }}
                    contentEditable
                >
                    {data.author ?? ""}
                </span>
            </h3>
        </blockquote>
    );
};

export default {
    component: Quote,
    structure,
    settings,
};
