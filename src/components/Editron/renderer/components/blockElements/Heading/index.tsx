import type { HeadingProps } from "./types";
import { spacingConfig } from "../libs/styles";

const Heading = ({ className = "", style, data }: HeadingProps) => {
    const Tag = data.tag;

    return (
        <Tag
            className={`${spacingConfig["heading"][Tag]} ${className}`}
            style={{
                ...(data.style ?? {}),
                ...(style ?? {}),
            }}
            dangerouslySetInnerHTML={{ __html: data.html }}
        ></Tag>
    );
};

export default {
    type: "heading",
    component: Heading,
};
