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
    id: string;
    type: "image";
    data: data;
};

export type ImageProps = {
    className?: string;
    style?: Record<string, string>;
    metadata: ImageBlock;
};
