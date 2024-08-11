"use client"
import Image from "next/image";
import { RoundedDrawerNavExample } from "@/components/navbar/navbar"
import { HeroParallaxDemo } from "../components/heroParallaxDemo"
import { ImagePartion } from "../components/imagepartition"
import {BlogPostCarousel} from "../components/blogPostCarousel/blogPostCarousel"
import {SparklesPreview} from "../components/sparkelPreview/sparkelPreview"
export default function Home() {
  return (
    <main>
      <RoundedDrawerNavExample />
      <ImagePartion />
      <SparklesPreview/>
      <BlogPostCarousel/>
      <HeroParallaxDemo />
    </main>
  );
}
