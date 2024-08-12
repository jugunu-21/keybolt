
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/footer";
const inter = Inter({ subsets: ["latin"] });
import { Toaster } from 'react-hot-toast';
import  FlipNavWrappe  from "@/components/navbar/navbar";
export const metadata: Metadata = {
  title: "keybolt",
  description: "Empowering Local Food Business with Smart Technology ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <FlipNavWrappe />
      
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
