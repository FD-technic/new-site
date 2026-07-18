type CheckBoxProps = {
  id: string;
  name: string;
  checked?: boolean;
  onChange: (checked: boolean) => void;
};

const CheckBox = ({ id, name, checked, onChange }: CheckBoxProps) => {
  return (
    <label className="checkbox">
      <span>{name}: </span>
      <input
        className="checkbox-md"
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
    </label>
  );
};

export default CheckBox;
