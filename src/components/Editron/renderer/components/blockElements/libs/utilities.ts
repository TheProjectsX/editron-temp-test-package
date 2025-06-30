export const copyToClipboard = (
    value: string,
    onCopied: () => void = () => {}
) => {
    return navigator.clipboard
        .writeText(value)
        .then(onCopied)
        .catch((err) => console.error("Copy failed:", err));
};

export const makeSrcDoc = ({
    head = "",
    html,
    css = "",
    js = "",
}: {
    head?: string;
    html: string;
    css?: string;
    js?: string;
}) => {
    // convert JSX‑style className → class (only when a class attr isn’t already present)
    // [Have no Idea what this monster is. Absolute Cinema! 🖐️😐🤚]
    const fixedHtml = html.replace(
        /(<[^>]*?)\sclassName=(["'])(.*?)\2([^>]*>)/g,
        (_, pre, q, value, post) => {
            if (/\sclass=/.test(pre) || /\sclass=/.test(post)) return _; // keep as‑is
            return `${pre} class=${q}${value}${q}${post}`;
        }
    );

    return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
${head}
${css ? `<style>${css}</style>` : ""}
<style>*{padding: 0; margin: 0; box-sizing: border-box}</style>
</head>
<body>
${fixedHtml}
${js ? `<script type="module">${js}</script>` : ""}
</body>
</html>`;
};
