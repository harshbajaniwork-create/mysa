import type { Metadata } from "next";
import { Geologica } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geologica = Geologica({
  variable: "--font-geologica",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Mysa",
  description:
    "Mysa is a beautiful, cozy & eco friendly getaway in the heart of the Himalayas, surrounded by Apple orchards - a peaceful & stylish retreat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geologica.className} ${geologica.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
