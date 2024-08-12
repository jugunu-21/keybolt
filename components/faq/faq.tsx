
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";

function BasicFAQ  () {
  return (
    <div id="faq" className="px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h3 className="mb-4 text-center text-3xl font-semibold">
          Frequently asked questions
        </h3>
        <Question title="What is Keybolt and what does it offer?" defaultOpen>
          <div>
          Keybolt is a company dedicated to supporting local food businesses by providing affordable and accessible AI-based tools. Our digital assistant helps businesses optimize operations through sales forecasting, automated ordering, real-time product monitoring, and more.
          </div>
        </Question>
        <Question title="How does AI-generated sales forecasting work?">
          <div>
          Our AI-generated sales forecasting tool analyzes historical data patterns to predict future sales, helping you strike the perfect balance between selling out early and avoiding excess inventory.
          </div>
        </Question>
        <Question title="What is automated ordering and how can it benefit my business?">
          <div>
          Automated ordering ensures you always have the products your customers want by automatically placing orders based on demand, either directly to your production facility or through your ordering platform.
          </div>
        </Question>
        <Question title="Can Keybolt help me monitor my product performance in real time?">
          <div>
          Yes, our real-time product monitoring feature tracks sales, waste, and sold-out times for each individual product, giving you valuable insights into how your items are performing.
          </div>
        </Question>
      </div>
    </div>
  );
};

const Question = ({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: JSX.Element;
  defaultOpen?: boolean;
}) => {
  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="border-b-[1px] border-b-slate-300"
    >
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex w-full items-center justify-between gap-4 py-6"
      >
        <motion.span
          variants={{
            open: {
              color: "rgba(3, 6, 23, 0)",
            },
            closed: {
              color: "rgba(3, 6, 23, 1)",
            },
          }}
          className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-left text-lg font-medium"
        >
          {title}
        </motion.span>
        <motion.span
          variants={{
            open: {
              rotate: "180deg",
              color: "rgb(124 58 237)",
            },
            closed: {
              rotate: "0deg",
              color: "#030617",
            },
          }}
        >
          <FiChevronDown className="text-2xl" />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? height : "0px",
          marginBottom: open ? "24px" : "0px",
        }}
        className="overflow-hidden text-slate-600"
      >
        <div ref={ref}>{children}</div>
      </motion.div>
    </motion.div>
  );
};

export {BasicFAQ};