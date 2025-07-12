import Popover from "@theprojectsx/react-popover";
import React, { useEffect, useState } from "react";
import {
    FaArrowDown,
    FaArrowLeft,
    FaArrowRight,
    FaArrowUp,
} from "react-icons/fa";
import { MdRemove } from "react-icons/md";
import { PiGearFineLight } from "react-icons/pi";
import {
    addColumn,
    addColumn2D,
    addRow2D,
    isArray,
    removeColumn,
    removeColumn2D,
    removeRow2D,
} from "../libs/utilities";

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
    const relativeY = elCenterY - parentRect.top;

    return relativeY;
};

export const ColumnControls = React.memo(
    ({
        focused,
        setData,
        setOpened,
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
        setOpened: React.Dispatch<React.SetStateAction<boolean>>;
    }) => {
        const [left, setLeft] = useState<number>();

        useEffect(() => {
            if (!focused) return;
            setLeft(getCenterX(focused.element));
        }, [focused]);

        return (
            <Popover
                gap={6}
                position="right"
                axis="top"
                parentStyles={{ position: "static" }}
                onStatusChanged={setOpened}
                content={
                    <div className="shadow-md border border-gray-200 rounded-lg min-w-40 w-full bg-white max-h-64 overflow-auto scrollbar-thin">
                        <button
                            className="popoverButton !gap-3"
                            onClick={() => {
                                setData((prev) => ({
                                    headers: isArray(prev.headers)
                                        ? addColumn(
                                              prev.headers!,
                                              focused?.idx! + 1,
                                              ""
                                          )
                                        : prev.headers,
                                    body: addColumn2D(
                                        prev.body,
                                        focused?.idx! + 1,
                                        ""
                                    ),
                                }));
                            }}
                        >
                            <span className="size-5 border border-gray-500 rounded-sm flex items-center justify-center bg-white">
                                <FaArrowRight className="text-xs" />
                            </span>
                            Add Column to Right
                        </button>
                        <button
                            className="popoverButton !gap-3"
                            onClick={() => {
                                setData((prev) => ({
                                    headers: isArray(prev.headers)
                                        ? addColumn(
                                              prev.headers!,
                                              focused?.idx! - 1,
                                              ""
                                          )
                                        : prev.headers,
                                    body: addColumn2D(
                                        prev.body,
                                        focused?.idx! - 1,
                                        ""
                                    ),
                                }));
                            }}
                        >
                            <span className="size-5 border border-gray-500 rounded-sm flex items-center justify-center bg-white">
                                <FaArrowLeft className="text-xs" />
                            </span>
                            Add Column to Left
                        </button>
                        <button
                            className="popoverButton !gap-3"
                            onClick={() => {
                                setData((prev) => ({
                                    headers:
                                        Array.isArray(prev.headers) &&
                                        prev.headers.length > 0
                                            ? removeColumn(
                                                  prev.headers,
                                                  focused?.idx!
                                              )
                                            : prev.headers,
                                    body: removeColumn2D(
                                        prev.body,
                                        focused?.idx!
                                    ),
                                }));
                            }}
                        >
                            <span className="size-5 border border-gray-500 rounded-sm flex items-center justify-center bg-white">
                                <MdRemove className="text-xs" />
                            </span>
                            Remove Column
                        </button>
                    </div>
                }
            >
                <button
                    className="absolute -top-6 p-1 -translate-x-1/2 cursor-pointer text-gray-600 hover:text-gray-800"
                    style={{ left }}
                    hidden={!focused}
                >
                    <PiGearFineLight />
                </button>
            </Popover>
        );
    }
);

export const RowControls = React.memo(
    ({
        focused,
        setData,
        setOpened,
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
        setOpened: React.Dispatch<React.SetStateAction<boolean>>;
    }) => {
        const [top, setTop] = useState<number>();

        useEffect(() => {
            if (!focused) return;

            setTop(getCenterY(focused.element));
        }, [focused]);

        return (
            <Popover
                gap={6}
                position="right"
                axis="top"
                parentStyles={{ position: "static" }}
                onStatusChanged={setOpened}
                content={
                    <div className="shadow-md border border-gray-200 rounded-lg min-w-40 w-full bg-white max-h-64 overflow-auto scrollbar-thin">
                        <button
                            className="popoverButton !gap-3"
                            onClick={() => {
                                setData((prev) => ({
                                    headers: prev.headers,
                                    body: addRow2D(
                                        prev.body,
                                        focused?.idx! - 1,
                                        ""
                                    ),
                                }));
                            }}
                        >
                            <span className="size-5 border border-gray-500 rounded-sm flex items-center justify-center bg-white">
                                <FaArrowUp className="text-xs" />
                            </span>
                            Add Column to Up
                        </button>
                        <button
                            className="popoverButton !gap-3"
                            onClick={() => {
                                setData((prev) => ({
                                    headers: prev.headers,
                                    body: addRow2D(
                                        prev.body,
                                        focused?.idx! + 1,
                                        ""
                                    ),
                                }));
                            }}
                        >
                            <span className="size-5 border border-gray-500 rounded-sm flex items-center justify-center bg-white">
                                <FaArrowDown className="text-xs" />
                            </span>
                            Add Column to Down
                        </button>
                        <button
                            className="popoverButton !gap-3"
                            onClick={() => {
                                setData((prev) => ({
                                    headers: prev.headers,
                                    body: removeRow2D(prev.body, focused?.idx!),
                                }));
                            }}
                        >
                            <span className="size-5 border border-gray-500 rounded-sm flex items-center justify-center bg-white">
                                <MdRemove className="text-xs" />
                            </span>
                            Remove Row
                        </button>
                    </div>
                }
            >
                <button
                    className="absolute -left-5 -translate-y-1/2 cursor-pointer text-gray-600 hover:text-gray-800"
                    style={{ top }}
                    hidden={!focused}
                >
                    <PiGearFineLight />
                </button>
            </Popover>
        );
    }
);
