import type { MenuItem } from "../types/Menu";
import MenuLink from "./MenuLink";

type NavMenuProps = {
    items: readonly MenuItem[];
  className?: string;
};

const NavMenu = ({ items, className }: NavMenuProps) => {
  return (
    <nav className={className}>
      <ul>
        {items.map((item) => (
          <li key={item.to}>
            <MenuLink to={item.to}>{item.label}</MenuLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
