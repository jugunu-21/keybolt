import {LinkType} from "../type"
import { AnimatePresence, motion } from "framer-motion";
import React, {
    Dispatch,
    ReactNode,
    SetStateAction,
    useMemo,
    useState,
} from "react";
import { TopLink } from "../topLink/topLink";
export const DesktopLinks = ({
    links,
    setHovered,
    hovered,
    activeSublinks,
}: {
    links: LinkType[];
    setHovered: Dispatch<SetStateAction<string | null>>;
    hovered: string | null;
    activeSublinks: LinkType["sublinks"];
}) => {
    return (
        <div className="ml-9 mt-0.5 hidden md:block">
            <div className="flex gap-6">
                {links.map((l) => (
                    <TopLink key={l.title} setHovered={setHovered} title={l.title}>
                        {l.title}
                    </TopLink>
                ))}
            </div>
            <AnimatePresence mode="popLayout">
                {hovered && (
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                        }}
                        className="space-y-4 py-6"
                    >
                        {activeSublinks.map((l) => (
                            <a
                                className="block text-2xl font-semibold text-neutral-50 transition-colors hover:text-neutral-400"
                                href={l.href}
                                key={l.title}
                            >
                                {l.title}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
