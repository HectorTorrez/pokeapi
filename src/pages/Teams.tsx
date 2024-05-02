import React, { useContext, useState } from "react";
import { Navbar } from "../components/Navbar";
import { TeamsContext } from "../context/TeamsContext";
import { TeamsCard } from "../components/TeamsCard";
import AddPokemonInTeams from "../components/AddPokemonInTeams";

export function Teams() {
  const { teams, createTeam } = useContext(TeamsContext);
  const [teamName, setTeamName] = useState("");

  const handleCreateTeam = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    teamName.length >= 3 && createTeam(teamName);
    setTeamName("");
    alert("Equipo creado");
  };

  return (
    <section className="max-w-[1500px] m-auto">
      <Navbar />

      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">Mis equipos</h1>
        <form
          onSubmit={handleCreateTeam}
          className="mt-5 flex items-center gap-4 "
        >
          <label htmlFor="name">
            <input
              value={teamName}
              type="text"
              id="name"
              className="border border-gray-400 p-1 rounded"
              placeholder="Nombre del equipo"
              onChange={(e) => setTeamName(e.target.value)}
            />
          </label>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Crear equipo
          </button>
        </form>
        <div>
          <AddPokemonInTeams />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mb-3">
        {teams?.map((team) => (
          <TeamsCard key={team.id} pokemonTeam={team} />
        ))}
      </div>
    </section>
  );
}
