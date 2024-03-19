import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import type { Metadata } from "next";
import { biro, grotesk, messina } from "./font";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ape NFT",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${biro.variable} ${messina.variable} ${grotesk.variable} bg-main text-textBlack`}
      >
        <Header />
        <main className="relative overflow-hidden max-container padding-wrapper mt-[54px] xl:mt-[16px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}