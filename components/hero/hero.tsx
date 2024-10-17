
import React from "react";
import Image from "next/image";
import { FiArrowUpRight, FiBell, FiCheck, FiChevronDown, FiList, FiMessageCircle, FiUser } from "react-icons/fi";
import {
  FaHotdog,
  FaDrumstickBite,
  FaLemon ,
  FaUtensils ,
  FaBacon ,
  FaCheese,
  FaCocktail, 
  FaApple,
  FaStar,
  FaBeer,
  FaHamburger,
  FaPizzaSlice,
  FaCoffee,
  FaIceCream,
  FaCookie,
  FaWineBottle,
  FaCarrot
} from "react-icons/fa";
import { motion } from "framer-motion";

import { IconType } from "react-icons";
import { useRouter } from "next/navigation"; 
import { GradientShadowButton } from "../hover.me/button";

export const NeuHero = () => {
 
  return (
    <section className="overflow-hidden bg-white mt-4">
      <div className="relative flex flex-col items-center justify-center px-12 pb-48 pt-12 md:pt-24">
        <Copy />
        <MockupScreen />
      </div>
      <Logos />
    </section>
  );
};

const Copy = () => {
  const router =useRouter()
  const handleClick =()=>{
    router.push("/contact")

  };
  return (
    <>
      <div className="mb-1.5 rounded-full bg-zinc-600">
        <a
          href="/"
          // target="_blank"
          // rel="nofollow"
          className="flex origin-top-left items-center rounded-full border border-zinc-900 bg-white p-0.5 text-sm transition-transform hover:-rotate-2"
        >
          <span className="rounded-full bg-[#d44a3e] px-2 py-0.5 font-medium text-white">
            HEY!
          </span>
          <span className="ml-1.5 mr-1 inline-block">
            We&apos;re live on Product Hunt!
          </span>
          <FiArrowUpRight className="mr-2 inline-block" />
        </a>
      </div>
      <h1 className="max-w-4xl text-center text-3xl font-black leading-[1.15] md:text-5xl md:leading-[1.15]">
        Empowering <br /> Food Businesses with  AI
      </h1>
      <p className="mx-auto my-4 max-w-3xl text-center text-base leading-relaxed md:my-6 md:text-xl md:leading-relaxed">

        To empowers local food businesses,Keybolt uses AI-driven tools that streamline operations and boost efficiency, within reach for every entrepreneur.
      </p>
     
     < GradientShadowButton onClick={handleClick} value={"Get started -   no CC required" }/>
      {/* <button className="rounded-lg bg-indigo-600 p-3 uppercase text-white transition-colors hover:bg-indigo-700">
        <span className="font-bold">Get started - </span> no CC required
      </button> */}
    </>
  );
};

const MockupScreen = () => {
  return (
    <div className="absolute bottom-0 left-1/2 h-36 w-[calc(100vw_-_56px)] max-w-[1100px] -translate-x-1/2 overflow-hidden rounded-t-xl bg-zinc-900 p-0.5">
      <div className="flex items-center justify-between px-2 py-1">
        <div className="flex items-center gap-0.5">
          <span className="size-2 rounded-full bg-red-400" />
          <span className="size-2 rounded-full bg-yellow-400" />
          <span className="size-2 rounded-full bg-green-400" />
        </div>
        <span className="rounded bg-zinc-600 px-2 py-0.5 text-xs text-zinc-100">
          keybolt.vercel.app
        </span>
        <FiChevronDown className="text-white" />
      </div>
      <div className="relative z-0 grid h-full w-full grid-cols-[100px,_1fr] overflow-hidden rounded-t-lg bg-white md:grid-cols-[150px,_1fr]">
        <div className="h-full border-r border-zinc-300 p-2">
          <Logo />
          <div className="mt-3 space-y-1.5">
            <span className="flex items-center gap-1.5 text-xs text-indigo-600">
              <FiMessageCircle />
              <span>Messages</span>
            </span>
            <span className="flex items-center gap-1.5 text-xs">
              <FiCheck />
              <span>Tasks</span>
            </span>
            <span className="flex items-center gap-1.5 text-xs">
              <FiList />
              <span>Board</span>
            </span>
          </div>
        </div>

        <div className="relative z-0 p-2">
          <div className="mb-3 flex items-center justify-between">
            <span className="rounded bg-zinc-200 px-1.5 py-1 pr-8 text-xs text-zinc-600">
              Search...
            </span>
            <div className="flex items-center gap-1.5 text-xl">
              <FiBell className="text-indigo-600" />
              <FiUser />
            </div>
          </div>
          <div className="h-full rounded-xl border border-dashed border-zinc-500 bg-zinc-100" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-gradient-to-b from-white/0 to-white" />
      </div>
    </div>
  );
};

const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <svg
      width="32"
      height="auto"
      viewBox="0 0 50 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-fit fill-zinc-950"
    >
      <path
        d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
        stopColor="#09090B"
      ></path>
      <path
        d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
        stopColor="#09090B"
      ></path>
    </svg>
  );
};

const Logos = () => {
  return (
    <div className="relative -mt-2 -rotate-1 scale-[1.01] border-y-2 border-zinc-900 bg-white">
      <div className="relative z-0 flex overflow-hidden border-b-2 border-zinc-900">
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
      </div>
      <div className="relative z-0 flex overflow-hidden">
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-32 bg-gradient-to-r from-white to-white/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-32 bg-gradient-to-l from-white to-white/0" />
    </div>
  );
};

const TranslateWrapper = ({
  children,
  reverse,
}: {
  children: JSX.Element;
  reverse?: boolean;
}) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="flex px-2"
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ Icon, name ,IconClr}: { Icon: IconType; name: string;IconClr:string }) => {
  return (
    <span className="flex items-center justify-center gap-4 px-4 py-2 md:py-4">
<Icon className={`text-2xl ${IconClr} md:text-3xl`} />

      <span className="whitespace-nowrap text-xl font-semibold uppercase md:text-2xl">
        {name}
      </span>
    </span>
  );
};

const LogoItemsTop = () => (
  <>
<LogoItem Icon={FaApple} name="Granny Smith" IconClr="text-red-600" /> {/* Apple Brand */}
<LogoItem Icon={FaCoffee} name="Blue Bottle Coffee" IconClr="text-yellow-500" /> {/* Coffee Brand */}
<LogoItem Icon={FaBeer} name="Bell's Brewery" IconClr="text-blue-600" /> {/* Beer Brand */}
<LogoItem Icon={FaHamburger} name="In-N-Out Burger" IconClr="text-green-600" /> {/* Hamburger Brand */}
<LogoItem Icon={FaPizzaSlice} name="PizzaExpress" IconClr="text-purple-600" /> {/* Pizza Brand */}
<LogoItem Icon={FaIceCream} name="Häagen-Dazs" IconClr="text-pink-600" /> {/* Ice Cream Brand */}
<LogoItem Icon={FaCookie} name="Lenny & Larry's" IconClr="text-brown-600" /> {/* Cookie Brand */}
<LogoItem Icon={FaWineBottle} name="Fess Parker Winery" IconClr="text-teal-600" /> {/* Wine Brand */}
<LogoItem Icon={FaCarrot} name="Earthbound Farm" IconClr="text-orange-600" /> {/* Organic Produce Brand */}
  </>
);

const LogoItemsBottom = () => (
  <>
<LogoItem Icon={FaApple} name="Granny Smith" IconClr="text-red-600" /> {/* Apple Brand */}
<LogoItem Icon={FaCoffee} name="Blue Bottle Coffee" IconClr="text-yellow-500" /> {/* Coffee Brand */}
<LogoItem Icon={FaBeer} name="Bell's Brewery" IconClr="text-blue-600" /> {/* Beer Brand */}
<LogoItem Icon={FaHamburger} name="In-N-Out Burger" IconClr="text-green-600" /> {/* Hamburger Brand */}
<LogoItem Icon={FaPizzaSlice} name="PizzaExpress" IconClr="text-purple-600" /> {/* Pizza Brand */}
<LogoItem Icon={FaIceCream} name="Häagen-Dazs" IconClr="text-pink-600" /> {/* Ice Cream Brand */}
<LogoItem Icon={FaCookie} name="Lenny & Larry's" IconClr="text-brown-600" /> {/* Cookie Brand */}
<LogoItem Icon={FaWineBottle} name="Fess Parker Winery" IconClr="text-teal-600" /> {/* Wine Brand */}
<LogoItem Icon={FaCarrot} name="Earthbound Farm" IconClr="text-orange-600" /> {/* Organic Produce Brand */}
  </>
);