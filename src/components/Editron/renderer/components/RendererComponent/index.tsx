import type { RegisterReturn } from "../../register/types";

interface RendererComponentProps {
    values: any[];
    registers: RegisterReturn;
}

const RendererComponent = ({}: RendererComponentProps) => {
    return <div>RendererComponent</div>;
};

export default RendererComponent;
