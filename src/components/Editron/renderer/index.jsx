import React from "react";
import RendererComponent from "./components/RendererComponent";

const Renderer = () => {
    const Component = (values) => {
        return <RendererComponent />;
    };

    return <div>Renderer</div>;
};

export default Renderer;
