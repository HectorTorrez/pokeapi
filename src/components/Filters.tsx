import FilterByName from "./FilterByName";
import { Select } from "./Select";
import SelectAbility from "./SelectAbility";

/* eslint-disable react/react-in-jsx-scope */
interface FiltersProps {
  getType: (type: string) => void;
  getAbility: (ability: string) => void;
  handleFilterByName: (filter: string) => void;
  type: string;
  ability: string;
}
export default function Filters({
  getType,
  getAbility,
  handleFilterByName,
  type,
  ability,
}: FiltersProps) {
  return (
    <section className="flex flex-col items-center  gap-5 my-2 mx-2 md:flex-row md:justify-center">
      <section className="flex justify-center gap-2 w-[300px]">
        <Select getType={getType} type={type} />
        <SelectAbility getAbility={getAbility} ability={ability} />
      </section>
      <FilterByName handleFilterByName={handleFilterByName} />
    </section>
  );
}
