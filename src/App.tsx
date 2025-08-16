import { useState } from "react";
import EditorComponent from "./components/Editor";
import RendererComponent from "./components/Renderer";
import { demo } from "./components/blank/demo";

const App = () => {
    const [mode, setMode] = useState<"editor" | "renderer">("editor");

    const [data, setData] = useState<{ blocks: Record<string, any>[] }>({
        blocks: demo,
    });
    return (
        <div className="max-w-3xl w-full">
            <div className="flex items-center gap-4 mb-10">
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

            <div className="w-full">
                {mode === "editor" && (
                    <EditorComponent blocks={data} setBlocks={setData} />
                )}

                {mode === "renderer" && <RendererComponent blocks={data} />}
            </div>
        </div>
    );
};

export default App;
