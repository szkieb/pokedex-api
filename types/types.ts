export type PokemonDetails = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  // technically below array are list of items which themselves are types
  abilities: string[];
  forms: string[];
  game_indices: string[];
  held_items: string[];
  location_area_encounters: string;
  moves: string[];
  past_types: string[];
  sprites: PokemonSprites;
  species: string[];
  stats: string[];
  types: string[];
};

export type PokemonSprites = {
  front_default: string;
  front_shiny: string;
  front_female: string;
  front_shiny_female: string;
  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
  other?: PokemonOtherSprites;
};

export type PokemonOtherSprites = {
  dream_world: { front_default: string; front_female: string };
  home: {
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
  };
  "official-artwork": { front_default: string };
};
