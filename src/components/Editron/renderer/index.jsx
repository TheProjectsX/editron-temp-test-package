import RendererComponent from "./components/RendererComponent";
import { register } from "./register";
import "../styles/renderer.css"

const Renderer = ({ config = {}, plugins = [] } = {}) => {
    const registers = register(plugins);

    const Component = ({ blocks }) => {
        return (
            <RendererComponent
                registers={registers}
                blocks={blocks}
                config={config}
            />
        );
    };

    return [Component];
};

export default Renderer;
