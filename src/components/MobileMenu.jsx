import { useState } from "react";
import { Link } from "react-router-dom";

function MobileMenu() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div className="mobile-menu">

      <button
        className="mobile-menu-button"
        onClick={() => setOpen(!open)}
        aria-label="Open menu"
        aria-expanded={open}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {open && (
        <div className="mobile-menu-panel">

          <Link
            to="/"
            onClick={closeMenu}
          >
            Home
          </Link>

          <Link
            to="/"
            onClick={closeMenu}
          >
            Products
          </Link>

          <Link
            to="/"
            onClick={closeMenu}
          >
            Categories
          </Link>

          <Link
            to="/about"
            onClick={closeMenu}
          >
            About
          </Link>

          <Link
            to="/contact"
            onClick={closeMenu}
          >
            Contact
          </Link>

        </div>
      )}

    </div>
  );
}

export default MobileMenu;