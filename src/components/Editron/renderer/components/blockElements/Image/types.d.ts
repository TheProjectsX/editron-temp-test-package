type data = {
    tag: "img";
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
    data: data;
};

export type ImageProps = Omit<ImageBlock, "type"> & {
    className?: string;
    style?: Record<string, string>;
};
