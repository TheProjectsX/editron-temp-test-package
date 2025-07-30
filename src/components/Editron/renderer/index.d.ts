import type { CSSProperties } from "react";
import type { AllTypes, PluginType } from "./register/types";

export type UserConfig = Record<
    AllTypes,
    {
        className?: string;
        style?: CSSProperties;
    }
>;

export interface RendererProps {
    plugins?: PluginType[] | any[];
    config?: UserConfig;
}

export type RendererReturn = [React.FC<{ blocks: any[] }>];

declare const Renderer: (props?: RendererProps) => RendererReturn;

export default Renderer;
