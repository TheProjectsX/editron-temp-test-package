import { uploadToImgbb } from "../../util";
import Editor from "../Editron/editor";

const EditorComponent = ({
    defaultBlock,
    blocks = [],
    setBlocks,
}: {
    defaultBlock?: string;
    blocks?: Record<string, any>[];
    setBlocks: React.Dispatch<React.SetStateAction<Record<string, any>[]>>;
}) => {
    const [Component, save] = Editor({
        blocks: blocks,
        defaultBlock: defaultBlock ?? "paragraph",
        config: {
            uploadImage: uploadToImgbb,
        },
    });

    return (
        <>
            <div className="bg-white rounded-2xl w-full px-8 py-6 mb-5">
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
        </>
    );
};

export default EditorComponent;
