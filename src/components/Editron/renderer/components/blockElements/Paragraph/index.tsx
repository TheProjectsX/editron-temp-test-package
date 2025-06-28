import type { ParagraphProps } from "./types";

const Paragraph = ({ className = "", data }: ParagraphProps) => {
    return (
        <p
            className={`outline-none overflow-hidden ${className}`}
            style={data.style ?? {}}
            dangerouslySetInnerHTML={{ __html: data.html }}
        ></p>
    );
};

export default {
    type: "paragraph",
    component: Paragraph,
};
