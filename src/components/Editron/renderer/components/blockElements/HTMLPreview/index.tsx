import { spacingConfig } from "../libs/styles";
import { makeSrcDoc } from "../libs/utilities";
import CodeView from "./CodeView";
import Iframe from "./Iframe";
import type { HTMLPreviewProps } from "./types";

const HTMLPreview = ({ className = "", style, metadata }: HTMLPreviewProps) => {
    return (
        <div
            className={`${spacingConfig["htmlPreview"]} ${className}`}
            style={style ?? {}}
        >
            {/* Preview */}
            {metadata.data.mode !== "hide" && (
                <div
                    className={`border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-slate-700 bg-[linear-gradient(to_right,#0000001a_1px,transparent_1px),linear-gradient(to_bottom,#0000001a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)]
 bg-[length:40px_40px] bg-[position:0_25px] sm:bg-[position:0_32px] ${
     metadata.data.mode === "reveal" ? "border-b-0" : ""
 }`}
                >
                    <Iframe srcDoc={makeSrcDoc(metadata.data)} />
                </div>
            )}

            {/* Code View */}
            {metadata.data.mode !== "preview" && (
                <CodeView
                    html={metadata.data.html}
                    css={metadata.data.css}
                    js={metadata.data.js}
                />
            )}
        </div>
    );
};

export default {
    type: "html-preview",
    component: HTMLPreview,
};
