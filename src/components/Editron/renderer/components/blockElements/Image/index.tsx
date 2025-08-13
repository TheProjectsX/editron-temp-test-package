import { spacingConfig } from "../libs/styles";
import type { ImageProps } from "./types";

const Image = ({ className = "", style, data }: ImageProps) => {
    return (
        <div
            className={`flex items-center justify-center ${
                spacingConfig["image"]
            } ${className} ${data.type === "free" ? "min-h-52" : "h-52"}`}
            style={style ?? {}}
        >
            <img
                src={
                    data.file instanceof File
                        ? URL.createObjectURL(data.file as File)
                        : data.file.src
                }
                alt={data.alt ?? data.file.name ?? "Image Preview"}
                className={`${
                    data.type === "free"
                        ? "w-full"
                        : data.type === "cover"
                        ? "w-full h-full object-cover"
                        : data.type === "fill"
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
