import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { LinkType} from "../type"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
 export const MobileLinks = ({ links, open }: { links: LinkType[]; open: boolean }) => {
    const [subtitle, setSubtitle] = useState('');
    return (
        <AnimatePresence mode="popLayout">
            {open && (
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
                    className="grid grid-cols-2 gap-6 py-2 mt-0 md:hidden"
                >
                    {links.map((l) => (
                        <DropdownMenu key={l.title}>
                            <DropdownMenuTrigger className="text-stone-400 ">{l.title}</DropdownMenuTrigger>
                           
                                <DropdownMenuContent >
                                {l.sublinks.map((sl) => (
                                   <div key={sl.title}>
                                      <DropdownMenuLabel className="text-stone-400 text-xsm">{sl.title}</DropdownMenuLabel>
                                      <DropdownMenuSeparator />
                                   </div>
                        
                                  
                                ))}

                                </DropdownMenuContent>
                           
                        </DropdownMenu>

                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );
};