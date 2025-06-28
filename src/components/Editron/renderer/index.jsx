import RendererComponent from "./components/RendererComponent";
import { register } from "./register";

const Renderer = () => {
    const registers = register();

    const Component = ({ blocks }) => {
        return <RendererComponent registers={registers} blocks={blocks} />;
    };

    return [Component];
};

export default Renderer;
