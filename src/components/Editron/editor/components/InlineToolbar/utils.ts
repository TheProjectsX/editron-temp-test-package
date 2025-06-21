export const makeBold = () => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) return;

    const range = selection.getRangeAt(0);
    const b = document.createElement("b");
    range.surroundContents(b);
};
