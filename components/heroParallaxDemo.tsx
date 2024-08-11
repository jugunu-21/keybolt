"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
    "https://www.shutterstock.com/shutterstock/photos/2143567817/display_1500/stock-vector-business-teamwork-to-achieve-success-team-guidance-determination-and-motivation-concept-2143567817.jpg",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
    "https://www.shutterstock.com/shutterstock/photos/2417213449/display_1500/stock-vector-business-assistance-guidance-concept-businessman-looking-at-arrow-with-spotlight-shining-on-it-2417213449.jpg",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
    "https://www.shutterstock.com/shutterstock/photos/2155027067/display_1500/stock-vector-business-recruitment-or-hiring-vector-concept-looking-for-talent-business-man-standing-in-2155027067.jpg",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
     " https://www.shutterstock.com/shutterstock/photos/1970078929/display_1500/stock-vector-conceptual-illustration-of-a-businessman-stands-on-the-edge-of-a-broken-bridge-and-its-divider-line-1970078929.jpg",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  // {
  //   title: "SmartBridge",
  //   link: "https://smartbridgetech.com",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  // },
  // {
  //   title: "Renderwork Studio",
  //   link: "https://renderwork.studio",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  // },

  // {
  //   title: "Creme Digital",
  //   link: "https://cremedigital.com",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  // },
  // {
  //   title: "Golden Bells Academy",
  //   link: "https://goldenbellsacademy.com",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  // },
  // {
  //   title: "Invoker Labs",
  //   link: "https://invoker.lol",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  // },
  // {
  //   title: "E Free Invoice",
  //   link: "https://efreeinvoice.com",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  // },
];
