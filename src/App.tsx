/* eslint-disable react/react-in-jsx-scope */

import "./App.css";
import { usePokemons } from "./hooks/usePokemons";
import { PokemonList } from "./components/PokemonList";
import Filters from "./components/Filters";
import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";

function App() {
  const [type, setType] = useState(() => {
    const newType = localStorage.getItem("type");
    return newType ? newType : "";
  });
  const [ability, setAbility] = useState(() => {
    const newAbility = localStorage.getItem("ability");
    return newAbility ? newAbility : "";
  });
  const [filterByName, setFilterByName] = useState("");
  const { pokemons, error, loading } = usePokemons(type, ability);

  const getType = async (type: string) => {
    setAbility("");
    setType(type);
  };
  const handleAbility = async (ability: string) => {
    setType("");
    setAbility(ability);
  };
  const handleFilterByName = async (filter: string) => {
    setFilterByName(filter);
  };

  const pokemonsFiltered = pokemons.filter((pokemon) => {
    return pokemon.name.includes(filterByName);
  });

  useEffect(() => {
    localStorage.setItem("type", type);
  }, [type]);

  useEffect(() => {
    localStorage.setItem("ability", ability);
  }, [ability]);

  return (
    <section className="max-w-[1500px] m-auto">
      <Navbar />
      <section>
        <Filters
          getType={getType}
          getAbility={handleAbility}
          handleFilterByName={handleFilterByName}
          type={type}
          ability={ability}
        />
      </section>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul className="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {pokemonsFiltered.map((pokemon) => (
          <PokemonList key={pokemon.name} pokemons={pokemon} />
        ))}
        {pokemonsFiltered.length === 0 && <p>No se encontraron resultados</p>}
      </ul>
    </section>
  );
}

export default App;
