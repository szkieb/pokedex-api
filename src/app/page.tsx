import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-2">
      <h2>Pokedex powered by PokeApi</h2>
      <p>
        This is a Pokedex featuring all 1008 currently published pokemon. You
        can search for pokemon using the searchbar. You can click one of the
        random Pokemon Card to see the creature's details. You can also choose
        to select a pokemon generation first and go from there. In any case, do
        have fun.
      </p>
      <Link className="flex w-fit rounded-md bg-teal-400 p-4" href={"/pokedex"}>
        Go to the Pokedex
      </Link>
    </main>
  );
}
