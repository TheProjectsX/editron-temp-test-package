import type { HeadingProps } from "./types";

const Heading = ({ className = "", style, tag: Tag, data }: HeadingProps) => {
    const headingStyles: Record<string, string> = {
        h1: "text-3xl font-bold",
        h2: "text-2xl font-semibold",
        h3: "text-xl font-semibold",
        h4: "text-lg font-semibold",
        h5: "text-lg font-medium",
        h6: "text-base font-medium",
    };

    return (
        <Tag
            className={`${headingStyles[Tag]} ${className}`}
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
