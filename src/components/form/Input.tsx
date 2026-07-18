

type InputProps = {
    type?: "text" | "date" | "time";
    id: string;
    name: string;
    label: string;
    value: string;
    placeholder?: string;
    onChange: (value: string) => void;
}

const Input = ({ type="text", id, name, label = "Label", value, placeholder = "...", onChange }: InputProps) => {

    return (
        <div>

        <label>{label}: </label>
        <input
            type={type}
            id={id}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            />
            </div>
        
    );
};

export default Input;