type WebpageTags = "a";
type WebpageData = {
    url: string;
};

export type WebpageBlock = {
    type: "webpage";
    tag: WebpageTags;
    data: WebpageData;
    output: WebpageData
};

export type WebpageProps = Omit<WebpageBlock, "type" | "output"> & {
    className?: string;
    onUpdate: (value: WebpageData) => void;
};
