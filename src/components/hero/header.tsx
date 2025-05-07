"use client";

import { motion } from "motion/react";
import React from "react";
import { AuroraBackground } from "@/components/motion/aurora-background";
import Link from "next/link";

export function Header() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 pt-14"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Learn Languages in Depth
        </div>
        <div className="font-extralight text-base md:text-2xl dark:text-neutral-200 py-4 text-center">
          Translate and understand any webpage instantly with AI assistance
        </div>
        <Link
          href="https://chromewebstore.google.com/detail/read-frog/modkelfkcfjpgbfmnbnllalkiogfofhb?utm_source=official"
          target="_blank"
          className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2 flex items-center gap-2"
        >
          <img src="/images/icons/chrome.png" alt="Chrome" className="size-5" />
          Install Now
        </Link>
      </motion.div>
    </AuroraBackground>
  );
}
