import { IPokemonTeams } from "./pokemons";

export interface ITeams {
  id: string;
  equipo: string;
  pokemons: IPokemonTeams[];
}

export interface ITypeTeams {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}
