import { useEffect, useRef, useState } from "react";

const Iframe = ({ srcDoc }: { srcDoc: string }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const ref = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        const iframe = ref.current;
        if (!iframe) return;

        const resize = () => {
            const doc =
                iframe.contentDocument || iframe.contentWindow?.document;
            if (!doc) return;
            iframe.style.height = doc.documentElement.scrollHeight + "px";
            setLoading(false);
        };

        iframe.addEventListener("load", resize);
        // also resize once after mount (helps with React‑fast updates)
        resize();

        return () => iframe.removeEventListener("load", resize);
    }, [srcDoc]);

    return (
        <div className="px-4 py-4 md:resize-x overflow-auto w-full max-w-full bg-white dark:bg-slate-800">
            {loading && <div>Loading</div>}

            <iframe className="w-full h-0" ref={ref} srcDoc={srcDoc} />
        </div>
    );
};

export default Iframe;
