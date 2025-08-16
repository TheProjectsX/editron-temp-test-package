import type { HeadingProps } from "./types";
import { spacingConfig } from "../libs/styles";

const Heading = ({ className = "", style, metadata }: HeadingProps) => {
    const Tag = metadata.data.tag;

    return (
        <Tag
            {...(metadata.data.flagged ? { id: metadata.id } : {})}
            className={`${spacingConfig["heading"][Tag]} ${className}`}
            style={{
                ...(metadata.data.style ?? {}),
                ...(style ?? {}),
            }}
            dangerouslySetInnerHTML={{ __html: metadata.data.html }}
        ></Tag>
    );
};

export default {
    type: "heading",
    component: Heading,
};
