/* eslint-disable react/react-in-jsx-scope */
import { createContext, useEffect, useState } from "react";
import { ITeams } from "../types/teams";
import { IPokemonTeams } from "../types/pokemons";

interface ITeamsContext {
  teams: ITeams[];
  createTeam: (teamName: string) => void;
  deleteTeam: (teamId: string) => void;
  addPokemonToTeam: (teamId: string, pokemon: IPokemonTeams) => void;
  deletePokemon: (teamId: string, pokemonId: string) => void;
}

export const TeamsContext = createContext<ITeamsContext>({
  teams: [] as ITeams[],
  createTeam: () => {},
  deleteTeam: () => {},
  addPokemonToTeam: () => {},
  deletePokemon: () => {},
});

export const TeamsProvider = ({ children }: { children: React.ReactNode }) => {
  const [teams, setTeams] = useState<ITeams[]>(() => {
    const teams = localStorage.getItem("teams");
    if (teams) {
      return JSON.parse(teams);
    }
    return [];
  });

  const addPokemonToTeam = (teamId: string, pokemon: IPokemonTeams) => {
    setTeams((prevTeams) => {
      return prevTeams.map((team) => {
        if (team.id === teamId) {
          return { ...team, pokemons: [...team.pokemons, pokemon] };
        } else {
          return team;
        }
      });
    });
  };

  const createTeam = (teamName: string) => {
    setTeams((prevTeams) => [
      ...prevTeams,
      { id: crypto.randomUUID(), equipo: teamName, pokemons: [] },
    ]);
  };

  const deleteTeam = (teamId: string) => {
    setTeams((prevTeams) => prevTeams.filter((team) => team.id !== teamId));
  };

  const deletePokemon = (teamId: string, pokemonId: string) => {
    setTeams((prevTeams) => {
      return prevTeams.map((team) => {
        if (team.id === teamId) {
          return {
            ...team,
            pokemons: team.pokemons.filter(
              (pokemon) => pokemon.id !== pokemonId
            ),
          };
        } else {
          return team;
        }
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("teams", JSON.stringify(teams));
  }, [teams]);

  return (
    <TeamsContext.Provider
      value={{ teams, createTeam, deleteTeam, addPokemonToTeam, deletePokemon }}
    >
      {children}
    </TeamsContext.Provider>
  );
};
