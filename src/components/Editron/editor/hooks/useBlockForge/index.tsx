import { useReducer } from "react";
import type { Block } from "../../types/blocks";
import { nanoid } from "nanoid";

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
            const currentIdx = state.findIndex(
                (block) => block.id === action.currentId
            );

            const preEndIdx =
                currentIdx +
                (["heading", "paragraph"].includes(state[currentIdx].type) &&
                "text" in state[currentIdx].data &&
                state[currentIdx].data.text === ""
                    ? 0
                    : 1);
            const postEndIdx = currentIdx + 1;

            return [
                ...state.slice(0, preEndIdx),
                { ...action.payload, id: nanoid(10) } as Block,
                ...state.slice(postEndIdx),
            ];

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
