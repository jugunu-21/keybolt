import React, {
    Dispatch,
    ReactNode,
    SetStateAction,
    useMemo,
    useState,
} from "react";

import { FiMenu } from "react-icons/fi";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {links} from "@/public/navdata"
import {RoundedDrawerNav} from "../navbar/roundedDrawerNav/roundedDrawerNav"
export const RoundedDrawerNavExample = () => {

    return (
        <div className="bg-neutral-950">
            <RoundedDrawerNav
                links={links}
                navBackground="bg-neutral-950"
                bodyBackground="bg-white"
            >
                <div className="flex flex-col items-center justify-center px-12 py-32">
                    <p className="text-center">
                        Your hero section content goes here {":)"}
                    </p>
                </div>
            </RoundedDrawerNav>
        </div>
    );
};




