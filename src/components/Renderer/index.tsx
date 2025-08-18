import Renderer from "../Editron/renderer";
import { TableOfContents } from "../Editron/renderer";

const RendererComponent = ({
    data,
}: {
    data: {
        blocks: Record<string, any>[];
        tableOfContents?: { label: string; id: string }[];
    };
}) => {
    const [Component] = Renderer();

    return (
        <div className="flex flex-col-reverse lg:flex-row gap-2 lg:gap-4 relative">
            <div className="bg-white dark:bg-slate-900 px-4 py-4 max-w-3xl w-full">
                <Component blocks={data.blocks} />
            </div>

            {Array.isArray(data.tableOfContents) &&
                data.tableOfContents.length > 0 && (
                    <div className="flex-none">
                        <div className="bg-white dark:bg-slate-900 px-4 py-4 min-w-52 lg:max-w-56 sticky top-0 lg:h-[100vh] overflow-y-auto">
                            <p className="text-black dark:text-white font-semibold mb-2 text-lg">
                                On This Page
                            </p>
                            <TableOfContents data={data.tableOfContents} />
                        </div>
                    </div>
                )}
        </div>
    );
};

export default RendererComponent;
