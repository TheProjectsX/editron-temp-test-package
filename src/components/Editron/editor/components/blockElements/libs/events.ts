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
