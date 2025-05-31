import { useReducer } from "react";
import type { Block } from "../../types/blocks";

export type BlockActions =
    | {
          type: "INSERT";
          currentId: string;
          payload: Omit<Block, "id">;
      }
    | {
          type: "UPDATE";
          payload: Block;
      }
    | {
          type: "DELETE";
          payload: Block;
      }
    | {
          type: "MOVE_UP";
          id: string;
      }
    | {
          type: "MOVE_DOWN";
          id: string;
      };

const BlockReducers = (state: Block[], action: BlockActions) => {
    switch (action.type) {
        case "INSERT":
            return state;

        case "UPDATE":
            return state;

        case "DELETE":
            return state;

        case "MOVE_UP":
            return state;

        case "MOVE_DOWN":
            return state;

        default:
            return state;
    }
};

const useBlockForge = (
    givenValues: Block[] = []
): [Block[], React.Dispatch<BlockActions>] => {
    const [state, dispatch] = useReducer(BlockReducers, givenValues);

    return [state, dispatch];
};

export default useBlockForge;
