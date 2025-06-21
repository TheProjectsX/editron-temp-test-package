import { useEffect, useState } from "react";
import useSelectionPosition from "./useSelectionPosition";
import { createPortal } from "react-dom";
import { makeBold } from "./utils";
// import { makeBold } from "./utils";

const InlineToolbar = () => {
    const position = useSelectionPosition();
    const [rendered, setRendered] = useState(false);

    useEffect(() => {
        console.log(position);
    }, [position]);

    useEffect(() => setRendered(true), []);

    if (!position || !rendered) return null;

    const Toolbar = (
        <div
            className="absolute bg-white px-4 py-2 shadow-[0_0_6px_rgba(0,0,0,0.15)] rounded-lg"
            style={{
                top: position.bottom + 4,
                left: position.left,
            }}
        >
            <button
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => makeBold()}
            >
                Bold
            </button>
        </div>
    );

    return createPortal(Toolbar, document.body);
};

export default InlineToolbar;
