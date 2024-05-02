import { useEffect, useState } from "react";
import { OnePokemon } from "../types/pokemons";

/* eslint-disable react/react-in-jsx-scope */
export function useOnePokemon(name: string) {
  const [pokemon, setPokemon] = useState<OnePokemon | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const fetchPokemon = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      setLoading(true);
      const data = await response.json();
      setPokemon(data);
      setLoading(false);
    } catch (error: unknown) {
      setError("Error al cargar el pokemon");
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPokemon();
  }, [name]);

  return { pokemon, loading, error };
}
