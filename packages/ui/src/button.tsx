"use client";

import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    onClick: () => void;
}

export const Button = ({ onClick, children }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            type="button"
            className="text-white bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-200 font-semibold rounded-xl text-sm px-8 py-3 transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98]"
        >
            {children}
        </button>
    );
};
