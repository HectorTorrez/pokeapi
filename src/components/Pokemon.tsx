/* eslint-disable react/react-in-jsx-scope */
import { useParams } from "react-router-dom";
import { useOnePokemon } from "../hooks/useOnePokemon";
import { Navbar } from "./Navbar";
import SelectTeam from "./SelectTeam";
import { IPokemonTeams } from "../types/pokemons";

export function Pokemon() {
  const pokemon = useParams();

  if (!pokemon.pokemon) return <p>No hay informacion</p>;
  const {
    pokemon: PokemonInfo,
    loading,
    error,
  } = useOnePokemon(pokemon.pokemon);

  return (
    <div className="max-w-[1000px] m-auto">
      <Navbar />
      {error && <p>Error: {error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <section className="border border-gray-50 flex justify-center flex-col items-center p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out md:flex-row gap-5">
          <div className="h-72 mr-2">
            <p className="font-bold text-2xl">{PokemonInfo?.name}</p>
            <img
              className="h-64"
              src={`https://img.pokemondb.net/artwork/${PokemonInfo?.name}.jpg`}
              alt={PokemonInfo?.name}
            />
          </div>
          <div className="grid grid-cols-2 gap-x-5 md:grid-cols-3">
            <div>
              <h2 className="font-bold text-xl">Habilidades</h2>
              {PokemonInfo?.abilities.map((ability) => (
                <p key={ability.ability.name}>{ability.ability.name}</p>
              ))}
            </div>
            <div>
              <h2 className="font-bold text-xl">Estadisticas</h2>
              {PokemonInfo?.stats.map((stat) => (
                <p key={stat.stat.name}>
                  {stat.stat.name} : {stat.base_stat}
                </p>
              ))}
            </div>
            <div>
              <h2 className="font-bold text-xl">Experiencia base</h2>
              <p>{PokemonInfo?.base_experience}</p>
            </div>
            <div>
              <h2 className="font-bold text-xl">Tipos</h2>
              {PokemonInfo?.types.map((type) => (
                <p key={type.type.name}>{type.type.name}</p>
              ))}
            </div>
          </div>
          <div className="md:w-[50%]">
            <SelectTeam pokemon={PokemonInfo as unknown as IPokemonTeams} />
          </div>
        </section>
      )}
    </div>
  );
}
