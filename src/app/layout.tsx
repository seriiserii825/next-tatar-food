import Footer from "@/components/UI/Footer";
import Header from "@/components/UI/Header";
import { siteConfig } from "@/config/siteConfig";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen flex justify-between flex-col bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 text-zinc-800">
          <Header />
          <div className="flex-1 overflow-x-hidden">{children}</div>
          <Footer />
          <Toaster position="top-right" />
        </div>
      </body>
    </html>
  );
}
