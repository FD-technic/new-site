import "./Form.css";

type FormGroupProps = {
    className?: string;
    children: React.ReactNode;
}

const FormGroup = ({ className, children }: FormGroupProps) => {

    return (
        <div className={`form-group ${className ?? ""}`}>
            {children}
        </div>
    );
};

export default FormGroup;