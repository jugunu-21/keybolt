import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/footer";
const inter = Inter({ subsets: ["latin"] });
import { Toaster } from 'react-hot-toast';
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
      {children}
      <Footer />
      <Toaster />
    </body>
  </html>
  );
}
