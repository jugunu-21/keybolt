
import { Dispatch, SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import {
  SiAtlassian,
  SiDribbble,
  SiGrubhub,
  SiKaggle,
  SiSlack,
  SiNike,
} from "react-icons/si";

const StackedCardTestimonials = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="bg-white py-24 px-4 lg:px-8 grid items-center grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 overflow-hidden">
      <div className="p-4">
        <h3 className="text-5xl font-semibold">What our customers think</h3>
        <p className="text-slate-500 my-4">
        Our customers rave about the impact Keybolt has had on their businesses. They appreciate how our AI-driven tools simplify complex tasks, enhance operational efficiency, and deliver actionable insights. From optimizing inventory to streamlining ordering processes, Keybolt is praised for making sophisticated technology accessible and effective for food businesses of all sizes.
        </p>
        <SelectBtns
          numTracks={testimonials.length}
          setSelected={setSelected}
          selected={selected}
        />
      </div>
      <Cards
        testimonials={testimonials}
        setSelected={setSelected}
        selected={selected}
      />
    </section>
  );
};

const SelectBtns = ({
  numTracks,
  setSelected,
  selected,
}: {
  numTracks: number;
  setSelected: Dispatch<SetStateAction<number>>;
  selected: number;
}) => {
  return (
    <div className="flex gap-1 mt-8">
      {Array.from(Array(numTracks).keys()).map((n) => {
        return (
          <button
            key={n}
            onClick={() => setSelected(n)}
            className="h-1.5 w-full bg-slate-300 relative"
          >
            {selected === n ? (
              <motion.span
                className="absolute top-0 left-0 bottom-0 bg-slate-950"
                initial={{
                  width: "0%",
                }}
                animate={{
                  width: "100%",
                }}
                transition={{
                  duration: 5,
                }}
                onAnimationComplete={() => {
                  setSelected(selected === numTracks - 1 ? 0 : selected + 1);
                }}
              />
            ) : (
              <span
                className="absolute top-0 left-0 bottom-0 bg-slate-950"
                style={{
                  width: selected > n ? "100%" : "0%",
                }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

const Cards = ({
  testimonials,
  selected,
  setSelected,
}: {
  testimonials: Testimonial[];
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className="p-4 relative h-[450px] lg:h-[500px] shadow-xl">
      {testimonials.map((t, i) => {
        return (
          <Card
            {...t}
            key={i}
            position={i}
            selected={selected}
            setSelected={setSelected}
          />
        );
      })}
    </div>
  );
};

const Card = ({
  Icon,
  description,
  name,
  title,
  position,
  selected,
  setSelected,
}: Testimonial & {
  position: number;
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
}) => {
  const scale = position <= selected ? 1 : 1 + 0.015 * (position - selected);
  const offset = position <= selected ? 0 : 95 + (position - selected) * 3;
  const background = position % 2 ? "black" : "white";
  const color = position % 2 ? "white" : "black";

  return (
    <motion.div
      initial={false}
      style={{
        zIndex: position,
        transformOrigin: "left bottom",
        background,
        color,
      }}
      animate={{
        x: offset + '%',
        scale,
      }}
      whileHover={{
        translateX: position === selected ? 0 : -3,
      }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      onClick={() => setSelected(position)}
      className="absolute top-0 left-0 w-full min-h-full p-8 lg:p-12 cursor-pointer flex flex-col justify-between"
    >
      <Icon className="text-7xl mx-auto" />
      <p className="text-lg lg:text-xl font-light italic my-8">
        {description}
      </p>
      <div>
        <span className="block font-semibold text-lg">{name}</span>
        <span className="block text-sm">{title}</span>
      </div>
    </motion.div>
  )
};

export  {StackedCardTestimonials};

interface Testimonial {
  Icon: IconType;
  title: string;
  name: string;
  description: string;
}

const testimonials = [
  {
    Icon: SiNike,
    description: "The real-time product monitoring feature has been a game-changer for us. We now have a clear understanding of what’s selling and what’s not, leading to more informed decisions and less waste.",
    name: "Liam Johnson",
   title: "Manager, The Green Cafe"
  },
  {
    Icon: SiAtlassian,
   description: "Keybolt has completely transformed how we manage our restaurant operations. The AI tools are incredibly intuitive and have streamlined our processes, allowing us to focus more on our customers and less on manual tasks.",
  name: "Sophia Martinez",
 title: "Owner, Bella Italia"
  },
  {
    Icon: SiDribbble,
    description: "Keybolt’s automated ordering system has saved us countless hours and ensured we never run out of stock. It’s like having an extra team member dedicated to managing our inventory.",
    name: "Emma Williams",
   title: "Co-owner, Daily Delights"
  },
  {
    Icon: SiGrubhub,
    description: "The AI-generated sales forecasts are spot on and have helped us optimize our inventory levels perfectly. Keybolt’s technology is a must-have for any food business looking to grow.",
    name: "James Brown",
   title: "Head Chef, Gourmet Bistro"
  },
  {
    Icon: SiKaggle,
    description: "I'm amazed at how Keybolt has simplified our operations. From sales tracking to group restaurant recommendations, their tools are easy to use and incredibly effective.",
  name: "Olivia Davis",
 title: "Owner, Farmhouse Eatery"
  },
  {
    Icon: SiSlack,
    description: "Keybolt has revolutionized the way we manage our food business. The group restaurant finder feature has made planning group outings effortless, and the efficiency of their AI tools is unmatched.",
    name: "Michael Green",
   title: "Founder, Urban Eats"
  },
];