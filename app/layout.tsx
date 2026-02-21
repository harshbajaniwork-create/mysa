import type { Metadata } from "next";
import { Geologica} from "next/font/google";
import "./globals.css";

const geologica = Geologica({
  variable: "--font-geologica",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Mysa",
  description: "Mysa is a beautiful, cozy & eco friendly getaway in the heart of the Himalayas, surrounded by Apple orchards - a peaceful & stylish retreat",
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
        {children}
      </body>
    </html>
  );
}
