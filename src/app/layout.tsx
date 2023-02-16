import { Inter } from "@next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="m-8 bg-slate-100">
        <header className="flex justify-between">
          <Link href="/">
            <h1 className="mb-8 border-b-2 border-teal-400">
              Poke<span className="font-thin">Next</span>
            </h1>
          </Link>
          <p className="text-slate-700">
            Pokedex powered by Next13 and PokéAPI
          </p>
          {/* TODO add a navigation bar */}
        </header>
        {children}
      </body>
    </html>
  );
}
