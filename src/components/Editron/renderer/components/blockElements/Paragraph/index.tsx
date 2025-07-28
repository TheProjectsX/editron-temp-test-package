import { spacingConfig } from "../libs/styles";
import type { ParagraphProps } from "./types";

const Paragraph = ({ className = "", style, data }: ParagraphProps) => {
    return (
        <p
            className={`${spacingConfig["paragraph"]} dark:text-gray-200 ${className}`}
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
