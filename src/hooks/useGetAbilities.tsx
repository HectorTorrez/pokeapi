import { useEffect, useState } from "react";

interface Ability {
  name: string;
  url: string;
}

const useGetAbilities = () => {
  const [abilities, setAbilities] = useState<Ability[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAbilities = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/ability?offset=20&limit=20"
        );
        const data = await response.json();
        setAbilities(data.results);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch abilities");
        setLoading(false);
      }
    };

    fetchAbilities();
  }, []);

  return { abilities, loading, error };
};

export default useGetAbilities;
