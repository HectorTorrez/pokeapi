/* eslint-disable react/react-in-jsx-scope */
import { Link } from "react-router-dom";
import { Pokemon } from "../types/pokemons";
import { Arrow } from "./Icons";

interface PokemonListProps {
  pokemons: Pokemon;
}
export function PokemonList({ pokemons }: PokemonListProps) {
  const { name } = pokemons;
  return (
    <section className="border border-gray-50 flex justify-center flex-col items-center p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
      <p className="font-bold text-2xl">{name}</p>
      <div className="h-72">
        <img
          className="h-full"
          src={`https://img.pokemondb.net/artwork/${name}.jpg`}
          alt={name}
        />
      </div>
      <div className="flex justify-end mt-10 w-full">
        <Link
          to={`/${name}`}
          className="flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
        >
          Mas informacion
          <Arrow />
        </Link>
      </div>
    </section>
  );
}
