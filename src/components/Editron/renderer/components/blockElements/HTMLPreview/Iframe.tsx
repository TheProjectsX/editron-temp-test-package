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
            iframe.style.height = doc.body.scrollHeight + "px";
            setLoading(false);
        };

        iframe.addEventListener("load", resize);
        // also resize once after mount (helps with React‑fast updates)
        resize();

        return () => iframe.removeEventListener("load", resize);
    }, [srcDoc]);

    return (
        <div>
            {loading && <div>Loading</div>}

            <iframe className="w-full h-0" ref={ref} srcDoc={srcDoc} />
        </div>
    );
};

export default Iframe;
