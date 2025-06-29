import Editor from "../Editron/editor";

const EditorComponent = ({
    blocks,
    setBlocks,
}: {
    blocks: Record<string, any>[];
    setBlocks: React.Dispatch<React.SetStateAction<Record<string, any>[]>>;
}) => {
    const [Component, save] = Editor({
        blocks: blocks,
        defaultBlock: "paragraph",
        config: {
            uploadImage() {
                return new Promise((resolve) =>
                    setTimeout(() => resolve("test"), 500)
                );
            },
        },
    });

    return (
        <>
            <div className="bg-white rounded-2xl w-full px-8 py-6 mb-5">
                <Component />
            </div>

            <button
                className="mx-auto block px-6 py-2.5 rounded-lg bg-[dodgerBlue] text-white"
                onClick={async () => setBlocks(await save())}
            >
                Save
            </button>
        </>
    );
};

export default EditorComponent;
