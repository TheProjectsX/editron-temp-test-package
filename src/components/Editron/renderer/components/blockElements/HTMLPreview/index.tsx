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
            <div className="border border-b-0 border-gray-200 dark:border-gray-600 bg-gray-400 dark:bg-slate-700 flex justify-center">
                <Iframe srcDoc={makeSrcDoc(metadata.data)} />
            </div>

            {/* Code View */}
            <CodeView
                html={metadata.data.html}
                css={metadata.data.css}
                js={metadata.data.js}
            />
        </div>
    );
};

export default {
    type: "html-preview",
    component: HTMLPreview,
};
