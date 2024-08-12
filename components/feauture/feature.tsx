import { motion, useInView } from "framer-motion";
import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
// import { ImagesType } from "react-Imagess";
// import { FiDollarSign, FiEye, FiPlay, FiSearch } from "react-Imagess/fi";
import { imagesFeature } from "@/public/images/images";
import { StaticImageData } from 'next/image';
const FeatureShiftColumns = () => {
  return (
    <>
      {/* <div className="flex h-48 flex-col items-center justify-center bg-slate-900">
        <span className="font-semibold uppercase text-white">Scroll down</span>
        <span className="mt-2 block rounded-full bg-indigo-600 px-4 py-1 text-center font-medium text-white md:hidden">
          Note: This is much cooler on desktop 😊
        </span>
      </div> */}
      <SwapColumnFeatures />
      {/* <div className="flex h-48 items-center justify-center bg-indigo-600">
        <span className="font-semibold uppercase text-white">Scroll up</span>
      </div> */}
    </>
  );
};

const SwapColumnFeatures = () => {
  const [featureInView, setFeatureInView] = useState<FeatureType>(features[0]);

  return (
    <section className="relative mx-auto max-w-7xl">
      <SlidingFeatureDisplay featureInView={featureInView} />

      {/* Offsets the height of SlidingFeatureDisplay so that it renders on top of Content to start */}
      <div className="-mt-[100vh] hidden md:block" />

      {features.map((s) => (
        <Content
          key={s.id}
          featureInView={s}
          setFeatureInView={setFeatureInView}
          {...s}
        />
      ))}
    </section>
  );
};

const SlidingFeatureDisplay = ({
  featureInView,
}: {
  featureInView: FeatureType;
}) => {
  return (
    <div
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-end" : "flex-start",
      }}
      className="pointer-events-none sticky top-0 z-10 hidden h-screen w-full items-center justify-center md:flex"
    >
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
        className="h-fit w-3/5 rounded-xl p-8"
      >
        <ExampleFeature featureInView={featureInView} />
      </motion.div>
    </div>
  );
};

const Content = ({
  setFeatureInView,
  featureInView,
}: {
  setFeatureInView: Dispatch<SetStateAction<FeatureType>>;
  featureInView: FeatureType;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-150px",
  });

  useEffect(() => {
    if (isInView) {
      setFeatureInView(featureInView);
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="relative z-0 flex h-fit md:h-screen"
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-start" : "flex-end",
      }}
    >
      <div className="grid h-full w-full place-content-center px-4 py-12 md:w-2/5 md:px-8 md:py-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <span className="rounded-full bg-indigo-600 px-2 py-1.5 text-xs font-medium text-white">
            {featureInView.callout}
          </span>
          <p className="my-3 text-5xl font-bold">{featureInView.title}</p>
          <p className="text-slate-600">{featureInView.description}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="mt-8 block md:hidden"
        >
          <ExampleFeature featureInView={featureInView} />
        </motion.div>
      </div>
    </section>
  );
};

const ExampleFeature = ({ featureInView }: { featureInView: FeatureType }) => {
  return (
    <div className="relative h-90 w-full rounded-xl bg-slate-800 shadow-xl">
      <div className="flex w-full gap-1.5 rounded-t-xl bg-slate-900 p-3">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>
      {/* <div className="p-2">
        <p className="font-mono text-sm text-slate-200">
          <span className="text-green-300">~</span> Show a part of your product
          that explains what{" "}
          <span className="inline-block rounded bg-indigo-600 px-1 font-semibold">
            {featureInView.title}
          </span>{" "}
          means.
        </p>
      </div> */}
      <div className="relative h-80 w-full">
        <Image src={featureInView.svg} alt="Description" layout="fill" objectFit="cover" />
      </div>

    </div>
  );
};

export { FeatureShiftColumns };

type FeatureType = {
  id: number;
  callout: string;
  title: string;
  description: string;
  contentPosition: "l" | "r";
  svg: string;
  Images: StaticImageData;
};

const features: FeatureType[] = [
  {
    id: 1,
    callout: "Inventory Management",
    title: "Stay Stocked!",
    description: "Never run out of key ingredients again. Our automated ordering system ensures your inventory levels are always optimal, reducing waste and ensuring you have what you need to meet customer demand.",
    contentPosition: "r",
    svg:"/svg/undraw_artificial_intelligence_re_enpp.svg",
    Images:imagesFeature.image1,
  },
  {
    id: 2,
   
    callout: "Group Recommendations",
    title: "Perfect Dining Choices!",
    description: "Find the ideal restaurant for any group with our Group Restaurant Finder. Consider everyone’s preferences to make dining decisions easy and enjoyable for everyone involved.",
    contentPosition: "l",
     svg:"/svg/undraw_street_food_re_uwex.svg",
    Images: imagesFeature.image2,
  },
  {
    id: 3,
    callout: "Performance Tracking",
    title: "Real-Time Analytics!",
    description: "Track how your products are performing in real time. Monitor sales, waste, and stock levels to quickly adapt and improve your operations based on actual data.",
    contentPosition: "r",
    svg:"/svg/undraw_visual_data_re_mxxo.svg",
    Images:imagesFeature.image3,
  },
  {
    id: 4,
    callout: "Optimize Operations",
    title: "Streamline Your Business!",
    description: "Transform your food business with Keybolt's advanced AI-driven tools. From precise sales forecasts and automated ordering to real-time product tracking, our solutions are designed to help you maximize efficiency and minimize waste. Empower your business with technology that grows with you.",
    contentPosition: "l",
    svg:"/svg/undraw_happy_news_re_tsbd.svg",
    Images:imagesFeature.image4,
  },
];