import type { Metadata } from "next";
import { Inria_Serif } from "next/font/google";
import "./globals.css";

const inriaSerif = Inria_Serif({
  variable: "--font-inria-serif",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Braulio Romero - UX/UI Engineer",
  description: "Braulio Romero - UX/UI Engineer",
  keywords: ["Braulio Romero", "UX/UI Engineer", "Design Systems", "Frontend Development", "Web Components"],
  authors: [{ name: "Braulio Romero", url: "https://braulio-romero.com" }],
  creator: "Braulio Romero",
  publisher: "Braulio Romero",
  openGraph: {
    title: "Braulio Romero - UX/UI Engineer",
    description: "Braulio Romero - UX/UI Engineer",
    url: "https://braulio-romero.com",
    siteName: "Braulio Romero - UX/UI Engineer",
    images: [
      { url: "https://braulio-romero.com/og-image.png" },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inriaSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
