
"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { FiMenu, FiArrowRight } from "react-icons/fi";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { handler } from "tailwindcss-animate";

const FlipNavWrapper = () => {
  return (
    <div className="bg-gray-50 fixed w-full top-0 z-50">
      <FlipNav />
      {/* <div className="h-12 "  /> */}
    
    </div>
  );
};
const FlipNav = () => {
  const [isOpen, setIsOpen] = useState(false);
 const handler=()=>{
   setIsOpen((isOpen) => !isOpen)
 } 
  return (
    <nav className="bg-white p-4 border-b-[1px] border-gray-200 flex items-center justify-between relative">
      <NavLeft setIsOpen={setIsOpen} />
      <NavRight />
      <NavMenu  handler={handler} isOpen={isOpen} />
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
      className="hidden lg:block h-[20px] overflow-hidden font-medium"
    >
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[20px] text-gray-700">{text}</span>
        <span className="flex items-center h-[20px] text-indigo-600">
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

const NavMenu = ({ isOpen,handler }: { isOpen: boolean,handler:()=>void }) => {
  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="absolute p-4 bg-white shadow-lg left-0 right-0 top-full origin-top flex flex-col gap-4"
    >
      <MenuLink handler={handler} text="Dashboard" link="/"/>
      <MenuLink handler={handler}text="Contact Us" link="/contact"/>
      <MenuLink handler={handler} text="Testimonials"link="/#testimonial" />
      <MenuLink  handler={handler} text="Features" link="/#feature"/>
    </motion.div>
  );
};

const MenuLink = ({ text ,link,handler}: { text: string, link:string ,handler:()=>void}) => {
  return (
    <motion.a
      variants={menuLinkVariants}
      rel="nofollow"
      href={link}
      onClick={handler}
      className="h-[20px] overflow-hidden font-medium text-lg flex items-start gap-2"
    >
      <motion.span variants={menuLinkArrowVariants}>
        <FiArrowRight className="h-[20px] text-gray-950" />
      </motion.span>
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[20px] text-gray-700">{text}</span>
        <span className="flex items-center h-[20px] text-indigo-600">
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








