import type { ParagraphProps } from "./types";

const Paragraph = ({ className = "", style, data }: ParagraphProps) => {
    return (
        <p
            className={`${className}`}
            style={{
                ...(data.style ?? {}),
                ...(style ?? {}),
            }}
            dangerouslySetInnerHTML={{ __html: data.html }}
        ></p>
    );
};

export default {
    type: "paragraph",
    component: Paragraph,
};
