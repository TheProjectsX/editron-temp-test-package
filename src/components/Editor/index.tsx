import type { blockState } from "../../App";
import { uploadToImgbb } from "../../util";
import Editor from "../Editron/editor";

const EditorComponent = ({
    defaultBlock,
    blocks = [],
    setBlocks,
}: {
    defaultBlock?: string;
    blocks?: { blocks: Record<string, any>[] } | Record<string, any>[];
    setBlocks: React.Dispatch<React.SetStateAction<blockState>>;
}) => {
    const [Component, save] = Editor({
        initials: blocks,
        defaultBlock: defaultBlock ?? "paragraph",
        config: {
            enableTableOfContents: true,
            uploadImage: uploadToImgbb,
            blocks: {
                "soe": {}
            }
        },
    });

    return (
        <section className="max-w-3xl w-full">
            <div className="bg-white dark:bg-slate-900 rounded-2xl w-full p-6 pb-1.5 mb-5">
                <Component />
            </div>

            <button
                className="mx-auto block px-6 py-2.5 rounded-lg bg-[dodgerBlue] text-white"
                onClick={async () => {
                    const data = await save();
                    console.log("🚀 ~ onClick={ ~ data:", data);
                    setBlocks(data);
                }}
            >
                Save
            </button>
        </section>
    );
};

export default EditorComponent;
