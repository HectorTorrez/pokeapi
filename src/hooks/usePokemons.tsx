import { useEffect, useState } from "react";

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonTypeOrAbility {
  pokemon: Pokemon;
}

export const usePokemons = (type?: string, ability?: string) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [next, setNext] = useState("");
  const [previous, setPrevious] = useState("");

  const fetchPokemons = async () => {
    try {
      let url = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20";
      if (type) {
        url = `https://pokeapi.co/api/v2/type/${type}?offset=20&limit=20`;
      } else if (ability) {
        url = `https://pokeapi.co/api/v2/ability/${ability}?offset=20&limit=20`;
      }
      const response = await fetch(url);
      const data = await response.json();

      if (type || ability) {
        setPokemons(
          data.pokemon.map((item: PokemonTypeOrAbility) => item.pokemon)
        );
      } else {
        setPokemons(data.results);
      }
      setNext(data.next);
      setPrevious(data.previous);
      setLoading(false);
    } catch (error) {
      setError("Failed to fetch pokemons");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, [type, ability]);

  return { pokemons, loading, error, next, previous };
};
