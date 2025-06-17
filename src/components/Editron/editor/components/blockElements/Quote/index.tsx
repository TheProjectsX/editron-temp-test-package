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
                className="outline-none text-xl leading-relaxed italic font-semibold text-gray-900 py-1 cursor-text"
                onClick={(e) => {
                    const target = e.currentTarget ?? e.target;

                    (
                        target.querySelector(
                            "[data-name='quote-content']"
                        ) as HTMLSpanElement
                    ).focus();
                }}
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
                    className="inline-block min-w-[1ch] min-h-[1em] outline-none"
                />

                <span>”</span>
            </p>
        </blockquote>
    );
};

export default {
    component: Quote,
    structure,
    demo,
    settings,
};
