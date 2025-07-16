import type { AllBlocks, AllTypes } from "./types";

import Heading from "../components/blockElements/Heading";
import Paragraph from "../components/blockElements/Paragraph";
import Divider from "../components/blockElements/Divider";
import List from "../components/blockElements/List";
import Quote from "../components/blockElements/Quote";
import Code from "../components/blockElements/Code";
import Image from "../components/blockElements/Image";
import HTMLPreview from "../components/blockElements/HTMLPreview";
import Table from "../components/blockElements/Table";

// All Blocks
const AllBlocks = [
    Paragraph,
    Heading,
    List,
    Divider,
    Code,
    Quote,
    Image,
    HTMLPreview,
    Table
];

export type RegisterReturn = {
    component: React.FC<any>;
    type: AllTypes;
};

export const register = (): RegisterReturn[] => {
    const blocks: RegisterReturn[] = AllBlocks.map((block) => ({
        type: block.type as AllTypes,
        component: block.component,
    }));

    return blocks;
};
