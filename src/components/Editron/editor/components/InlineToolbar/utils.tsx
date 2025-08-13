import React, { useEffect, useState } from "react";
import { AiOutlineStrikethrough } from "react-icons/ai";
import { GoBold, GoItalic } from "react-icons/go";
import { ImSubscript, ImSuperscript } from "react-icons/im";
import { LuLink2, LuLink2Off } from "react-icons/lu";
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

export const InlineTools = RegularInlineTools.map((tool) => () => (
    <button
        key={tool.name}
        title={tool.name}
        className={`text-sm p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-sm cursor-pointer ${
            tool.isActive() ? "text-blue-500" : ""
        }`}
        onMouseDown={(e) => e.preventDefault()}
        onClick={tool.onClick}
    >
        <tool.icon />
    </button>
));

/* Custom Inline Tools with Control */

// Save Selection and Restore Selection

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

type InlineLinkToolProps = {
    onActive: () => void;
    onClose: () => void;
    restoreSelection: () => void;
};

export const InlineLinkTool: React.FC<InlineLinkToolProps> = ({
    onActive,
    onClose,
    restoreSelection,
}) => {
    const [inputVisible, setInputVisible] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>("");
    const [isActive, setIsActive] = useState(false);

    // Run Active or Close Function based on input visibility
    useEffect(() => {
        if (inputVisible) {
            onActive();
        } else {
            onClose();
        }
    }, [inputVisible]);

    useEffect(() => {
        const anchor = getAnchorTag();
        if (anchor) {
            setInputValue(anchor.getAttribute("href") || "");
            setIsActive(true);
            // saveSelection();
        }
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const raw = inputValue.trim();
        if (!raw) {
            restoreSelection();
            document.execCommand("unlink");
            setIsActive(false);
        } else {
            const url = /^(https?:\/\/|\/\/)/.test(raw) ? raw : `http://${raw}`;
            restoreSelection();
            document.execCommand("createLink", false, url);
            setIsActive(true);
        }

        setInputVisible(false);
        setInputValue("");
    };

    return (
        <div className="flex items-center gap-2">
            <button
                title={"Insert Link (Under construction)"}
                className={`text-sm p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-sm cursor-pointer`}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => setInputVisible((prev) => !prev)}
            >
                {isActive ? <LuLink2Off /> : <LuLink2 />}
            </button>

            {inputVisible && (
                <form onSubmit={handleSubmit}>
                    <input
                        name="url"
                        type="text"
                        value={inputValue}
                        // onMouseDown={(e) => {
                        //     e.preventDefault();
                        // }}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Enter an URL"
                        className="text-sm border border-gray-200 dark:border-gray-700 rounded px-2 py-0.5 outline-none"
                    />
                </form>
            )}
        </div>
    );
};
