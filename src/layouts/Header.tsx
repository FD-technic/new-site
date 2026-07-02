import logo from "../assets/UIlogo.png";
import "./layout.css";
import React, { useState } from "react";
import BaseModal from "../components/modal/BaseModal";
import ContactContent from "../components/modal/ContactContent";
import type { Theme, ThemeKey } from "../types/Theme";
import type { MenuItem } from "../types/Menu";
import NavMenu from "./NavMenu";
import ThemeSelect from "../components/select/ThemeSelect";
import { NavLink } from "react-router-dom";

type HeaderProps = {
  menu: MenuItem[];
  themes: Theme[];
  selectedTheme: ThemeKey;
  onThemeChange: (theme: ThemeKey) => void;
}

const Header = ({ menu, themes, selectedTheme, onThemeChange }: HeaderProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="brand">
          <img src={logo} height={50} alt="Ferdo UI logo" />
          <div className="col span center">

          <span>Moving</span>
          <span>with Care</span>
          </div>
        </div>
        <div className="header-actions">
          
          <div className="group-menu">
            <NavMenu items={menu} className="nav" />

          <NavLink
            to="/reservation"
            className="btn btn-accent btn-sm"
          >
            Reservations
          </NavLink>
            </div>

          <ThemeSelect 
            items={themes}
            value={selectedTheme}
            onChange={onThemeChange}
            />
        </div>
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
