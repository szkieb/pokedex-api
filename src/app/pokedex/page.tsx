import { PokemonCard } from "./PokemonCard";
import Searchbar from "./Searchbar";

interface getPokemonDataProps {
  UrlSnippet?: string;
}

async function getPokemonData({ UrlSnippet }: getPokemonDataProps) {
  !UrlSnippet ? (UrlSnippet = "") : (UrlSnippet = UrlSnippet);

  const Url = `https://pokeapi.co/api/v2/pokemon${UrlSnippet}`;

  const res = await fetch(Url);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

type Pokemondata = {
  count: number;
  next: null | string;
  previous: null | string;
  results: PokemonLink[];
};

export type PokemonLink = { name: string; url: string };

export default async function Pokedex() {
  const data: Pokemondata = await getPokemonData({});
  const listOfRandomPokemon = data.results.map((pokemon, idx) => {
    /* @ts-expect-error Server Component */
    return <PokemonCard key={idx} pokemon={pokemon} />;
  });

  return (
    <>
      <h2 className="pb-4">Search a pokemon</h2>
      {/* TODO improve design of searchbar */}
      <div className="colo- w-fit rounded-md border border-teal-400 p-1">
        <Searchbar searchterm="" />
      </div>
      <h2 className="pb-4">Pick a pokemon</h2>
      <div className="grid grid-cols-4 gap-8 px-12">{listOfRandomPokemon}</div>
      {/* TODO: add pagination */}
    </>
  );
}
