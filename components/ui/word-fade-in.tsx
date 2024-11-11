"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils"; // Assuming cn is your utility for classNames

interface WordFadeInProps {
  words: string;      // words prop to accept the string of text
  className?: string; // optional className prop
  delay?: number;     // delay between word animations
  variants?: Variants; // Custom variants for the animation
}

export default function WordFadeIn({
  words,
  delay = 0.15,
  variants = {
    hidden: { opacity: 0 },
    visible: (i: any) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * delay },
    }),
  },
  className,
}: WordFadeInProps) {
  const _words = words.split("");  // Split the string into individual characters

  return (
    <motion.h1
      variants={variants}
      initial="hidden"
      animate="visible"
      className={cn(
        "font-display text-center text-4xl font-bold tracking-[-0.02em] text-white drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]",
        className
      )}
    >
      {_words.map((word, i) => (
        <motion.span key={word} variants={variants} custom={i}>
          {word}  {/* Display each word with animation */}
        </motion.span>
      ))}
    </motion.h1>
  );
}
