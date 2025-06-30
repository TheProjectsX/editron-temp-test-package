import { makeSrcDoc } from "../libs/utilities";
import CodeView from "./CodeView";
import Iframe from "./Iframe";
import type { HTMLPreviewProps } from "./types";

const HTMLPreview = ({ className = "", style, data }: HTMLPreviewProps) => {
    return (
        <div className={`${className}`} style={style ?? {}}>
            {/* Preview */}
            <div className="px-4 py-4 border border-gray-200">
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
