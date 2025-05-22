import { useState } from "react";
import { renderMenuItems } from "./Menu";
import "./Menu.css";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-label={`${isOpen ? "Fermer":"Ouvrir"} le menu`}
        aria-expanded={isOpen ? "true" : "false"}
      >
        {isOpen ? (
          <span className="hamburger-cross">×</span>
        ) : (
          <>
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
          </>
        )}
      </button>

      <nav className={`sidebar mobile ${isOpen ? "open" : ""}`}>
        <ul className="menu-list">{renderMenuItems()}</ul>
      </nav>
    </>
  );
};
export default MobileMenu;
