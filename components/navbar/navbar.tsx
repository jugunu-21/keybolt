"use client"
import { links } from "@/public/navdata"
import { useEffect } from "react";
import { RoundedDrawerNav } from "../navbar/roundedDrawerNav/roundedDrawerNav"
import { NeuHero } from "../hero/hero";
import React, { useState } from 'react';
import Link from "next/link";
export const NavExample = () => {
    const [blank,setBlank]=useState(true)
    useEffect(() => {
        const handlePathChange = () => {
            if (typeof window !== 'undefined') {
            
                const pathAfterSlash = window.location.pathname.split('/')[1];
                console.log(pathAfterSlash); // Assuming you want to log it
                if(pathAfterSlash =="contact"){
                    setBlank(false)
                }
            }
        };

        handlePathChange();
    }, []);
      



    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenuOpennProfile, setIsMenuOpennProfile] = useState(false);
    return (
        <div className="bg-neutral-950 ">
            <nav className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <Link
                            href="/"
                            className="font-serif text-red-800 text-xl font-extrabold"
                        >
                            KEYBOLT
                        </Link>
                        <div className=" flex items-center sm:hidden">
                            {/* <!-- Mobile menu button -->*/}

                            <button onClick={() => setIsMenuOpen(true)}  type="button" className=" hideenrelative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none " aria-controls="mobile-menu" aria-expanded="false">

                                <div className="">

                                </div>
                                <svg className={`h-6 w-6 `} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                        </div>

                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <a  href="/" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" aria-current="page">Dashboard</a>
                                    {blank&&<>
                                        <a  href="#testimonial" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Testimonial</a>
                                    <a href="#feature" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Feature</a>
                                    </> }
                                    <a  href="/contact" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contact Us</a>
                                </div>
                            </div>
                        </div>
                        <div onMouseEnter={() => setIsMenuOpennProfile(true)}
                            onMouseLeave={() => setIsMenuOpennProfile(false)} className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button onClick={() => setIsMenuOpennProfile(!isMenuOpennProfile)} type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="absolute -inset-1.5"></span>
                                <span className="sr-only">View notifications</span>
                                <svg onClick={() => setIsMenuOpen(!isMenuOpen)} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">

                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                </svg>
                            </button>

                            <div className="relative ml-3">


                                {isMenuOpennProfile === true && (
                                    <><div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}>
                                      
                                        <a onClick={() => setIsMenuOpennProfile(false)} href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-0">Your Profiles</a>
                                        <a onClick={() => setIsMenuOpennProfile(false)} href="/contact" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-1">sign In</a>
                                        <a onClick={() => setIsMenuOpennProfile(false)} href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-2">Sign out</a>
                                    </div></>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
                <div
               
                onMouseLeave={() => setIsMenuOpen(false)}  id="mobile-menu">

                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {isMenuOpen && (
                            <>
                                <a onClick={() => setIsMenuOpen(false)} href="/" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" aria-current="page">Dashboard</a>
                                {blank&&<> <a onClick={() => setIsMenuOpen(false)} href="#testimonial" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Testimonials</a>
                                <a onClick={() => setIsMenuOpen(false)}  href="#feature" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Features</a>
                                
                              
                           </>}
                           <a onClick={() => setIsMenuOpen(false)} href="/contact" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contact Us</a>
                            </>)}

                    </div>

                </div>
            </nav>


        </div>
    );
};




