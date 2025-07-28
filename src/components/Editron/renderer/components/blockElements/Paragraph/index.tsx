import { spacingConfig } from "../libs/styles";
import type { ParagraphProps } from "./types";

const Paragraph = ({ className = "", style, data }: ParagraphProps) => {
    return (
        <p
            className={`${spacingConfig["paragraph"]} ${className}`}
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
