// export const Hero = () => {
//   return (
//     <><div className="bg-white">

//       <div className=" px-4 pt-14 ">

//         <div className="max-w-4xl py-10" >
//           <div className="hidden sm:mb-8 sm:flex sm:justify-center ">
//           <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
//           Discover how Keybolt can transform your food business  <a href="#" className="font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>Learn more <span aria-hidden="true">&rarr;</span></a>
//     </div>
//           </div>
//           <div className="text-center md:flex space-x-8">
//             <div
//               className="relative shrink-0 cursor-pointer transition-transform hover:-translate-y-1"

//             >
//               <Image
//                 src="https://techcrunch.com/wp-content/uploads/2015/07/growth.jpg"
//                 className="mb-3 h-[250px] w-full rounded-lg object-cover"
//                 alt="An image for a fake blog post titled"
//               />
//               {/* <span className="rounded-md border-[1px] border-neutral-500 px-1.5 py-1 text-xs uppercase text-neutral-500">
//               Keybolt Insights
//               </span> */}
//               <p className="mt-1.5 text-lg font-medium">Maximize Efficiency</p>
//               <p className="text-sm text-neutral-500">Explore how our AI-driven solutions can reduce waste and boost profits.</p>
//             </div>

//             <div className="text-center">
//               <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Optimize and Grow <br />Your Business  with us</h1>
//               <p className="mt-6 text-lg leading-8 text-gray-600">Keybolt empowers local food businesses by offering advanced AI tools and automated solutions. Our platform ensures that your operations run smoothly, allowing you to focus on what you do best—serving great food.</p>

//               <div className="mt-10 flex items-center justify-center gap-x-6">
//                 <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
//                 <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></a>
//               </div>
//             </div>

//           </div>
//         </div>
//         <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
//           <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
//             style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}
//           ></div>
//         </div>
//       </div>
//     </div>

//     </>
//   )
// }

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
import {
  SiNike,
  Si3M,
  SiAbstract,
  SiAdobe,
  SiAirtable,
  SiAmazon,
  SiBox,
  SiBytedance,
  SiChase,
  SiCloudbees,
  SiBurton,
  SiBmw,
  SiHeroku,
  SiBuildkite,
  SiCouchbase,
  SiDailymotion,
  SiDeliveroo,
  SiEpicgames,
  SiGenius,
  SiGodaddy,
} from "react-icons/si";
import { IconType } from "react-icons";
import { useRouter } from "next/navigation"; 
import { GradientShadowButton } from "../hover.me/button";

export const NeuHero = () => {
 
  return (
    <section className="overflow-hidden bg-white mt-12 md:mt-5">
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

const LogoItem = ({ Icon, name }: { Icon: IconType; name: string }) => {
  return (
    <span className="flex items-center justify-center gap-4 px-4 py-2 md:py-4">
      <Icon className="text-2xl text-indigo-600 md:text-3xl" />
      <span className="whitespace-nowrap text-xl font-semibold uppercase md:text-2xl">
        {name}
      </span>
    </span>
  );
};

const LogoItemsTop = () => (
  <>

    <LogoItem Icon={FaApple} name="Apple" />
    <LogoItem Icon={FaStar} name=" Starbucks" />
    <LogoItem Icon={FaBeer} name=" beer brands" />
    <LogoItem Icon={FaHamburger} name=" McDonald's" />
    <LogoItem Icon={FaPizzaSlice} name=" Domino’s" />
    <LogoItem Icon={FaCoffee} name=" Starbucks" />
    <LogoItem Icon={FaIceCream} name=" Baskin-Robbins " />
    <LogoItem Icon={FaCookie} name=" Famous Amos" />
    <LogoItem Icon={FaWineBottle} name=" Wine brands (general)" />
    <LogoItem Icon={FaCarrot} name=" Trader Joe's " />
  </>
);

const LogoItemsBottom = () => (
  <>
   <LogoItem Icon={FaApple} name="Apple" />
    <LogoItem Icon={FaStar} name=" Starbucks" />
    <LogoItem Icon={FaBeer} name=" beer brands" />
    <LogoItem Icon={FaHamburger} name=" McDonald's" />
    <LogoItem Icon={FaPizzaSlice} name=" Domino’s" />
    <LogoItem Icon={FaCoffee} name=" Starbucks" />
    <LogoItem Icon={FaIceCream} name=" Baskin-Robbins " />
    <LogoItem Icon={FaCookie} name=" Famous Amos" />
    <LogoItem Icon={FaWineBottle} name=" Wine brands (general)" />
    <LogoItem Icon={FaCarrot} name=" Trader Joe's " />
  </>
);