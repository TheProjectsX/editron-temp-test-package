import { useReducer } from "react";
import type { EditorBlock } from "../../register/types";
import { nanoid } from "nanoid/non-secure";

export type BlockActions =
    | {
          type: "INSERT";
          currentId: string;
          payload: Omit<EditorBlock, "id">;
      }
    | {
          type: "UPDATE";
          id: string;
          payload: Partial<EditorBlock>;
      }
    | {
          type: "DELETE";
          id: string;
      }
    | {
          type: "MOVE_UP";
          id: string;
      }
    | {
          type: "MOVE_DOWN";

          id: string;
      };

const BlockReducers = (state: EditorBlock[], action: BlockActions) => {
    switch (action.type) {
        case "INSERT": {
            const currentIdx = state.findIndex(
                (block) => block.id === action.currentId
            );

            const preEndIdx =
                currentIdx +
                ((state[currentIdx]?.data as any)?.html === "" ? 0 : 1);
            const postEndIdx = currentIdx + 1;

            return [
                ...state.slice(0, preEndIdx),
                { ...action.payload, id: nanoid(10) } as EditorBlock,
                ...state.slice(postEndIdx),
            ];
        }

        case "UPDATE": {
            return state.map((block) =>
                block.id === action.id
                    ? ({ ...block, ...action.payload } as EditorBlock)
                    : block
            );
        }

        case "DELETE": {
            return state.filter((block) => block.id !== action.id);
        }

        case "MOVE_UP": {
            const currentIdx = state.findIndex(
                (block) => block.id === action.id
            );
            if (currentIdx <= 0) return state;

            const newArr = [...state];

            const item = newArr.splice(currentIdx, 1)[0];
            newArr.splice(currentIdx - 1, 0, item);

            return newArr;
        }

        case "MOVE_DOWN": {
            const currentIdx = state.findIndex(
                (block) => block.id === action.id
            );
            if (currentIdx >= state.length - 1) return state;

            const newArr = [...state];

            const item = newArr.splice(currentIdx, 1)[0];
            newArr.splice(currentIdx + 1, 0, item);

            return newArr;
        }

        default:
            return state;
    }
};

const useBlockForge = (
    givenValues: EditorBlock[] = []
): [EditorBlock[], React.Dispatch<BlockActions>] => {
    const [state, dispatch] = useReducer(BlockReducers, givenValues);

    return [state, dispatch];
};

export default useBlockForge;
