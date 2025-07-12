import { useEffect, useState } from "react";
import { TbSquareDot } from "react-icons/tb";

const getCenterX = (el: HTMLElement): number => {
    const parent = el.offsetParent as HTMLElement;
    const elRect = el.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();

    const elCenterX = elRect.left + elRect.width / 2;
    const relativeX = elCenterX - parentRect.left;

    return relativeX;
};

const getCenterY = (el: HTMLElement): number => {
    const parent = el.offsetParent as HTMLElement;
    const elRect = el.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();

    const elCenterY = elRect.top + elRect.height / 2;
    console.log(elCenterY,  parentRect.top)
    const relativeY = elCenterY - parentRect.top;

    return relativeY;
};

export const ColumnControls = ({
    focused,
}: {
    focused: {
        element: HTMLElement;
        idx: number;
    } | null;
    setData: React.Dispatch<
        React.SetStateAction<{
            headers: string[] | undefined;
            body: string[][];
        }>
    >;
}) => {
    const [left, setLeft] = useState<number>();

    useEffect(() => {
        if (!focused) return;
        setLeft(getCenterX(focused.element));
    }, [focused]);

    if (!focused) return;

    return (
        <button
            className="absolute -top-4 text-sm text-red-600"
            style={{ left }}
        >
            <TbSquareDot />
        </button>
    );
};

export const RowControls = ({
    focused,
}: {
    focused: {
        element: HTMLElement;
        idx: number;
    } | null;
    setData: React.Dispatch<
        React.SetStateAction<{
            headers: string[] | undefined;
            body: string[][];
        }>
    >;
}) => {
    const [top, setTop] = useState<number>();

    useEffect(() => {
        if (!focused) return;

        setTop(getCenterY(focused.element));
    }, [focused]);

    if (!focused) return;
    return (
        <button
            className="absolute -left-5 text-sm text-green-500"
            style={{ top }}
        >
            <TbSquareDot />
        </button>
    );
};
