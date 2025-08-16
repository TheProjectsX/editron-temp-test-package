type data = {
    tag: "img";
    file:
        | File
        | {
              name: string;
              src: string;
              size?: number;
          }
        | null;
    alt?: string;
    type?: "free" | "fill" | "cover" | "contain";
};

type config = {};

export type ImageBlock = {
    type: "image";
    data: data;
    config?: config;
};

export type ImageProps = Omit<ImageBlock, "type"> & {
    className?: string;
    onUpdate: (value: data) => void;
};
