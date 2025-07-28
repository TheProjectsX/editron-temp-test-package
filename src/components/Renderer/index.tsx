import Renderer from "../Editron/renderer";

const RendererComponent = ({ blocks }: { blocks: Record<string, any>[] }) => {
    const [Component] = Renderer();

    return (
        <div className="bg-white dark:bg-slate-900 px-4 py-4 w-full">
            <Component blocks={blocks} />
        </div>
    );
};

export default RendererComponent;
