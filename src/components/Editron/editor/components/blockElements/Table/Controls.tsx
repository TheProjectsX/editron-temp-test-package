import Popover from "@theprojectsx/react-popover";
import React, {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useState,
} from "react";
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
import type { Focused } from ".";

export const getCenterX = (el: HTMLElement): number => {
    const parent = el.offsetParent as HTMLElement;
    const elRect = el.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();

    const elCenterX = elRect.left + elRect.width / 2;
    const relativeX = elCenterX - parentRect.left;

    return relativeX;
};

export const getCenterY = (el: HTMLElement): number => {
    const parent = el.offsetParent as HTMLElement;
    const elRect = el.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();

    const elCenterY = elRect.top + elRect.height / 2;
    const relativeY = elCenterY - parentRect.top;

    return relativeY;
};

type ControllerSetFocused = {
    setFocused: React.Dispatch<React.SetStateAction<Focused | null>>;
};

type ControllerProps = {
    setData: React.Dispatch<
        React.SetStateAction<{
            headers: string[] | undefined;
            body: string[][];
        }>
    >;
    setOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ColumnControls = forwardRef<ControllerSetFocused, ControllerProps>(
    ({ setData, setOpened }, ref) => {
        const [left, setLeft] = useState(0);
        const [focused, setFocused] = useState<Focused | null>(null);

        useImperativeHandle(ref, () => ({
            setFocused,
        }));

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
                    <div className="shadow-md border border-gray-200 dark:border-gray-700 rounded-md min-w-40 w-full bg-white dark:bg-gray-800 max-h-64 overflow-auto scrollbar-thin">
                        <button
                            className="editron__popover-button !gap-3"
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
                            className="editron__popover-button !gap-3"
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
                            className="editron__popover-button !gap-3"
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
                    data-name="column-controls"
                    className="absolute -top-7 py-2 -translate-x-1/2 cursor-pointer text-gray-600 dark:text-white hover:text-gray-800 dark:hover:text-gray-300 hidden"
                    style={{
                        left,
                        width: focused
                            ? focused.element.getBoundingClientRect().width
                            : "auto",
                    }}
                >
                    <PiGearFineLight className="block mx-auto" />
                </button>
            </Popover>
        );
    }
);

export const RowControls = forwardRef<ControllerSetFocused, ControllerProps>(
    ({ setData, setOpened }, ref) => {
        const [top, setTop] = useState(0);
        const [focused, setFocused] = useState<Focused | null>(null);

        useImperativeHandle(ref, () => ({
            setFocused,
        }));

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
                    <div className="shadow-md border border-gray-200 dark:border-gray-700 rounded-md min-w-40 w-full bg-white dark:bg-gray-800 max-h-64 overflow-auto scrollbar-thin">
                        <button
                            className="editron__popover-button !gap-3"
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
                            className="editron__popover-button !gap-3"
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
                            className="editron__popover-button !gap-3"
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
                    data-name="row-controls"
                    className="absolute -left-7 px-2 -translate-y-1/2 cursor-pointer text-gray-600 dark:text-white hover:text-gray-800 dark:hover:text-gray-300 hidden"
                    style={{
                        top,
                        height: focused
                            ? focused.element.getBoundingClientRect().height
                            : "auto",
                    }}
                >
                    <PiGearFineLight className="block mx-auto" />
                </button>
            </Popover>
        );
    }
);
