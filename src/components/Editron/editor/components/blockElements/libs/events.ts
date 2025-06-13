export const preventNewLine = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") e.preventDefault();
};

export const controlEmptyClass = (element: HTMLElement) => {
    if (element.textContent === "") {
        element.classList.add("empty");
    } else {
        element.classList.remove("empty");
    }
};

export const focusElement = (
    element: HTMLElement | null,
    toEnd: boolean = true
) => {
    if (!element) return;
    element.focus();

    if (!toEnd) return;

    const range = document.createRange();
    range.selectNodeContents(element);
    range.collapse(false);

    const sel = window.getSelection();
    sel?.removeAllRanges();
    sel?.addRange(range);
};

export const insertAZ = (text: string | null, value: string) => {
    if (!text) return "";
    if (text.length < 0) return "";

    if (text.charAt(0) === value && text.charAt(text.length - 1) === value)
        return text;

    return `${value}${text}${value}`;
};
