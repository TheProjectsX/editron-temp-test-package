import { useState } from "react";
import { demo, structure } from "./meta";
import { ImSpinner10 } from "react-icons/im";
import { getLinkPreview } from "link-preview-js";

const Webpage = () => {
    const [webpageMeta, setWebpageMeta] = useState<
        | {
              url: string;
              title: string;
              description: string;
              favicon: string;
          }
        | "loading"
        | null
    >(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const url = (e.target as HTMLFormElement).url.value;
        if (url === "") return;

        setWebpageMeta("loading");

        try {
            const response = await getLinkPreview(
                `https://bypass-cors.vercel.app/?url=${encodeURIComponent(url)}`
            );
            console.log(response);

            setWebpageMeta(null);
        } catch (error) {
            setWebpageMeta(null);
        }
    };

    return (
        (!webpageMeta || webpageMeta === "loading") && (
            <form onSubmit={handleSubmit} className="relative">
                <input
                    name="url"
                    type="url"
                    className="outline-none border-none w-full"
                    placeholder="Enter a URL"
                />

                {webpageMeta === "loading" && (
                    <ImSpinner10 className="animate-spin absolute right-2 top-1/2 -translate-y-1/2 text-gray-500" />
                )}
            </form>
        )
    );
};

export default {
    component: Webpage,
    structure,
    demo,
};
