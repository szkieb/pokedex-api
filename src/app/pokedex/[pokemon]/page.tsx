import Link from "next/link";

async function getData() {
  const Url = "https://pokeapi.co/api/v2/pokemon";
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

type data = {
  count: number;
  next: null | string;
  previous: null | string;
  results: Pokemon[];
};

type Pokemon = { name: string; url: string };

export default async function Pokedex() {
  const data: data = await getData();
  const listOfRandomPokemon = data.results.map((pokemon, idx) => {
    return (
      <p key={idx}>
        <Link href={pokemon.url}> {pokemon.name}</Link>
      </p>
    );
  });

  return (
    <>
      <h1>Pokedex</h1>
      <h2>Adding searchbar here</h2>
      <h2>Pick a pokemon</h2>
      {listOfRandomPokemon}
    </>
  );
}
