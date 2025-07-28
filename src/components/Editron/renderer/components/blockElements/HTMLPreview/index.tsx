import { spacingConfig } from "../libs/styles";
import { makeSrcDoc } from "../libs/utilities";
import CodeView from "./CodeView";
import Iframe from "./Iframe";
import type { HTMLPreviewProps } from "./types";

const HTMLPreview = ({ className = "", style, data }: HTMLPreviewProps) => {
    return (
        <div
            className={`${spacingConfig["htmlPreview"]} ${className}`}
            style={style ?? {}}
        >
            {/* Preview */}
            <div className="border border-b-0 border-gray-200 dark:border-gray-600 bg-gray-400 dark:bg-slate-700 flex justify-center">
                <Iframe srcDoc={makeSrcDoc(data)} />
            </div>

            {/* Code View */}
            <CodeView html={data.html} css={data.css} js={data.js} />
        </div>
    );
};

export default {
    type: "html-preview",
    component: HTMLPreview,
};
