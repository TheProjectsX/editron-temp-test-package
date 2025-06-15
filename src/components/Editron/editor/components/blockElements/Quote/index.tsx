import { insertAZ, preventNewLine } from "../libs/events";
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
                className="outline-none text-xl leading-relaxed italic font-semibold text-gray-900 py-1"
                onKeyDown={preventNewLine}
                onBlur={(e) => {
                    const target = e.currentTarget ?? e.target;
                    onUpdate({
                        ...data,
                        quote: insertAZ(target.textContent, '"'),
                    });
                    target.textContent = insertAZ(target.textContent, '"');
                }}
                data-placeholder={`Enter a Quote`}
                autoFocus
                contentEditable
            >
                {data.quote ? insertAZ(data.quote, '"') : ""}
            </p>
        </blockquote>
    );
};

export default {
    component: Quote,
    structure,
    demo,
    settings
};
