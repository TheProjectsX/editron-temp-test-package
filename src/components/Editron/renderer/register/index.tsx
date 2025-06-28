import type { AllBlocks, AllTypes } from "./types";

import Heading from "../components/blockElements/Heading";
import Paragraph from "../components/blockElements/Paragraph";
import Divider from "../components/blockElements/Divider";
import List from "../components/blockElements/List";

// All Blocks
const AllBlocks = [Paragraph, Heading, List, Divider];

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
