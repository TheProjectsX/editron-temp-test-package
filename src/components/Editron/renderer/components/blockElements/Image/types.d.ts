type ImageTags = "img";
type ImageData = {
    file: {
        name: string;
        src: string;
        size?: number;
    };
    alt?: string;
    type?: "free" | "fill" | "cover" | "contain";
};

export type ImageBlock = {
    type: "image";
    tag: ImageTags;
    data: ImageData;
};

export type ImageProps = Omit<ImageBlock, "type"> & {
    className?: string;
    style?: Record<string, string>;
};
