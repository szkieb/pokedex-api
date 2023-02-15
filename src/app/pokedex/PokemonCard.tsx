import Link from "next/link";
import { PokemonLink } from "./page";
import { PokemonDetails, PokemonOtherSprites } from "./../../../types/types";
import Image from "next/image";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////// fetch request /////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export interface getPokemonProps {
  nameOrId: string;
}

async function getPokemon({ nameOrId }: getPokemonProps) {
  const Url = `https://pokeapi.co/api/v2/pokemon/${nameOrId}`;

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

export type PokemonCardProps = { pokemon: PokemonLink };

export async function PokemonCard({ pokemon }: PokemonCardProps) {
  const data: PokemonDetails = await getPokemon({ nameOrId: pokemon.name });

  let image = data.sprites.front_default;
  if ("other" in data.sprites) {
    const otherSprites = data.sprites.other as PokemonOtherSprites;
    image = otherSprites["official-artwork"].front_default;
  }

  const upperCaseName =
    pokemon.name[0].toUpperCase() + pokemon.name.substring(1);

  return (
    <Link href={pokemon.url}>
      <div className="flex h-32 w-32 flex-col items-center gap-2 overflow-hidden rounded-md border border-solid border-teal-600 bg-slate-100 p-2 hover:bg-slate-300">
        <Image
          className="h-3/4 object-contain"
          src={image}
          alt={pokemon.name}
          width={500}
          height={500}
        ></Image>
        <p className="font-semibold ">{upperCaseName}</p>
      </div>
    </Link>
  );
}
