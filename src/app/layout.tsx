import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./components/UI/footer";
import Header from "./components/UI/header";
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
  title: "Tatar cuisine",
  description:
    "A collection of traditional Tatar recipes, showcasing the rich culinary heritage of the Tatar people. Explore a variety of dishes, from hearty soups to delicious pastries, all made with authentic ingredients and time-honored techniques.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 text-zinc-800">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
