type ImageTags = "img";
type ImageData = {
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

type ImageOutputData = {
    file:
        | File
        | {
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
    output: ImageOutputData;
};

export type ImageProps = Omit<ImageBlock, "type" | "output"> & {
    className?: string;
    onUpdate: (value: ImageData) => void;
};
