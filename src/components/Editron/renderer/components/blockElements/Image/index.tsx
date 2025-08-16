import { spacingConfig } from "../libs/styles";
import type { ImageProps } from "./types";

const Image = ({ className = "", style, metadata }: ImageProps) => {
    return (
        <div
            className={`flex items-center justify-center ${
                spacingConfig["image"]
            } ${className} ${metadata.data.type === "free" ? "min-h-52" : "h-52"}`}
            style={style ?? {}}
        >
            <img
                src={
                    metadata.data.file instanceof File
                        ? URL.createObjectURL(metadata.data.file as File)
                        : metadata.data.file.src
                }
                alt={metadata.data.alt ?? metadata.data.file.name ?? "Image Preview"}
                className={`${
                    metadata.data.type === "free"
                        ? "w-full"
                        : metadata.data.type === "cover"
                        ? "w-full h-full object-cover"
                        : metadata.data.type === "fill"
                        ? "w-full h-full object-fill"
                        : "w-full h-full object-contain object-center"
                }`}
            />
        </div>
    );
};

export default {
    type: "image",
    component: Image,
};
