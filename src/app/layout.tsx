import type { Metadata } from "next";
import { Inter, Kantumruy_Pro } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const kantumruy = Kantumruy_Pro({
  subsets: ["khmer", "latin"],
  variable: "--font-kantumruy",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SomaTech — Smart Solution for Modern Businesses",
  description:
    "SomaTech is a forward-thinking technology startup offering smart digital products and scalable solutions that help Modern Businesses.",
  keywords: ["SomaTech", "tech startup", "Cambodia", "mobile apps", "web development"],
  openGraph: {
    title: "SomaTech — Smart Solution for Modern Businesses",
    description: "Invention of intelligent digital products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${kantumruy.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#0d1420] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
