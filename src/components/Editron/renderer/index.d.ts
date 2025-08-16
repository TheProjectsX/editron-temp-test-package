import type { CSSProperties } from "react";
import type { PluginType } from "./register/types";

export type AllTypes = string;

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

export type RendererReturn = [React.FC<{ blocks: { blocks: any[] } | any[] }>];

declare const Renderer: (props?: RendererProps) => RendererReturn;

export default Renderer;
