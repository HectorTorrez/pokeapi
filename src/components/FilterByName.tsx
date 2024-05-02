/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";

interface FilterByNameProps {
  handleFilterByName: (filter: string) => void;
}

const FilterByName = ({ handleFilterByName }: FilterByNameProps) => {
  const [filter, setFilter] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
    handleFilterByName(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Filter by name"
        className="text-black border border-blue-700 rounded-lg p-2.5"
      />
    </div>
  );
};

export default FilterByName;
