import type { UserConfig } from "../..";
import type { RegisterReturn } from "../../register";
import type { AllTypes } from "../../register/types";
import BlockViewer from "../BlockViewer";

interface RendererComponentProps {
    blocks: any[];
    registers: RegisterReturn[];
    config: UserConfig;
}

const RendererComponent = ({
    blocks,
    registers,
    config,
}: RendererComponentProps) => {
    return (
        <>
            {blocks.map((block) => {
                const currentBlock = registers.find(
                    (register) => register.type === block.type
                );
                const currentConfig = config[block.type as AllTypes];

                if (!currentBlock) return;

                return (
                    <BlockViewer
                        className="dark:text-gray-100"
                        key={block.id}
                        Component={currentBlock.component}
                        metadata={block}
                        config={currentConfig ?? {}}
                    />
                );
            })}
        </>
    );
};

export default RendererComponent;
