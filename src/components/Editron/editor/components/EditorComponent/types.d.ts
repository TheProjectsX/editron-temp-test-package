import type { UserConfig } from "../..";
import type { RegisterReturn } from "../../register";
import type {
    AllTypes,
    EditorBlock,
    OutputDataBlock,
} from "../../register/types";

export type EditorComponentProps = {
    values?: EditorBlock[];
    defaultBlock?: AllTypes;
    registers: RegisterReturn[];
    config?: UserConfig;
};

export type EditorComponentSaveHandle = {
    runSave: () => Promise<OutputDataBlock[]>;
};
