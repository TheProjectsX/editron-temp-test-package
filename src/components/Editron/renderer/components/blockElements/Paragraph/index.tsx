import { spacingConfig } from "../libs/styles";
import type { ParagraphProps } from "./types";

const Paragraph = ({ className = "", style, metadata }: ParagraphProps) => {
    return (
        <p
            className={`${spacingConfig["paragraph"]} dark:text-gray-200 ${className}`}
            style={{
                ...(metadata.data.style ?? {}),
                ...(style ?? {}),
            }}
            dangerouslySetInnerHTML={{ __html: metadata.data.html }}
        ></p>
    );
};

export default {
    type: "paragraph",
    component: Paragraph,
};
