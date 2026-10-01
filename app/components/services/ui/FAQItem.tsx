"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ServicesTheme } from "../theme";
import { easeOut } from "../motion";

interface Props {
  question: string;
  answer: string;
  theme: ServicesTheme;
}

export default function FAQItem({ question, answer, theme }: Props) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className={`border-b ${theme.accordionBorder}`}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls={panelId}
        className={`flex w-full items-center justify-between gap-4 py-4 text-left transition ${theme.accordionHover}`}
      >
        <span className={`text-sm font-medium ${theme.heading}`}>{question}</span>
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          className={`shrink-0 transition-transform duration-200 ${theme.faint} ${open ? "rotate-45" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: easeOut }}
            className="overflow-hidden"
          >
            <p className={`pb-4 text-sm leading-6 ${theme.body}`}>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
