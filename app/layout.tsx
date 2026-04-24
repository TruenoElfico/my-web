import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "./providers/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const BASE_URL = "https://truenoelfico.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Braulio Romero — UX Engineer & Frontend Developer",
    template: "%s | Braulio Romero",
  },
  description:
    "Braulio Romero is a UX Engineer specializing in design systems, frontend architecture, and high-converting web experiences. Available for frontend, product, and web experience work.",
  keywords: [
    "Braulio Romero",
    "UX Engineer",
    "Frontend Developer",
    "Design Systems",
    "React Developer",
    "Next.js Developer",
    "Frontend Architecture",
    "Web Experience",
    "Landing Pages",
    "UI Engineering",
    "TypeScript",
    "Accessibility",
  ],
  authors: [{ name: "Braulio Romero", url: BASE_URL }],
  creator: "Braulio Romero",
  publisher: "Braulio Romero",
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Braulio Romero",
    title: "Braulio Romero — UX Engineer & Frontend Developer",
    description:
      "Braulio Romero is a UX Engineer specializing in design systems, frontend architecture, and high-converting web experiences.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Braulio Romero — UX Engineer & Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Braulio Romero — UX Engineer & Frontend Developer",
    description:
      "UX Engineer specializing in design systems, frontend architecture, and high-converting web experiences.",
    images: ["/og-image.png"],
    creator: "@braulioromero",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Braulio Romero",
  url: BASE_URL,
  email: "terrbete@gmail.com",
  jobTitle: "UX Engineer",
  description:
    "UX Engineer specializing in design systems, frontend architecture, and high-converting web experiences.",
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Design Systems",
    "Frontend Architecture",
    "UX Engineering",
    "Accessibility",
  ],
  sameAs: [
    "https://www.linkedin.com/in/braulio-romero/",
    "https://github.com/TruenoElfico",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0f1115" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
