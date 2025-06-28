import type { RegisterReturn } from "../../register";
import BlockViewer from "../BlockViewer";

interface RendererComponentProps {
    blocks: any[];
    registers: RegisterReturn[];
}

const RendererComponent = ({ blocks, registers }: RendererComponentProps) => {
    return (
        <>
            {blocks.map((block) => {
                const currentBlock = registers.find(
                    (register) => register.type === block.type
                );

                if (!currentBlock) return;

                return (
                    <BlockViewer
                        key={block.id}
                        Component={currentBlock.component}
                        metadata={block}
                    />
                );
            })}
        </>
    );
};

export default RendererComponent;
