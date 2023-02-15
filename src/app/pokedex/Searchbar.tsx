"use client";

import { useState } from "react";
import { Combobox } from "@headlessui/react";
import { HiOutlineCheck, HiOutlineChevronUpDown } from "react-icons/hi2";

import { pokemonList } from "../../../enum/pokemonList";

interface SearchbarProps {
  searchterm: string;
}

export default function Searchbar({ searchterm }: SearchbarProps) {
  const [selectedPerson, setSelectedPerson] = useState(pokemonList[0]);
  const [query, setQuery] = useState(searchterm);

  const filteredPokemon =
    query === ""
      ? pokemonList
      : pokemonList.filter((pokemon) => {
          return pokemon.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox value={selectedPerson} onChange={setSelectedPerson}>
      <Combobox.Input onChange={(event) => setQuery(event.target.value)} />

      <Combobox.Options>
        {filteredPokemon.map((pokemon) => (
          <Combobox.Option key={pokemon.url} value={pokemon.url}>
            {pokemon.name}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  );
}
