import type { CSSProperties } from "react";
import type { AllTypes } from "./register/types";

export type UserConfig = Record<
    AllTypes,
    {
        className?: string;
        style?: CSSProperties
    }
>;

export interface RendererProps {
    config: UserConfig;
}

export type RendererReturn = [React.FC<{ blocks: any[] }>];

declare const Renderer: (props?: RendererProps) => RendererReturn;

export default Renderer;
