import logo from "../assets/UIlogo.png";
import "./layout.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import BaseModal from "../components/modal/BaseModal";
import ContactContent from "../components/modal/ContactContent";
import Button from "../components/Button";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="brand">
          <img src={logo} height={50} alt="Ferdo UI logo" />
          <h1>
            Moving
          </h1>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "btn btn-accent btn-line active" : "btn btn-accent btn-line")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "btn btn-accent btn-line active" : "btn btn-accent btn-line")}
              >
                About me
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/service"
                className={({ isActive }) => (isActive ? "btn btn-accent btn-line active" : "btn btn-accent btn-line")}
              >
                Service
              </NavLink>
            </li>
            <li>
              <Button onClick={() => setIsModalOpen(true)} className="btn-accent btn-md">
                Contact
              </Button>
            </li>
          </ul>
        </nav>
      </header>

      <BaseModal
        title="Contact Body"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <ContactContent
          mail="petr@fdweb.cz"
          linkedin="https://www.linkedin.com/in/petr-hron-dev/"
          github="https://github.com/FD-technic"
        />
      </BaseModal>
    </>
  );
};

export default Header;
