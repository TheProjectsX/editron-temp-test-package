type WebpageTags = "a";
type WebpageData = {
    url: string;
};

export type WebpageBlock = {
    type: "webpage";
    tag: WebpageTags;
    data: WebpageData;
};

export type WebpageProps = Omit<WebpageBlock, "type"> & {
    className?: string;
    onUpdate: (value: WebpageData) => void;
};
