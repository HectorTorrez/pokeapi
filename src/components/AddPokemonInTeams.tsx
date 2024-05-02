/* eslint-disable react/react-in-jsx-scope */
import { useContext, useState } from "react";
import { TeamsContext } from "../context/TeamsContext";
import { usePokemons } from "../hooks/usePokemons";
import { useOnePokemon } from "../hooks/useOnePokemon";
import { IPokemonTeams } from "../types/pokemons";

export default function AddPokemonInTeams() {
  const [teamId, setTeamId] = useState<string>("");
  const [pokemonName, setPokemonName] = useState<string>("");
  const { teams, addPokemonToTeam } = useContext(TeamsContext);
  const { pokemons } = usePokemons();
  const { pokemon } = useOnePokemon(pokemonName);

  const handleAddPokemonToTeam = () => {
    if (!pokemon) return alert("Selecciona un pokemon");
    if (!teamId || !pokemonName) {
      return alert("Selecciona un pokemon o un team");
    }
    const newPokemon = {
      id: crypto.randomUUID(),
      name: pokemon.name,
      types: pokemon.types,
    };
    addPokemonToTeam(teamId, newPokemon as IPokemonTeams);
    alert("Pokemon agregado al equipo");
  };

  return (
    <section className="flex flex-col items-center gap-5 mt-3 mb-3 lg:flex-row md:items-center">
      <select
        onChange={(e) => {
          setPokemonName(e.target.value);
          setPokemonName(e.target.value);
        }}
        className="text-black border border-blue-700 rounded-lg p-2.5 min-w-[320px] w-[320px] h-12  "
      >
        <option value="Selecciona un pokemon">Selecciona un pokemon</option>
        {pokemons.map((pokemon) => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      <select
        name="teams"
        onChange={(e) => setTeamId(e.target.value)}
        className="text-black border border-blue-700 rounded-lg p-2.5  min-w-[320px] w-[320px] h-12 "
      >
        <option value="Selecciona un team">Selecciona un equipo</option>
        {teams.map((team) => (
          <option key={team.id} value={team.id}>
            {team.equipo}
          </option>
        ))}
      </select>

      <button
        onClick={handleAddPokemonToTeam}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded max-w-[320px] "
      >
        Agregar un pokemon
      </button>
    </section>
  );
}
