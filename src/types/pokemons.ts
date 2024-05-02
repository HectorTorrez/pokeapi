import { ITypeTeams } from "./teams";

export interface Pokemon {
  name: string;
  url: string;
}

export interface IPokemonTeams {
  id: string;
  name: string;
  types: ITypeTeams[];
}

export interface OnePokemon {
  name: string;
  abilities: Array<Ability>;
  types: Array<Type>;
  sprites: Sprites;
  stats: Array<Stat>;
  base_experience: number;
}

export interface Ability {
  ability: {
    name: string;
  };
}
export interface Type {
  type: {
    name: string;
  };
}
export interface Sprites {
  front_default: string;
}
export interface Stat {
  base_stat: number;
  stat: {
    name: string;
  };
}
