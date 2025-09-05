import { useEffect, useRef, useState } from "react";

const Iframe = ({ srcDoc }: { srcDoc: string }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const iframeContainerRef = useRef<HTMLIFrameElement>(null);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    // Change height of Iframe based on content
    const resize = () => {
        const iframe = iframeRef.current!;

        const doc = iframe.contentDocument || iframe.contentWindow?.document;
        if (!doc) return;

        iframe.style.height = doc.documentElement.scrollHeight + "px";
    };

    // Change height of Iframe onload
    useEffect(() => {
        const iframe = iframeRef.current;
        if (!iframe) return;

        const performResize = () => {
            resize();
            setLoading(false);
        };

        iframe.addEventListener("load", performResize);

        // also resize once after mount (helps with React‑fast updates)
        performResize();

        return () => iframe.removeEventListener("load", performResize);
    }, [srcDoc]);

    // Change height of Iframe when resized
    useEffect(() => {
        if (!iframeContainerRef.current) return;

        const observer = new ResizeObserver(resize);

        observer.observe(iframeContainerRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            className="px-4 py-4 md:resize-x overflow-auto w-full max-w-full bg-white dark:bg-slate-800 scrollbar-none relative resizer-none"
            ref={iframeContainerRef}
        >
            {loading && <div>Loading</div>}

            <iframe className="w-full h-0" ref={iframeRef} srcDoc={srcDoc} />

            <div className="size-2.5 border-b-3 border-r-3 absolute right-0 bottom-0 dark:border-slate-500"></div>
        </div>
    );
};

export default Iframe;
