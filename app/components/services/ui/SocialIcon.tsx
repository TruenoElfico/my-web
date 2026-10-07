"use client";

import { motion } from "framer-motion";
import { ServicesTheme } from "../theme";
import { easeOut } from "../motion";

interface Props {
  icon: string;
  label: string;
  href: string;
  theme: ServicesTheme;
}

export default function SocialIcon({ icon, label, href, theme }: Props) {
  // The SVGs ship with a fixed dark fill, invisible on the dark footer. Using
  // them as a mask painted with currentColor makes the icon follow the theme's
  // text color (≥3:1 contrast in both themes) instead of the file's fill.
  const iconMask = `url(${icon}) center / contain no-repeat`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors ${theme.navLink}`}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2, ease: easeOut }}
    >
      <span
        className="h-[26px] w-[26px] bg-current"
        style={{ mask: iconMask, WebkitMask: iconMask }}
        aria-hidden="true"
      />
    </motion.a>
  );
}
