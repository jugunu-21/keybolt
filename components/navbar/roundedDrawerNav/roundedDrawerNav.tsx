import React, {
    Dispatch,
    ReactNode,
    SetStateAction,
    useMemo,
    useState,
} from "react";
import { LinkType } from "../type";
import {Logo} from "../logo/logo"
import { DesktopLinks } from "../desktopLinks/desktopLinks";
import {MobileLinks} from "../mobileLink/mobileLink"
import { FiMenu } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
 export const RoundedDrawerNav = ({
    children,
    navBackground,
    bodyBackground,
    links,
}: {
    navBackground: string;
    bodyBackground: string;
    children?: ReactNode;
    links: LinkType[];
}) => {
    const [hovered, setHovered] = useState<string | null>(null);
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
 
    const activeSublinks = useMemo(() => {
        if (!hovered) return [];
        const link = links.find((l) => l.title === hovered);

        return link ? link.sublinks : [];
    }, [hovered]);

    return (
        <>
            <nav
                onMouseLeave={() => setHovered(null)}
                className={`${navBackground} p-4`}
            >
                <div className="flex items-start justify-between">
                    <div className="flex items-start">
                        <Logo />
                        <DesktopLinks
                            links={links}
                            setHovered={setHovered}
                            hovered={hovered}
                            activeSublinks={activeSublinks}
                        />
                    </div>
                    <button className="hidden rounded-md bg-indigo-500 px-3 py-1.5 text-sm text-neutral-50 transition-colors hover:bg-indigo-600 md:block">
                        <span className="font-bold">Get started - </span> no CC required
                    </button>
                    <button
                        onClick={() => setMobileNavOpen((pv) => !pv)}
                        className="mt-0.5 block text-2xl text-neutral-50 md:hidden"
                    >
                        <FiMenu />
                    </button>
                </div>
                <MobileLinks links={links} open={mobileNavOpen} />
            </nav>
            <motion.main layout className={`${navBackground} px-2 pb-2`}>
                <div className={`${bodyBackground} rounded-3xl`}>{children}</div>
            </motion.main>
        </>
    );
};