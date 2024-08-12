"use client"


import { HeroParallaxDemo } from "../components/heroParallaxDemo"
import { ImagePartion } from "../components/imagepartition"
import { BlogPostCarousel } from "../components/blogPostCarousel/blogPostCarousel"
import { SparklesPreview } from "../components/sparkelPreview/sparkelPreview"
import { BasicFAQ } from "../components/faq/faq"
import { ShiftingContactForm } from "../components/contact/contact"
import { RevealBentoGrids } from "../components/servicesAndAbout/servicesAndAbout"
import { FeatureShiftColumns } from "@/components/feature/feature";
import { StackedCardTestimonials } from "../components/testimonials/testimonials"
import { NeuHero } from "../components/hero/hero";
import Section from "@/components/dataSection/dataSection";
// import { useRouter } from "next/navigation"
// const router =useRouter()
import { useState, useEffect } from 'react';
export default function Home() {
  const [showFeature, setShowFeature] = useState(true);
  const [showTestimonial, setShowTestimonial] = useState(true);

  useEffect(() => {
    const handleHashChange = () => {
      if (typeof window !== 'undefined') {
        if(window.location.hash === '#feature'){
          setShowFeature(true);
        }
        else{
          setShowTestimonial(true); 
        }
     
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []); 
  return (
    <main className="">

      <NeuHero />
      {/* <ImagePartion /> */}
    
      {showFeature && <FeatureShiftColumns />}
      {/* <SparklesPreview/> */}
      {/* <BlogPostCarousel/> */}
      <Section/>
      {/* <HeroParallaxDemo /> */}
      {showTestimonial&&<StackedCardTestimonials />}
      {/* <RevealBentoGrids /> */}
      {/* <ShiftingContactForm/> */}
      <BasicFAQ />
    </main>
  );
}
