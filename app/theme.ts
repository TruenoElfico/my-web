const dark = {
  main: "bg-[#0f1115] text-white",
  heroBorder: "border-b border-white/10",
  heroGradient:
    "bg-[radial-gradient(circle_at_top_right,rgba(105,232,255,0.16),transparent_28%),radial-gradient(circle_at_left,rgba(255,255,255,0.05),transparent_20%)]",
  heroGrid:
    "[background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)]",
  accent: "text-[#69E8FF]",
  badge: "border border-[#69E8FF]/30 bg-[#69E8FF]/10 text-[#69E8FF] shadow-cyan-500/10",
  heroSpan: "text-[#69E8FF]",
  availability: "text-[#69E8FF]",
  bodyText: "text-white/90",
  muted: "text-white/70",
  faint: "text-white/65",
  subtle: "text-white/50",
  soft: "text-white/80",
  cardOuter: "border border-white/10 bg-white/5",
  cardInner: "border border-white/10 bg-[#141821]",
  cardRow: "border border-white/10 bg-white/5",
  dot: "bg-[#69E8FF] shadow-[0_0_20px_rgba(105,232,255,0.8)]",
  skillChip: "border border-white/10 bg-white/5 text-white/80",
  workCard: "border border-white/10 bg-white/5 hover:bg-white/[0.07]",
  workIcon: "border border-[#69E8FF]/30 bg-[#69E8FF]/10",
  expCard: "border border-white/10 bg-[#12161f]",
  expCompany: "text-[#69E8FF]",
  contactCard: "border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03]",
  secondaryBtn: "border border-white/15 bg-white/5 text-white hover:bg-white/10",
  toggleBtn: "bg-[#141821] border-white/15 text-white/80 hover:border-[#69E8FF]/40 hover:text-[#69E8FF]",
};

const light = {
  main: "bg-gray-50 text-gray-900",
  heroBorder: "border-b border-gray-200",
  heroGradient:
    "bg-[radial-gradient(circle_at_top_right,rgba(105,232,255,0.10),transparent_28%),radial-gradient(circle_at_left,rgba(0,0,0,0.02),transparent_20%)]",
  heroGrid:
    "[background-image:linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)]",
  accent: "text-cyan-700",
  badge: "border border-cyan-300 bg-cyan-50 text-cyan-700 shadow-cyan-200/50",
  heroSpan: "text-cyan-600",
  availability: "text-cyan-700",
  bodyText: "text-gray-800",
  muted: "text-gray-600",
  faint: "text-gray-500",
  subtle: "text-gray-400",
  soft: "text-gray-700",
  cardOuter: "border border-gray-200 bg-white shadow-md",
  cardInner: "border border-gray-200 bg-gray-50",
  cardRow: "border border-gray-100 bg-white",
  dot: "bg-[#69E8FF] shadow-[0_0_14px_rgba(105,232,255,0.5)]",
  skillChip: "border border-gray-200 bg-white text-gray-700",
  workCard: "border border-gray-200 bg-white hover:bg-gray-50 shadow-sm",
  workIcon: "border border-cyan-200 bg-cyan-50",
  expCard: "border border-gray-200 bg-white shadow-sm",
  expCompany: "text-cyan-700",
  contactCard: "border border-gray-200 bg-gradient-to-br from-gray-100 to-gray-50",
  secondaryBtn: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100",
  toggleBtn: "bg-white border-gray-300 text-gray-700 hover:border-cyan-400 hover:text-cyan-700",
};

export const themes = { dark, light };
export type Theme = typeof dark;
