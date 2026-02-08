import React from "react";

export function Card({
    title,
    children,
}: {
    title: string;
    children?: React.ReactNode;
}): JSX.Element {
    return (
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
            <h1 className="text-xl font-semibold text-slate-800 border-b border-slate-100 pb-3">
                {title}
            </h1>
            <div className="pt-4">{children}</div>
        </div>
    );
}
