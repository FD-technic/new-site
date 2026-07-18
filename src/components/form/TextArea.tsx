type TextAreaProps = {
    id: string;
    name: string;
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
}

const TextArea = ({ id, name, placeholder="Your text", value, onChange }: TextAreaProps) => {

    return (
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
    );
};

export default TextArea;

