import "./Button.css";

type ButtonProps = {
    children: React.ReactNode;
    disabled?: boolean;
    onClick?:() => void;
    className?: string;
}

const Button = ({ children, disabled=false, onClick, className }: ButtonProps) => {

    return (
        <button
        className={`btn ${className}`}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;