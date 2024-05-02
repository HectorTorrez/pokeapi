import React, { useContext, useState } from "react";
import { TeamsContext } from "../context/TeamsContext";
import { IPokemonTeams } from "../types/pokemons";

interface SelectTeamProps {
  pokemon: IPokemonTeams | null;
}

export default function SelectTeam({ pokemon }: SelectTeamProps) {
  const { teams, addPokemonToTeam } = useContext(TeamsContext);
  const [teamId, setTeamId] = useState("");
  function handleChange(event: React.ChangeEvent<HTMLSelectElement>): void {
    // getAbility(event.target.value);
    setTeamId(event.target.value);
  }

  const handleAddPokemonToTeam = () => {
    if (!pokemon) return;
    const newPokemon = {
      id: pokemon.id,
      name: pokemon.name,
      types: pokemon.types,
    };
    addPokemonToTeam(teamId, newPokemon);
  };

  return (
    <section>
      <select
        onChange={handleChange}
        id="type"
        className="text-black border border-blue-700 rounded-lg p-2.5 w-full "
      >
        {teams.length > 0 ? (
          <option value="Selecciona un equipo">Selecciona un equipo</option>
        ) : (
          <option value="No hay equipos">No hay equipos</option>
        )}
        {teams?.map((team) => {
          return (
            <option key={team.id} value={team.id}>
              {team.equipo}
            </option>
          );
        })}
      </select>
      <div className="flex justify-end">
        <button
          onClick={() => {
            handleAddPokemonToTeam();
            alert("Pokemon agregado al equipo");
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
        >
          Agregar a equipo
        </button>
      </div>
    </section>
  );
}
