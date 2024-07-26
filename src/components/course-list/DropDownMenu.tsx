import React, { useState } from 'react';
import ThreeDots from "../../assets/ThreeDots.svg";
import { FaArrowUp } from "react-icons/fa6";
import { GoTrash } from 'react-icons/go';
interface DropdownMenuProps {
    onMoveToTop: () => void;
    onMoveToBottom: () => void;
    onRemove: () => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ onMoveToTop, onMoveToBottom, onRemove }) => {
    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen);
    return (
        <div className="relative inline-block text-left">
            <div>
                <img
                    src={ThreeDots}
                    className="w-3 h-6 cursor-default"
                    id="options-menu"
                    aria-haspopup="true"
                    aria-expanded="true"
                    onClick={() => setIsOpen(!isOpen)}
                >
                </img>
            </div>

            {isOpen && (
                <div
                    className="origin-top-right absolute -right-50 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 "
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                >
                    <div className="py-1" role="none">
                        <button
                            className="flex gap-1 items-center px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100 font-semibold"
                            role="menuitem"
                            onClick={() => {
                                onMoveToTop();
                                setIsOpen(false);
                            }}
                        >
                            <FaArrowUp />
                            Move To Top
                        </button>
                        <button
                            className=" flex gap-2 items-center px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100 font-semibold"
                            role="menuitem"
                            onClick={() => {
                                onMoveToBottom();
                                setIsOpen(false);
                            }}
                        >
                            <FaArrowUp />
                            Move To Bottom
                        </button>
                        <button
                            className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 w-full text-left hover:bg-gray-100 font-semibold"
                            role="menuitem"
                            onClick={() => {
                                onRemove();
                                setIsOpen(false);
                            }}
                        >
                            <GoTrash />   Remove
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
