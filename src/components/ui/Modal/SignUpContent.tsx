import "./Modal.css";
import { FormGroup, Input } from "@components/form";
import Button from "../Button/Button";
import { useState } from "react";

type SignUpContentProps = {
  onSignIn: () => void;
};

const SignUpContent = ({ onSignIn }: SignUpContentProps) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (name === "admin" && password === "1234") {
      onSignIn();
    } else {
      alert("Špatné jméno nebo heslo!");
    }
  };

  return (
    <div className="modal-block">
      <form onSubmit={handleSubmit} className="form red-border">
        <FormGroup className="form-col">
          <Input
            id="name"
            name="name"
            label="User Name"
            value={name}
            placeholder=" Your user name"
            onChange={setName}
          />
          <Input
            id="password"
            name="password"
            label="Password"
            value={password}
            placeholder=" Your password"
            onChange={setPassword}
          />
        </FormGroup>
        <Button type="submit" className="btn btn-sm">
          Log In
        </Button>
      </form>
    </div>
  );
};

export default SignUpContent;
