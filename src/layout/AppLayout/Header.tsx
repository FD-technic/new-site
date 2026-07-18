import "./layout.css";
import { useState } from "react";
import type { Theme, ThemeKey } from "../../types/Theme";
import Brand from "../../site/Brand/Brand";
import { Button, NavMenu, ThemeSelect } from "@components";
import BaseModal from "@components/ui/Modal/BaseModal";
import ReservationContent from "@components/ui/Modal/ReservationContent";
import SignUpContent from "@components/ui/Modal/SignUpContent";
import type { AppRoute } from "../../types/AppRoute";
import { NavLink } from "react-router-dom";

type HeaderProps = {
  menu: AppRoute[];
  themes: Theme[];
  selectedTheme: ThemeKey;
  authorized: boolean;
  onThemeChange: (theme: ThemeKey) => void;
  onAuthorizedCahange: (isAuthorized: boolean) => void;
};

const Header = ({
  menu,
  themes,
  selectedTheme,
  authorized,
  onThemeChange,
  onAuthorizedCahange,
}: HeaderProps) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  return (
    <>
      <header className="header">
        <Brand />
        <div className="header-actions">
          <NavMenu items={menu} className="nav" />

          <div className="toolbar">
            {!authorized ? (
              <Button
                className="btn btn-accent btn-sm text-a"
                onClick={() => setIsContactModalOpen(true)}
              >
                Reservations
              </Button>
            ) : (
              <NavLink
                to={"/admin"}
                className={({ isActive }) =>
                  `btn btn-accent btn-sm${isActive ? " active" : ""}`
                }
              >
                Administration
              </NavLink>
            )}
            <ThemeSelect
              items={themes}
              value={selectedTheme}
              onChange={onThemeChange}
            />
            {!authorized ? (
              <Button
                className="btn btn-accent btn-sm text-a"
                onClick={() => setIsSignUpModalOpen(true)}
              >
                Log In
              </Button>
            ) : (
              <Button
                className="btn btn-secondary btn-sm text-a"
                onClick={() => onAuthorizedCahange(false)}
              >
                Log Out
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* === Contact === */}
      <BaseModal
        title="Reservation"
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      >
        <ReservationContent />
      </BaseModal>

      {/* === Log In form === */}
      <BaseModal
        title="Sign up"
        isOpen={isSignUpModalOpen}
        onClose={() => setIsSignUpModalOpen(false)}
      >
        <SignUpContent
          onSignIn={() => {
            onAuthorizedCahange(true);
            setIsSignUpModalOpen(false);
          }}
        />
      </BaseModal>
    </>
  );
};

export default Header;
