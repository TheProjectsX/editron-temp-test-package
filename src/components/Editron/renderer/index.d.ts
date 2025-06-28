export type UserConfig = {};

export interface RendererProps {
    config: UserConfig;
}

export type RendererReturn = [React.FC<{ values: any[] }>];

declare const Renderer: (props?: RendererProps) => RendererReturn;

export default Renderer;
