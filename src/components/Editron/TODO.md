-   Fix re rendering on state change [X]
-   Create a html filter / parser [X]
-   Make Modular Blocks

    -   export a object containing `component`, `demo`, `structure` etc

-   Create EditorBlock and add in `editor/components/controls` , `editor/components/BlockViewer` [X]
-   After creating "register" update `editor/components/controls/AddButtonPopoverContent` for BlockStructure [XXX] ''
-   Drill the registered component, structure, demo to their desired places (including the upper TODO) [X]
-   After "Move" hover doesn't work on same block [X]
-   There is something wrong with the hover controls movement [Got the problem, but not sure what is causing it, so, Best of luck Future Me!] [X] [Error: Was using child elements to get the top size. Solution: check if the target has `data-name` == `block-editor`]
-   Cause we are using `focusedBlock.block` when func initialized, the new data is not being used. Where? `handleTransformUpdate` in `controls` [X]
-   Create Transformer to transform from state data to export data
