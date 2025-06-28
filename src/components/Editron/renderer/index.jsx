import RendererComponent from "./components/RendererComponent";
import { register } from "./register";

const Renderer = ({ config = {} } = {}) => {
    const registers = register();

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
