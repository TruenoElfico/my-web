"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { easeOut } from "../motion";

interface Props {
  icon: string;
  label: string;
  href: string;
}

export default function SocialIcon({ icon, label, href }: Props) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full opacity-70 transition-opacity hover:opacity-100"
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2, ease: easeOut }}
    >
      <Image src={icon} alt="" width={26} height={26} />
    </motion.a>
  );
}
