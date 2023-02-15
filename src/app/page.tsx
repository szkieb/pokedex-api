import { Inter } from "@next/font/google";
import Link from "next/link";
import { clsx } from "clsx";

const inter = Inter({ subsets: ["latin"], variable: "--inter-font" });

export default function Home() {
  return (
    <main className={clsx(inter.className, "m-8 flex flex-col gap-2")}>
      <h1>Pokedex powered by PokeApi</h1>
      <p>
        This is a Pokedex featuring all 1008 currently published pokemon. You
        can search for pokemon using the searchbar. You can click one of the
        random Pokemon Card to see the creature's details. You can also choose
        to select a pokemon generation first and go from there. In any case, do
        have fun.
      </p>
      <Link className="p-4 flex bg-teal-400 rounded-md w-fit" href={"/pokedex"}>
        Go to the Pokedex
      </Link>
    </main>
  );
}
