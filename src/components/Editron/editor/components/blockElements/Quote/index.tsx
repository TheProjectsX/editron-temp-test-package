import { preventNewLine } from "../libs/events";
import { demo, settings, structure } from "./meta";
import type { QuoteProps } from "./types";

const Quote = ({ className = "", data, onUpdate }: QuoteProps) => {
    return (
        <blockquote
            className={`${
                data.type === "highlighted"
                    ? "p-4 border-s-4 border-gray-300 bg-gray-50"
                    : ""
            } ${className}`}
        >
            <p
                className="outline-none text-xl italic leading-relaxed text-gray-900 cursor-text mb-1.5"
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
                            quote: target.textContent ?? "",
                        });
                    }}
                    contentEditable
                    autoFocus
                    className="min-w-[1ch] min-h-[1em] outline-none"
                >
                    {data.quote ?? ""}
                </span>
                <span>”</span>
            </p>
            <h3 className="text-base font-semibold text-gray-800 dark:text-neutral-400 flex justify-end gap-1.5">
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
    demo,
    settings,
    inlineToolbar: false,
};
