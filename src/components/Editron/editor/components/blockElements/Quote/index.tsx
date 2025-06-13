import type { EditorQuoteData, QuoteTags } from "../../../types/blockElements";
import { insertAZ, preventNewLine } from "../libs/events";

type QuoteProps = {
    className?: string;
    tag: QuoteTags;
    data: EditorQuoteData;
    onUpdate: (value: EditorQuoteData) => void;
};

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

export default Quote;
