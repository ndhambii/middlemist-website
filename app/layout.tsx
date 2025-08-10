import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const font = Quicksand({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MiddleMist",
  description: "Depilação Feminina à Cera em Maputo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} scroll-smooth antialiased min-h-screen bg-[url("/background.png")] bg-cover bg-no-repeat font-semibold `}
      >
        <header>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
