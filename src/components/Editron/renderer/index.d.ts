export type UserConfig = {};

export interface RendererProps {
    config: UserConfig;
}

export type RendererReturn = [React.FC<{ blocks: any[] }>];

declare const Renderer: (props?: RendererProps) => RendererReturn;

export default Renderer;
