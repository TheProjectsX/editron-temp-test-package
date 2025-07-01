import { useState } from "react";
import EditorComponent from "./components/Editor";
import RendererComponent from "./components/Renderer";

const App = () => {
    const [mode, setMode] = useState<"editor" | "renderer">("editor");
    const [blocks, setBlocks] = useState<Record<string, any>[]>([
        {
            tag: "pre",
            type: "html-preview",
            data: {
                html: '<button\n                    className="py-2 w-20 bg-gray-100 enabled:hover:bg-gray-200 cursor-pointer disabled:cursor-default text-sm font-medium text-gray-800 border-x border-gray-200"\n                    title="Copy Code"\n                    onClick={(e) => {\n                        const btn = e.currentTarget as HTMLButtonElement;\n                        const copy = btn.querySelector(\n                            ".copy"\n                        ) as HTMLSpanElement;\n                        const copied = btn.querySelector(\n                            ".copied"\n                        ) as HTMLSpanElement;\n\n                        copyToClipboard(\n                            section === "html"\n                                ? html\n                                : section === "css"\n                                ? css ?? ""\n                                : js ?? "",\n                            () => {\n                                copy.hidden = true;\n                                copied.hidden = false;\n                                setTimeout(() => {\n                                    copied.hidden = true;\n                                    copy.hidden = false;\n                                }, 1500);\n                            }\n                        );\n                    }}\n                >\n                    <span className="copy flex items-center justify-center gap-1.5">\n                        <FaClipboardList className="text-gray-700" /> Copy\n                    </span>\n                    <span\n                        className="copied flex items-center justify-center gap-1.5"\n                        hidden\n                    >\n                        <MdOutlineDone className="text-gray-700" /> Copied\n                    </span>\n                </button>',
                mode: "reveal",
                head: "",
            },
            id: "lZKpHiYdLo",
        },
    ]);

    return (
        <div className="max-w-2xl w-full">
            <div className="flex items-center gap-4 mb-10">
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
