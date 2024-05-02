import { useState, useEffect } from "react";

interface PokemonType {
  name: string;
  url: string;
}

interface UseGetTypesResult {
  types: PokemonType[];
  isLoading: boolean;
  error: string | null;
}

const useGetTypes = (): UseGetTypesResult => {
  const [types, setTypes] = useState<PokemonType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTypes = async () => {
      setIsLoading(true);

      try {
        const response = await fetch("https://pokeapi.co/api/v2/type");
        const data = await response.json();

        setTypes(data.results);
      } catch (error) {
        setError("Failed to fetch types");
      }

      setIsLoading(false);
    };

    fetchTypes();
  }, []);

  return { types, isLoading, error };
};

export default useGetTypes;
