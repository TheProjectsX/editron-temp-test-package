import { useState } from "react";
import EditorComponent from "./components/Editor";
import RendererComponent from "./components/Renderer";
import { demo } from "./components/blank/demo";

const App = () => {
    const [mode, setMode] = useState<"editor" | "renderer">("editor");
    // const [blocks, setBlocks] = useState<Record<string, any>[]>([
    //     {
    //         tag: "h2",
    //         type: "heading",
    //         data: {
    //             html: "This is a Heading!",
    //         },
    //         id: "o3mYCeewMt",
    //     },
    //     {
    //         tag: "p",
    //         type: "paragraph",
    //         data: {
    //             html: "Another Paragraph just to make it useable",
    //         },
    //         id: "kY21nhl78E",
    //     },
    //     {
    //         tag: "ul",
    //         type: "list",
    //         data: {
    //             values: [
    //                 {
    //                     html: "A List of Contents!",
    //                 },
    //                 {
    //                     html: "Another one",
    //                 },
    //                 {
    //                     html: "Another!",
    //                 },
    //             ],
    //         },
    //         id: "3cnt_sFlXT",
    //     },
    //     {
    //         tag: "hr",
    //         type: "divider",
    //         data: {
    //             text: "Divided",
    //             type: "dotted",
    //         },
    //         id: "yifzaae0T4",
    //     },
    //     {
    //         tag: "blockquote",
    //         type: "quote",
    //         data: {
    //             quote: "Learn while you can, life is too short to waste",
    //             type: "highlighted",
    //         },
    //         id: "sjhlIKsVh2",
    //     },
    // ]);
    const [blocks, setBlocks] = useState<Record<string, any>[]>(demo);
    return (
        <div className="max-w-3xl w-full">
            <div className="flex items-center gap-4 mb-10">
                <button className="w-full p-2.5 text-white font-semibold rounded-2xl cursor-pointer bg-blue-700 active:scale-95 transition-all"
                    onClick={() => {
                        const body = document.body
                        if (body.classList.contains("dark")){
                            body.classList.remove("dark")
                        } else  {
                            body.classList.add("dark")
                        }
                    }}
                
                >
                    Change Mode
                </button>

                <button
                    className={`w-full p-2.5 text-white font-semibold rounded-2xl cursor-pointer bg-blue-500 disabled:bg-blue-700  disabled:cursor-not-allowed active:scale-95 transition-all`}
                    onClick={() => setMode("editor")}
                    disabled={mode === "editor"}
                >
                    Editor
                </button>
                <button
                    className={`w-full p-2.5 text-white font-semibold rounded-2xl cursor-pointer bg-blue-500 disabled:bg-blue-700  disabled:cursor-not-allowed active:scale-95 transition-all`}
                    onClick={() => setMode("renderer")}
                    disabled={mode === "renderer"}
                >
                    renderer
                </button>
            </div>

            <div className="w-full">
                {mode === "editor" && (
                    <EditorComponent blocks={blocks} setBlocks={setBlocks} />
                )}

                {mode === "renderer" && <RendererComponent blocks={blocks} />}
            </div>
        </div>
    );
};

export default App;
