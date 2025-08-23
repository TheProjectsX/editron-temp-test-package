import RendererComponent from "./components/RendererComponent";
import TableOfContents from "./components/tableOfContents";
import { register } from "./register";
import "../styles/index.css"
import "../styles/renderer.css";

const Renderer = ({ config = {}, plugins = [] } = {}) => {
    const registers = register(plugins);

    const Component = ({ blocks }) => {
        return (
            <RendererComponent
                registers={registers}
                blocks={Array.isArray(blocks) ? blocks : blocks.blocks}
                config={config}
            />
        );
    };

    return [Component];
};

export default Renderer;
export { TableOfContents };
