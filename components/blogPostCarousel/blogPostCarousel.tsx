import { motion } from "framer-motion";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import useMeasure from "react-use-measure";
import { SparklesCore } from "../ui/sparkle";
const CARD_WIDTH = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const BlogPostCarousel = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (posts.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <section className="bg-neutral-100 py-8" ref={ref}>
      <div className="relative overflow-hidden p-4">
        <div className="mx-auto max-w-6xl">




          
          <div className=" text-2xl sm:text-3xl font-bold dark:text-whitemax-w-7xl items-center justify-between text-center py-4 ">
            One system<br/>
          that does it all</div>
          <div className="flex items-center justify-between">
            <h2 className="mb-4 text-4xl text-center justify-center">The Team Blog</h2>

            <div className="flex items-center gap-2">
              <button
                className={`rounded-lg border-[1px] border-neutral-400 bg-white p-1.5 text-2xl transition-opacity ${
                  CAN_SHIFT_LEFT ? "" : "opacity-30"
                }`}
                disabled={!CAN_SHIFT_LEFT}
                onClick={shiftLeft}
              >
                <FiArrowLeft />
              </button>
              <button
                className={`rounded-lg border-[1px] border-neutral-400 bg-white p-1.5 text-2xl transition-opacity ${
                  CAN_SHIFT_RIGHT ? "" : "opacity-30"
                }`}
                disabled={!CAN_SHIFT_RIGHT}
                onClick={shiftRight}
              >
                <FiArrowRight />
              </button>
            </div>
          </div>
          <motion.div
            animate={{
              x: offset,
            }}
            transition={{
              ease: "easeInOut",
            }}
            className="flex"
          >
            {posts.map((post) => {
              return <Post key={post.id} {...post} />;
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Post = ({ imgUrl, author, title, description }: PostType) => {
  return (
    <div
      className="relative shrink-0 cursor-pointer transition-transform hover:-translate-y-1"
      style={{
        width: CARD_WIDTH,
        marginRight: MARGIN,
      }}
    >
      <img
        src={imgUrl}
        className="mb-3 h-[200px] w-full rounded-lg object-cover"
        alt={`An image for a fake blog post titled ${title}`}
      />
      <span className="rounded-md border-[1px] border-neutral-500 px-1.5 py-1 text-xs uppercase text-neutral-500">
        {author}
      </span>
      <p className="mt-1.5 text-lg font-medium">{title}</p>
      <p className="text-sm text-neutral-500">{description}</p>
    </div>
  );
};

export {BlogPostCarousel} ;

type PostType = {
  id: number;
  imgUrl: string;
  author: string;
  title: string;
  description: string;
};

const posts: PostType[] = [
  {
    id: 1,
    imgUrl: "https://www.shutterstock.com/shutterstock/photos/1985332304/display_1500/stock-vector-team-success-and-improvement-sharing-same-business-goal-and-direction-support-and-partnership-for-1985332304.jpg",
    author: "John Anderson",
    title: "We built an AI chess bot with ChatGPT",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 2,
    imgUrl: "https://media.istockphoto.com/id/1155399377/photo/strategy-execution-success-concept.jpg?s=1024x1024&w=is&k=20&c=FeU0dmuCWWOImturRNPSFOGP-lGO6dM-YZs8vl4rUsc=",
    author: "Kyle Parsons",
    title: "How to grow your personal brand as a web designer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 3,
    imgUrl: "https://c7.alamy.com/comp/CW29A8/business-man-circling-graph-representing-growth-CW29A8.jpg",
    author: "Andrea Bates",
    title: "Calm down, monoliths are totally fine",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 4,
    imgUrl: "https://c7.alamy.com/comp/GW2GT1/business-growth-finance-management-concept-GW2GT1.jpg",
    author: "Jess Drum",
    title: "A quick guide to Framer Motion (for dummies)",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 5,
    imgUrl: "/imgs/blog/5.png",
    author: "Phil White",
    title: "You probably don't need kubernetes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 6,
    imgUrl: "/imgs/blog/6.png",
    author: "Karen Peabody",
    title: "State of JavaScript in 2024",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 7,
    imgUrl: "/imgs/blog/7.png",
    author: "Dante Gordon",
    title: "What's new in Python?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
];
