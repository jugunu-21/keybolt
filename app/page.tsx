"use client"
import Image from "next/image";
import {RoundedDrawerNavExample} from "@/components/navbar/navbar"
import {HeroParallaxDemo} from "../components/heroParallaxDemo"
import {ImagePartion} from "../components/imagepartition"
export default function Home() {
  return (
    <main>
    <RoundedDrawerNavExample/>
   <ImagePartion/>
    <HeroParallaxDemo/>
    </main>
  );
}
