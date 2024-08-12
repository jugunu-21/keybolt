
"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { FiMenu, FiArrowRight } from "react-icons/fi";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const FlipNavWrapper = () => {
  return (
    <div className="bg-gray-50">
      <FlipNav />
      <div className="h-72 "  />
    
    </div>
  );
};
const FlipNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white p-4 border-b-[1px] border-gray-200 flex items-center justify-between relative">
      <NavLeft setIsOpen={setIsOpen} />
      <NavRight />
      <NavMenu isOpen={isOpen} />
    </nav>
  );
};
const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    
    <Image src="/svg/logo.png" width={30} height={20} alt="img"/>
  );
};

const NavLeft = ({
  setIsOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex items-center gap-6">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="block lg:hidden text-gray-950 text-2xl"
        onClick={() => setIsOpen((pv) => !pv)}
      >
        <FiMenu />
      </motion.button>
      <Logo />
      
      <NavLink  text="Dashboards" link="/"/>
      <NavLink  text="Contact Us" link="/contact"/>
      <NavLink text="Testimonials"link="/#testimonial" />
      <NavLink text="Features" link="/#feature"/>
    </div>
  );
};

const NavLink = ({ text,link }: { text: string,link:string }) => {
  return (
    <a
      href={link}
      rel="nofollow"
      className="hidden lg:block h-[30px] overflow-hidden font-medium"
    >
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-gray-700">{text}</span>
        <span className="flex items-center h-[30px] text-indigo-600">
          {text}
        </span>
      </motion.div>
    </a>
  );
};

const NavRight = () => {
    const router=useRouter()
  return (
    <div className="flex items-center gap-4">
      <motion.button
      onClick={()=>router.push("/contact")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent font-medium rounded-md whitespace-nowrap"
      >
        Sign in
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={()=>{toast.error("Need to Sign In First");router.push("/contact")}}
        className="px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium rounded-md whitespace-nowrap"
      >
        Sign up
      </motion.button>
    </div>
  );
};

const NavMenu = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="absolute p-4 bg-white shadow-lg left-0 right-0 top-full origin-top flex flex-col gap-4"
    >
      <MenuLink text="Dashboard" link="/"/>
      <MenuLink text="Contact Us" link="/contact"/>
      <MenuLink text="Testimonials"link="/#testimonial" />
      <MenuLink text="Features" link="/#feature"/>
    </motion.div>
  );
};

const MenuLink = ({ text ,link}: { text: string, link:string }) => {
  return (
    <motion.a
      variants={menuLinkVariants}
      rel="nofollow"
      href={link}
      className="h-[30px] overflow-hidden font-medium text-lg flex items-start gap-2"
    >
      <motion.span variants={menuLinkArrowVariants}>
        <FiArrowRight className="h-[30px] text-gray-950" />
      </motion.span>
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-gray-700">{text}</span>
        <span className="flex items-center h-[30px] text-indigo-600">
          {text}
        </span>
      </motion.div>
    </motion.a>
  );
};

export default FlipNavWrapper;

const menuVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const menuLinkVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: -10,
    opacity: 0,
  },
};

const menuLinkArrowVariants = {
  open: {
    x: 0,
  },
  closed: {
    x: -4,
  },
};

















// "use client"

// import React, { useState } from 'react';
// import Link from "next/link";
// export const NavExample = () => {
 


//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [isMenuOpennProfile, setIsMenuOpennProfile] = useState(false);
//     return (
//         <div className="bg-neutral-950 ">
//             <nav className="bg-gray-800">
//                 <div className="mx-auto max-w-7xl   sm:px-6 lg:px-8">
//                     <div className="relative flex h-12 pt-3 px-4  items-center justify-between ">
//                         <Link
//                             href="/"
//                             className="font-serif text-red-800 text-xl font-extrabold"
//                         >
//                             KEYBOLT
//                         </Link>
//                         <div className=" flex items-center sm:hidden">
//                             {/* <!-- Mobile menu button -->*/}

//                             <button onClick={() => setIsMenuOpen(true)}  type="button" className=" hideenrelative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none " aria-controls="mobile-menu" aria-expanded="false">

//                                 <div className="">

//                                 </div>
//                                 <svg className={`h-6 w-6 `} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
//                                     <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//                                 </svg>
//                             </button>
//                         </div>

//                         <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//                             <div className="hidden sm:ml-6 sm:block">
//                                 <div className="flex space-x-4">
//                                     <a  href="/" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" aria-current="page">Dashboard</a>
                           
//                                         <a  href="/#testimonial" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Testimonial</a>
//                                     <a href="/#feature" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Feature</a>
                                 
//                                     <a  href="/contact" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contact Us</a>
//                                 </div>
//                             </div>
//                         </div>
//                         <div onMouseEnter={() => setIsMenuOpennProfile(true)}
//                             onMouseLeave={() => setIsMenuOpennProfile(false)} className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//                             <button onClick={() => setIsMenuOpennProfile(!isMenuOpennProfile)} type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                                 <span className="absolute -inset-1.5"></span>
//                                 <span className="sr-only">View notifications</span>
//                                 <svg onClick={() => setIsMenuOpen(!isMenuOpen)} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">

//                                     <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
//                                 </svg>
//                             </button>

//                             <div className="relative ml-3">


//                                 {isMenuOpennProfile === true && (
//                                     <><div className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}>
                                      
//                                         <div onClick={() => setIsMenuOpennProfile(false)}  className="block px-4 py-2 text-md font-bold text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-0">Your Profiles</div>
//                                         <a onClick={() => setIsMenuOpennProfile(false)} href="/contact" className="block  font-medium px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-1">sign In</a>
//                                         <a onClick={() => setIsMenuOpennProfile(false)} href="/#faq" className="block px-4 font-medium py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-2">FAQ</a>
//                                     </div></>
//                                 )}

//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div
               
//                 onMouseLeave={() => setIsMenuOpen(false)}  id="mobile-menu">

//                     <div className="space-y-1 px-2 pb-3 pt-2">
//                         {isMenuOpen && (
//                             <>
//                                 <a onClick={() => setIsMenuOpen(false)} href="/" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" aria-current="page">Dashboard</a>
//                             <a onClick={() => setIsMenuOpen(false)} href="/#testimonial" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Testimonials</a>
//                                 <a onClick={() => setIsMenuOpen(false)}  href="/#feature" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Features</a>
                                
                              
                      
//                            <a onClick={() => setIsMenuOpen(false)} href="/contact" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contact Us</a>
//                             </>)}

//                     </div>

//                 </div>
//             </nav>


//         </div>
//     );
// };




