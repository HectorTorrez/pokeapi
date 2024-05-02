import useGetAbilities from "../hooks/useGetAbilities";

/* eslint-disable react/react-in-jsx-scope */
interface SelectAbilityProps {
  getAbility: (ability: string) => void;
  ability: string;
}
export default function SelectAbility({
  getAbility,
  ability,
}: SelectAbilityProps) {
  const { abilities } = useGetAbilities();

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>): void {
    getAbility(event.target.value);
  }

  return (
    <select
      onChange={handleChange}
      id="type"
      className="text-black border border-blue-700 rounded-lg p-2.5 "
      value={ability}
    >
      {abilities.map((ability) => (
        <option key={ability.name} value={ability.name}>
          {ability.name}
        </option>
      ))}
    </select>
  );
}
