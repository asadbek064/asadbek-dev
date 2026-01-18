"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div>
      <div className="mx-auto pt-4 ">
        <div className="[font-size:var(--step-2)] font-bold mb-4 text-neutral-800 dark:text-neutral-200">
          Highlights from My Journey
        </div>
      </div>

      <div
        className="relative  w-full font-sans rounded-md bg-white/20 dark:bg-[#111010]/50 backdrop-blur-lg dark:border-white/10"
        style={{ position: "relative" }}
        ref={containerRef}
      >
        <div className="relative max-w-7xl mx-auto pb-20 md:px-8">
          {data.map((item, index) => (
            <div key={index} className="relative pt-10 md:pt-20">
              {/* Timeline dot */}
              <div className="absolute left-3 md:left-8 top-10 md:top-20 h-10 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center z-10">
                <div className="h-4 w-4 rounded-full bg-neutral-300 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>

              {/* Title */}
              <div className="relative pl-20 pr-4 md:pl-24 md:pr-8">
                <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-neutral-500 dark:text-white mb-6">
                  {item.title}
                </h2>
              </div>

              {/* Content */}
              <div className="relative pl-20 pr-4 md:pl-24 md:pr-8 w-full">
                {item.content}
              </div>
            </div>
          ))}

          {/* Timeline line */}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute left-8 md:left-13 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-gray-500 via-neutral-500 to-transparent from-[0%] via-[10%] rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
