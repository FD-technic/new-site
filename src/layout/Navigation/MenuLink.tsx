import { NavLink } from "react-router-dom";

type MenuLinkProps = {
    to: string;
    children: React.ReactNode;
}

const MenuLink = ({ to, children }: MenuLinkProps) => {

    
    return (
        <>
        <NavLink 
        to={to}
        className={({ isActive }) =>
                `btn btn-accent btn-line btn-sm${isActive ? " active" : ""}`
            }
        >
            {children}
            </NavLink>
        </>
    );
};

export default MenuLink;