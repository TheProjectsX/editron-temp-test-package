import type { QuoteProps } from "./types";

const Quote = ({ className = "", style, data }: QuoteProps) => {
    return (
        <blockquote
            className={`${
                data.type === "highlighted"
                    ? "p-4 border-s-4 border-gray-300 bg-gray-50"
                    : ""
            } ${className}`}
            style={style ?? {}}
        >
            <p
                className="outline-none text-xl leading-relaxed italic font-semibold text-gray-900 py-1 cursor-text"
                style={data.style ?? {}}
            >
                “{data.quote}”
            </p>
        </blockquote>
    );
};

export default {
    type: "quote",
    component: Quote,
};
