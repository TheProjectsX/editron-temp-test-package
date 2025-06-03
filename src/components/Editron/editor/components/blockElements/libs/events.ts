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

export const focusElement = (element: HTMLElement | null, toEnd: boolean = true) => {
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
