import useGetTypes from "../hooks/useGeTypes";

/* eslint-disable react/react-in-jsx-scope */
interface SelectProps {
  getType: (type: string) => void;
  type: string;
}
export function Select({ getType, type }: SelectProps) {
  const { types } = useGetTypes();
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    getType(event.target.value);
  };
  return (
    <select
      onChange={handleChange}
      id="type"
      className="text-black border border-blue-700 rounded-lg p-2.5"
      value={type}
    >
      {types.map((type) => (
        <option key={type.name} value={type.name}>
          {type.name}
        </option>
      ))}
    </select>
  );
}
