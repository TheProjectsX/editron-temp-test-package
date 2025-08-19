import type { CSSProperties, JSX } from "react";

// -------------------
// Prebuilt Block Types
// -------------------
export type AllTypes =
    | "paragraph"
    | "heading"
    | "list"
    | "table"
    | "divider"
    | "code"
    | "quote"
    | "image"
    | "html-preview";

// -------------------
// Renderer Block
// -------------------
export type RendererBlock = {
    id: string;
    type: AllTypes | string; // string = custom user type
    data: { tag: string } & Record<string, any>;
};

// -------------------
// Plugin System
// -------------------
export type PluginProps = {
    className: string;
    style?: CSSProperties;
    metadata: { tag: string } & Record<string, any>;
};

export type PluginType = {
    type: "string"; // user-defined type
    component: React.FC<PluginProps>;
};

// -------------------
// User Configuration
// -------------------
export type UserConfig = Record<
    AllTypes | (string & {}),
    {
        className?: string;
        style?: CSSProperties;
    }
>;

// -------------------
// Renderer Props
// -------------------
export interface RendererProps {
    plugins?: PluginType[] | any[];
    config?: Partial<UserConfig>;
}

// -------------------
// Table Of Contents
// -------------------
export type TableOfContentsData =
    | {
          blocks?: any;
          tableOfContents?: { label: string; id: string }[];
      }
    | { label: string; id: string }[];

declare const TableOfContents: (props: {
    data: TableOfContentsData;
    className?: string;
    children?: (label: string, href: string) => React.ReactElement;
}) => JSX.Element[];

// -------------------
// Renderer Return & Component
// -------------------
export type RendererReturn = [
    React.FC<{ blocks: { blocks: RendererBlock[] } | RendererBlock[] }>
];

declare const Renderer: (props?: RendererProps) => RendererReturn;

// -------------------
// Main Exports
// -------------------
export default Renderer;
export { TableOfContents };
