import { PokemonDetails, PokemonOtherSprites } from "types/types";
import Image from "next/image";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////// fetch request /////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export interface getPokemonProps {
  nameOrId: string;
}

export async function getPokemon({ nameOrId }: getPokemonProps) {
  const Url = `https://pokeapi.co/api/v2/pokemon/${nameOrId}`;
  console.log("Url", Url);

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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////// component /////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

type PokemonDetailPageProps = {
  // param aka slug is either name or id of pokemon
  params: { pokemon: string };
};

export default async function PokemonDetailPage({
  params,
}: PokemonDetailPageProps) {
  console.log("param", params.pokemon);

  const pokemonDetails: PokemonDetails = await getPokemon({
    nameOrId: params.pokemon,
  });

  //TODO: make this util function to use here and in PokemonCard component
  let image = pokemonDetails.sprites.front_default;
  if ("other" in pokemonDetails.sprites) {
    const otherSprites = pokemonDetails.sprites.other as PokemonOtherSprites;
    image = otherSprites["official-artwork"].front_default;
  }

  return (
    <>
      <h1>{pokemonDetails.name}</h1>
      <Image
        className="h-3/4 object-contain"
        src={image}
        alt={pokemonDetails.name}
        width={500}
        height={500}
      ></Image>
      <p>{pokemonDetails.weight}</p>
    </>
  );
}
