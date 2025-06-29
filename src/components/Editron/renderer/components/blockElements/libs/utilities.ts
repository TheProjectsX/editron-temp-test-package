export const copyToClipboard = (
    value: string,
    onCopied: () => void = () => {}
) => {
    return navigator.clipboard
        .writeText(value)
        .then(onCopied)
        .catch((err) => console.error("Copy failed:", err));
};
