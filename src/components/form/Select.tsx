export type SelectItem = {
  key: string;
  label: string;
};

type SelectProps = {
  label: string;
  name: string;
  id: string;
  items: SelectItem[];
  value: string;
  onChange: (value: string) => void;
};

const Select = ({ label, name, id, items, value, onChange }: SelectProps) => {
  return (
    <>
    <label>{label}</label>
    <select
      name={name}
      id={id}
      value={value}
      className="btn btn-sm"
      onChange={(e) => onChange(e.target.value)}
      >
      {items.map((item) => (
        <option key={item.key} value={item.key}>
          {item.label}
        </option>
      ))}
    </select>
      </>
  );
};

export default Select;
