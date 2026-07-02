export type SelectItem = {
  key: string;
  label: string;
};

type SelectProps = {
  name: string;
  id: string;
  items: SelectItem[];
  value: string;
  onChange: (value: string) => void;
};

const Select = ({ name, id, items, value, onChange }: SelectProps) => {
  return (
    <>
      <select name={name} id={id} value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {items.map((item) => (
            <option key={item.key} value={item.key}>{item.label}</option>
          ))}
      </select>
    </>
  );
};

export default Select;
