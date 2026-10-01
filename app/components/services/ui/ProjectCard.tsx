"use client";

import { motion } from "framer-motion";
import { ServicesTheme } from "../theme";
import { easeOut } from "../motion";

interface Props {
  title: string;
  subtitle: string;
  theme: ServicesTheme;
}

export default function ProjectCard({ title, subtitle, theme }: Props) {
  return (
    <motion.article
      className={`group overflow-hidden rounded-2xl transition-colors duration-300 ${theme.cardBg}`}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: easeOut }}
    >
      <div className={`h-40 w-full overflow-hidden ${theme.cardBgAlt}`} aria-hidden="true">
        <motion.div
          className="h-full w-full"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4, ease: easeOut }}
        />
      </div>
      <div className="p-4">
        <h3 className={`text-sm font-semibold ${theme.heading}`}>{title}</h3>
        <p className={`mt-0.5 text-xs ${theme.faint}`}>{subtitle}</p>
      </div>
    </motion.article>
  );
}
