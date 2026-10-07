import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  wide?: boolean;
  as?: "div" | "section" | "nav";
  id?: string;
  ariaLabel?: string;
}

// Single source of truth for this page's content width and side padding —
// every section goes through this instead of repeating mx-auto/max-w/px-*
// inline, so there's one place to change and content never touches the
// viewport edge on any device.
export default function Container({ children, className = "", wide = false, as = "div", id, ariaLabel }: Props) {
  const Tag = as;
  return (
    <Tag
      id={id}
      aria-label={ariaLabel}
      className={`mx-auto w-full px-6 ${wide ? "max-w-[1440px]" : "max-w-[1280px]"} ${className}`}
    >
      {children}
    </Tag>
  );
}
