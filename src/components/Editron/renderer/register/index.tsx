import Paragraph from "../components/blockElements/Paragraph";
import type { AllBlocks, AllTypes } from "./types";

// All Blocks
const AllBlocks = [Paragraph];

export type RegisterReturn = {
    component: React.FC<any>;
    type: AllTypes;
};

export const register = (): RegisterReturn[] => {
    return AllBlocks;
};
