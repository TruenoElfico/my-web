import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
