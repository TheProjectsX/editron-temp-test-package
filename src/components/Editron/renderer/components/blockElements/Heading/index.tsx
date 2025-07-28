import type { HeadingProps } from "./types";
import { spacingConfig } from "../libs/styles";

const Heading = ({ className = "", style, tag: Tag, data }: HeadingProps) => {
    // const headingStyles: Record<string, string> = {
    //     h1: "text-2xl sm:text-3xl mb-5 sm:mb-6 font-bold",
    //     h2: "text-xl sm:text-2xl mb-4 sm:mb-5 font-semibold",
    //     h3: "text-lg sm:text-xl mb-3 sm:mb-4 font-semibold",
    //     h4: "text-base sm:text-lg mb-2 sm:mb-3 font-semibold",
    //     h5: "text-base sm:text-lg mb-2 font-medium",
    //     h6: "text-sm sm:text-base mb-2 font-medium",
    // };

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
