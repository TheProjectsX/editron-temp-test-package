import { useState } from "react";
import EditorComponent from "./components/Editor";
import RendererComponent from "./components/Renderer";
import { demo } from "./components/blank/demo";

export type blockState = {
    blocks: {
        id: string;
        type: string;
        data: {
            tag: string;
        } & Record<string, any>;
    }[];
    tableOfContent?: { label: string; id: string };
};

const App = () => {
    const [mode, setMode] = useState<"editor" | "renderer">("editor");

    const [data, setData] = useState<blockState>(demo);
    return (
        <div className="w-full flex flex-col items-center">
            <div className="flex items-center gap-4 mb-10 max-w-3xl w-full">
                <button
                    className="w-full p-2.5 text-white font-semibold rounded-2xl cursor-pointer bg-blue-700 active:scale-95 transition-all"
                    onClick={() => {
                        const body = document.body;
                        if (body.classList.contains("dark")) {
                            body.classList.remove("dark");
                        } else {
                            body.classList.add("dark");
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

            <div className="w-full flex justify-center">
                {mode === "editor" && (
                    <EditorComponent blocks={data} setBlocks={setData} />
                )}

                {mode === "renderer" && <RendererComponent data={data} />}
            </div>
        </div>
    );
};

export default App;
