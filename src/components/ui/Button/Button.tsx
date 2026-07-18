import "./Button.css";

type ButtonType = "submit" | "reset" | "button";

type ButtonProps = {
  type?: ButtonType;
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
};

const Button = ({
  type = "button",
  children,
  disabled = false,
  onClick,
  className,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`btn ${className ?? ""}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
