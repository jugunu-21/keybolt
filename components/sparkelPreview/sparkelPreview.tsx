import Image from "next/image";
import { SparklesCore } from "../ui/sparkle";

 function SparklesPreview() {
    return (
      <div className="h-[40rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="flex flex-row">
        <Image className="w-10" src="/path/to/your/image.jpg" alt="Description" width={100} height={100}></Image>
        <Image className="w-10" src="/path/to/your/image.jpg" alt="Description" width={100} height={100}></Image>
        <Image className="w-10" src="/path/to/your/image.jpg" alt="Description" width={100} height={100}></Image>
        </div>
        <h1 className="md:text-5xl  text-gray-800 text-3xl lg:text-7xl font-bold text-centerrelative z-20">
         KEYBOLT
        </h1>
        <div className="w-[40rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
  
          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
  
          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
        <div className="absolute text-3xl text-stone-600 text-center px-8 pt-16">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis iusto nulla culpa, adipisci quo, dolorem nihil es</div>
      </div>
    );
  }
  export {SparklesPreview}