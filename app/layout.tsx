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
    default: "Braulio Romero — UX Engineer y Desarrollador Frontend",
    template: "%s | Braulio Romero",
  },
  description:
    "Braulio Romero es UX Engineer especializado en sistemas de diseño, arquitectura frontend y experiencias web que convierten. Disponible para proyectos de frontend, producto y experiencia web.",
  keywords: [
    "Braulio Romero",
    "UX Engineer",
    "Desarrollador Frontend",
    "Desarrollo web",
    "Diseño de páginas web",
    "Sistemas de diseño",
    "Desarrollador React",
    "Desarrollador Next.js",
    "Arquitectura frontend",
    "Landing pages",
    "TypeScript",
    "Accesibilidad web",
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
    locale: "es_MX",
    url: BASE_URL,
    siteName: "Braulio Romero",
    title: "Braulio Romero — UX Engineer y Desarrollador Frontend",
    description:
      "UX Engineer especializado en sistemas de diseño, arquitectura frontend y experiencias web que convierten.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Braulio Romero — UX Engineer y Desarrollador Frontend",
    description:
      "UX Engineer especializado en sistemas de diseño, arquitectura frontend y experiencias web que convierten.",
    creator: "@braulioromero",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${BASE_URL}/#person`,
  name: "Braulio Romero",
  url: BASE_URL,
  email: "terrbete@gmail.com",
  jobTitle: "UX Engineer",
  description:
    "UX Engineer especializado en sistemas de diseño, arquitectura frontend y experiencias web que convierten.",
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
    <html lang="es">
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
