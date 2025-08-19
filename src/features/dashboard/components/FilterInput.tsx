import { Input } from "@/components/ui/input";

export const FilterInput = ({ title, placeholder, name, value, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700">
        {title}
      </label>
      <Input
        type="text"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
