import React, {
    Dispatch,
    ReactNode,
    SetStateAction,
    useMemo,
    useState,
} from "react";

export const TopLink = ({
    children,
    setHovered,
    title,
}: {
    children: string;
    setHovered: Dispatch<SetStateAction<null | string>>;
    title: string;
}) => (
    <span
        onMouseEnter={() => setHovered(title)}
        className="cursor-pointer text-neutral-50 transition-colors hover:text-neutral-400"
    >
        {children}
    </span>
);