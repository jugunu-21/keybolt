"use client"


import { HeroParallaxDemo } from "../components/heroParallaxDemo"
import { ImagePartion } from "../components/imagepartition"
import { BlogPostCarousel } from "../components/blogPostCarousel/blogPostCarousel"
import { SparklesPreview } from "../components/sparkelPreview/sparkelPreview"
import { BasicFAQ } from "../components/faq/faq"
import { ShiftingContactForm } from "../components/contact/contact"
import { RevealBentoGrids } from "../components/servicesAndAbout/servicesAndAbout"
import { FeatureShiftColumns } from "@/components/feauture/feature";
import { StackedCardTestimonials } from "../components/testimonials/testimonials"
import { NeuHero } from "../components/hero/hero";
import Section from "@/components/dataSection/dataSection";
// import { useRouter } from "next/navigation"
// const router =useRouter()
export default function Home() {

  return (
    <main className="">

      <NeuHero />
      {/* <ImagePartion /> */}
      <FeatureShiftColumns />
      {/* <SparklesPreview/> */}
      {/* <BlogPostCarousel/> */}
      <Section/>
      {/* <HeroParallaxDemo /> */}
      <StackedCardTestimonials />
      <RevealBentoGrids />
      {/* <ShiftingContactForm/> */}
      <BasicFAQ />
    </main>
  );
}
