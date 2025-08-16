-   Fix re rendering on state change [X]
-   Create a html filter / parser [X]
-   Make Modular Blocks

    -   export a object containing `component`, `demo`, `structure` etc [X]

-   Create EditorBlock and add in `editor/components/controls` , `editor/components/BlockViewer` [X]
-   After creating "register" update `editor/components/controls/AddButtonPopoverContent` for BlockStructure [XXX] ''
-   Drill the registered component, structure, demo to their desired places (including the upper TODO) [X]
-   After "Move" hover doesn't work on same block [X]
-   There is something wrong with the hover controls movement [Got the problem, but not sure what is causing it, so, Best of luck Future Me!] [X] [Error: Was using child elements to get the top size. Solution: check if the target has `data-name` == `block-editor`]
-   Cause we are using `focusedBlock.block` when func initialized, the new data is not being used. Where? `handleTransformUpdate` in `controls` [X]
-   Create Transformer to transform from state data to export data [X]
-   Create Inline Toolbar. Where the Toolbar will primarily use `document.execCommand` even if it's deprecated [X]

-   Finish the Link Inline Tool [X]

-   Add a Code Expand or Scrollbar in Code view [X]
-   Add resize the preview screen
-   HTML preview, remove layout edit. and add html, css, js tab mode [X]
-   Add Line Wrap toggle [X]
-   Add scrollbar modifier [X]
-   Add pre processor in the Block itself [X]
-   Make a utils file for EditorComponent [X]
-   Modify react-popover so that if popover is closed, hover visible also does not work [X]

-   Add Enter and Backspace func for Table [X]

-   ISSUE:

    -   On mouseEnter and focus changed, the whole component is rerendering, thus, the onBlur is not working [X]

-   Add Dark mode support [X]

-   Fix Toolbar Position [X]

-   EDITED: (Editor)
    code => index.ts
    htmlpreview => index.ts
    heading => index.ts (!)

Remove Demos -> Removed from use, just remove from blocks
No need for block's `output` type
Instead, we need `config` type with `defaults` in the block FC

For reference >
from block types >

-   adding `tag` inside `data` and not separate
-   Changing names from `XXData` to `data`
-   adding `config`
    -Remove `export` from `data` and `config`
-   Fix `structure`

Final example:

```
type data = {
    tag: "pre";
    label?: string;
    code: string;
};

type config = {};

export type CodeBlock = {
    type: "code";
    data: data;
    config: config;
};

export type CodeProps = Omit<CodeBlock, "type"> & {
    className?: string;
    onUpdate: (value: data) => void;
};

```

-   Removed `demo` from all `meta` of blocks
-   Changed `EditorBlock` to explicit type
-   Removed use of Types from Block
-   Changed `AllBlocks` to explicit type
-   Added `config` in props data and sending them to the `blocks`
-   Updated `renderer` blocks and types based on the editor changes
