"use client";

import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

// Shared motion language for the Services page: restrained fade + small
// upward translation, triggered once on viewport entry, smooth easing.
// Kept in one place so every section animates consistently instead of each
// component hand-rolling its own transition numbers.

export const easeOut = [0.22, 1, 0.36, 1] as const;

export const viewportOnce = { once: true, margin: "-80px" } as const;

export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } },
};

export const scaleFadeItem: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: easeOut } },
};

export function staggerContainer(stagger = 0.1, delayChildren = 0): Variants {
  return {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren } },
  };
}

interface RevealProps {
  children: ReactNode;
  className?: string;
  y?: number;
  duration?: number;
  delay?: number;
  /**
   * "viewport" (default) animates the first time the element scrolls into
   * view — right for anything below the fold. "mount" animates immediately
   * on render instead — required for above-the-fold content (e.g. the
   * hero), where whileInView's negative viewport margin can leave content
   * stuck at opacity:0 on short mobile viewports since there's no scroll
   * event left to trigger it.
   */
  trigger?: "viewport" | "mount";
}

// Fades + translates a block up into place.
export function Reveal({ children, className, y = 18, duration = 0.55, delay = 0, trigger = "viewport" }: RevealProps) {
  const animate = { opacity: 1, y: 0 };
  const transition = { duration, delay, ease: easeOut };
  if (trigger === "mount") {
    return (
      <motion.div className={className} initial={{ opacity: 0, y }} animate={animate} transition={transition}>
        {children}
      </motion.div>
    );
  }
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={animate}
      viewport={viewportOnce}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}

interface StaggerGroupProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  /** See Reveal's trigger prop — "mount" is required for above-the-fold content. */
  trigger?: "viewport" | "mount";
}

// Orchestrates a staggered reveal of its motion children (StaggerItem, or any
// motion element using fadeUpItem/scaleFadeItem).
export function StaggerGroup({ children, className, stagger = 0.1, delayChildren = 0, trigger = "viewport" }: StaggerGroupProps) {
  const variants = staggerContainer(stagger, delayChildren);
  if (trigger === "mount") {
    return (
      <motion.div className={className} initial="hidden" animate="show" variants={variants}>
        {children}
      </motion.div>
    );
  }
  return (
    <motion.div className={className} initial="hidden" whileInView="show" viewport={viewportOnce} variants={variants}>
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
}

export function StaggerItem({ children, className, variants = fadeUpItem }: StaggerItemProps) {
  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}
