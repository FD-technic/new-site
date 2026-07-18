
import type { AppRoute } from "../../types/AppRoute";
import MenuLink from "./MenuLink";
import "./Navigation.css";

type NavMenuProps = {
    items: readonly AppRoute[];
  className?: string;
};

const NavMenu = ({ items, className }: NavMenuProps) => {
  
  return (
    <nav className={className}>
      <ul>
        {items.map((item) => (
          <li key={item.path}>
            <MenuLink to={item.path}>{item.label}</MenuLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
