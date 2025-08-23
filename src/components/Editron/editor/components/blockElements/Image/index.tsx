import { useEffect, useState } from "react";
import { processor, settings, structure } from "./meta";
import type { data as ImageData, ImageProps } from "./types";

const Image = ({ className = "", data, onUpdate }: ImageProps) => {
    const [currentFile, setCurrentFile] = useState<ImageData["file"]>(
        data.file ?? null
    );

    // Update the Core State
    useEffect(() => {
        onUpdate({ ...data, file: currentFile });
    }, [currentFile]);

    return (
        <div
            className={`flex items-center justify-center ${className} ${data.type === "free" ? "min-h-52" : "h-52"}`}
        >
            {currentFile && (
                <label className="w-full h-full cursor-pointer">
                    <img
                        src={
                            currentFile && "src" in currentFile
                                ? currentFile.src
                                : currentFile
                                ? URL.createObjectURL(currentFile as File)
                                : undefined
                        }
                        alt="Preview Image"
                        className={`${
                            data.type === "free"
                                ? "w-full"
                                : data.type === "cover"
                                ? "w-full h-full object-cover"
                                : data.type === "fill"
                                ? "w-full h-full object-fill"
                                : "w-full h-full object-contain object-center"
                        }`}
                    />
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                            const file = e.target.files?.[0] ?? null;
                            setCurrentFile(file);
                        }}
                    />
                </label>
            )}

            {!currentFile && (
                <label className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded cursor-pointer hover:bg-blue-700 transition">
                    Select Image
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                            const file = e.target.files?.[0] ?? null;
                            setCurrentFile(file);
                        }}
                    />
                </label>
            )}
        </div>
    );
};

export default {
    component: Image,
    structure,
    settings,
    processor,
};
