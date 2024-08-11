"use client"

import { RoundedDrawerNavExample } from "@/components/navbar/navbar"
import { HeroParallaxDemo } from "../components/heroParallaxDemo"
import { ImagePartion } from "../components/imagepartition"
import {BlogPostCarousel} from "../components/blogPostCarousel/blogPostCarousel"
import {SparklesPreview} from "../components/sparkelPreview/sparkelPreview"
import {BasicFAQ} from "../components/faq/faq"
import {ShiftingContactForm} from "../components/contact/contact"
import {RevealBentoGrids} from "../components/servicesAndAbout/servicesAndAbout"
import { FeatureShiftColumns} from "@/components/feauture/feature";
export default function Home() {
  return (
    <main>
      <RoundedDrawerNavExample />
      {/* <ImagePartion /> */}
      <FeatureShiftColumns/>
      <SparklesPreview/>
      <BlogPostCarousel/>
      <HeroParallaxDemo />
      <RevealBentoGrids/>
      <ShiftingContactForm/>
      <BasicFAQ/>
    </main>
  );
}
