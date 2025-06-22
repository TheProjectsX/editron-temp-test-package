import React, { useEffect, useState } from "react";
import { AiOutlineStrikethrough } from "react-icons/ai";
import { GoBold, GoItalic } from "react-icons/go";
import { ImSubscript, ImSuperscript } from "react-icons/im";
// import { IoMdCodeWorking, IoMdLink } from "react-icons/io";
import { MdOutlineFormatUnderlined } from "react-icons/md";

export const RegularInlineTools = [
    {
        name: "Bold",
        icon: GoBold,
        onClick: () => document.execCommand("bold"),
        isActive: () => document.queryCommandState("bold"),
    },
    {
        name: "Italic",
        icon: GoItalic,
        onClick: () => document.execCommand("italic"),
        isActive: () => document.queryCommandState("italic"),
    },
    {
        name: "Underline",
        icon: MdOutlineFormatUnderlined,
        onClick: () => document.execCommand("underline"),
        isActive: () => document.queryCommandState("underline"),
    },
    {
        name: "Strike Through",
        icon: AiOutlineStrikethrough,
        onClick: () => document.execCommand("strikeThrough"),
        isActive: () => document.queryCommandState("strikeThrough"),
    },
    {
        name: "Subscript",
        icon: ImSubscript,
        onClick: () => document.execCommand("subscript"),
        isActive: () => document.queryCommandState("subscript"),
    },
    {
        name: "Superscript",
        icon: ImSuperscript,
        onClick: () => document.execCommand("superscript"),
        isActive: () => document.queryCommandState("superscript"),
    },
];

/* Custom Inline Tools with Control */

let savedRange: Range | null = null;
const saveSelection = () => {
    const sel = window.getSelection();
    if (sel && sel.rangeCount > 0) {
        savedRange = sel.getRangeAt(0);
    }
};

const restoreSelection = () => {
    if (savedRange) {
        const sel = window.getSelection()!;
        sel.removeAllRanges();
        sel.addRange(savedRange);
    }
};

const getAnchorTag = (): HTMLAnchorElement | null => {
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0) return null;

    let node = sel.anchorNode;
    while (node && node !== document.body) {
        if (node instanceof HTMLAnchorElement) return node;
        node = node.parentNode;
    }

    return null;
};

type InlineLinkToolProps = { onActive: () => void; onClose: () => void };

export const InlineLinkTool: React.FC<InlineLinkToolProps> = ({
    onActive,
    onClose,
}) => {
    const [inputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const anchor = getAnchorTag();
        if (anchor) {
            setInputVisible(true);
            setInputValue(anchor.getAttribute("href") || "");
            setIsActive(true);
            saveSelection();
        }
    }, []);

    const handleButtonClick = () => {
        const anchor = getAnchorTag();

        if (anchor) {
            restoreSelection();
            document.execCommand("unlink");
            setInputVisible(false);
            setInputValue("");
            setIsActive(false);
            return;
        }

        if (!inputVisible) {
            saveSelection();
        }

        setInputVisible((v) => !v);
    };

    const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== "Enter") return;

        e.preventDefault();
        restoreSelection();

        const raw = inputValue.trim();
        if (!raw) {
            document.execCommand("unlink");
            setIsActive(false);
        } else {
            const url = /^(https?:\/\/|\/\/)/.test(raw) ? raw : `http://${raw}`;
            document.execCommand("createLink", false, url);
            setIsActive(true);
        }

        setInputVisible(false);
        setInputValue("");
    };

    useEffect(() => {
        if (inputVisible) {
            onActive();
        } else {
            onClose();
        }
    }, [inputVisible]);

    return (
        <div
            className="flex gap-2 items-center"
            onMouseDown={(e) => {
                if ((e.target as HTMLElement).tagName !== "INPUT") {
                    e.preventDefault();
                }
            }}
        >
            <button
                onClick={handleButtonClick}
                className={`text-sm px-2 py-1 rounded border hover:bg-gray-100 ${
                    isActive ? "bg-gray-200" : ""
                }`}
            >
                🔗
            </button>

            {inputVisible && (
                <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleSubmit}
                    placeholder="Enter link"
                    className="text-sm border rounded px-2 py-1 outline-none"
                />
            )}
        </div>
    );
};
