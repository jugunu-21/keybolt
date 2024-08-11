"use client"
import React from 'react';
import { ShiftingContactForm } from "../../components/contact/contact"
import { links } from "@/public/navdata"
import { RoundedDrawerNav } from "../../components/navbar/roundedDrawerNav/roundedDrawerNav"
export default function Home() {
    return (
        <>
            <div className="bg-neutral-950 ">
                <RoundedDrawerNav
                    links={links}
                    navBackground="bg-neutral-950"
                    bodyBackground="bg-white"
                >
                    <div className=" items-center justify-center">
                        <div> <ShiftingContactForm /></div>
                    </div>
                </RoundedDrawerNav>
            </div>

        </>
    )
}