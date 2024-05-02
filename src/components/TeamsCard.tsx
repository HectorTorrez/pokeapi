/* eslint-disable react/react-in-jsx-scope */
import { useContext } from "react";
import { ITeams, ITypeTeams } from "../types/teams";
import { TeamsContext } from "../context/TeamsContext";
import { IPokemonTeams } from "../types/pokemons";
import DeleteButton from "./DeleteButton";
import { Delete } from "./Icons";

interface TeamsCardProps {
  pokemonTeam: ITeams;
}

export function TeamsCard({ pokemonTeam }: TeamsCardProps) {
  const { equipo, pokemons, id } = pokemonTeam;

  const { deleteTeam } = useContext(TeamsContext);

  return (
    <section className="rounded-lg border bg-card text-card-foreground shadow-sm p-2">
      <header className="flex items-center justify-between space-y-1.5 pt-1 pb-1 ">
        <h2 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
          {equipo}
        </h2>
        <DeleteButton
          className=" text-red-400 "
          onDelete={() => {
            confirm("Estas seguro de eliminar el equipo?") && deleteTeam(id);
          }}
        >
          <Delete />
        </DeleteButton>
      </header>
      <div>
        <div className="grid grid-cols-3 gap-4">
          {pokemons.length === 0 && (
            <p className="text-center col-span-3 p-4">
              No hay pokemons en este equipo
            </p>
          )}
          {pokemons?.map((pokemon) => (
            <CardBody key={pokemon.id} pokemon={pokemon} teamId={id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export const CardBody = ({
  pokemon,
  teamId,
}: {
  pokemon: IPokemonTeams;
  teamId: string;
}) => {
  const { name, types, id } = pokemon;

  const { deletePokemon } = useContext(TeamsContext);

  return (
    <>
      <div className="flex flex-col items-center align-middle relative hover:cursor-pointer bg-card-foreground text-card">
        <img
          alt="Pikachu"
          className="rounded-full"
          height={64}
          src={`https://img.pokemondb.net/artwork/${name}.jpg`}
          style={{
            aspectRatio: "64/64",
            objectFit: "contain",
          }}
          width={64}
        />
        <span className="text-sm font-medium">{name}</span>
        {types?.map((t: ITypeTeams) => (
          <span key={crypto.randomUUID()} className="text-xs text-gray-500">
            {t.type.name}
          </span>
        ))}
        <DeleteButton
          onDelete={() => {
            confirm("Estas seguro de eliminar el pokemon?") &&
              deletePokemon(teamId, id);
          }}
          className=" text-red-400 rounded-xl p-1 absolute top-0 right-0 z-10"
        >
          <Delete />
        </DeleteButton>
      </div>
    </>
  );
};
