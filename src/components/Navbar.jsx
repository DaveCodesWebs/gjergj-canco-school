import logo from "../assets/images/hero-nav/logorm.webp";

import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSchoolDropdownOpen, setIsSchoolDropdownOpen] = useState(false);
  const [isProgramDropdownOpen, setIsProgramDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSchoolDropdownOpen(false);
    setIsProgramDropdownOpen(false);
  };

  const toggleSchoolDropdown = () => {
    setIsSchoolDropdownOpen(!isSchoolDropdownOpen);
    setIsProgramDropdownOpen(false);
  };

  const toggleProgramDropdown = () => {
    setIsProgramDropdownOpen(!isProgramDropdownOpen);
    setIsSchoolDropdownOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsSchoolDropdownOpen(false);
    setIsProgramDropdownOpen(false);
  };

  return (
    <>
      <nav>
        <Link to="/" style={{ cursor: "pointer" }}>
          <img src={logo} alt="school-logo" className="nav__logo" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="nav__links">
          {/* Rreth Shkolles */}
          <li className="nav__item nav__dropdown">
            <button
              className="nav__link dropdown-btn"
              type="button"
            >
              Rreth Shkollës
              <ChevronDown size={16} />
            </button>

            <div className="dropdown-menu">
              <Link to="/rreth-nesh">
                <div className="dropdown-item-title">Rreth Nesh</div>
                <div className="dropdown-item-description">
                  Historia, vizioni dhe misioni i shkollës
                </div>
              </Link>

              <Link to="/salla-muzeale">
                <div className="dropdown-item-title">Salla Muzeale</div>
                <div className="dropdown-item-description">
                  Pajisje dhe objekte me vlerë historike
                </div>
              </Link>

              <Link to="/laboratoret">
                <div className="dropdown-item-title">Laboratorët</div>
                <div className="dropdown-item-description">
                  Hapësirat dhe pajisjet laboratorike të shkollës
                </div>
              </Link>

              <Link to="/njesia-e-zhvillimit">
                <div className="dropdown-item-title">
                  Njësia e Zhvillimit
                </div>
                <div className="dropdown-item-description">
                  Zhvillimi profesional dhe projektet e shkolles
                </div>
              </Link>
            </div>
          </li>

          {/* Programi Mesimor */}
          <li className="nav__item nav__dropdown">
            <button
              className="nav__link dropdown-btn"
              type="button"
            >
              Programi Mësimor
              <ChevronDown size={16} />
            </button>

            <div className="dropdown-menu">
              <Link to="/programi-mesimor/tik">
                <div className="dropdown-item-title">TIK</div>
                <div className="dropdown-item-description">
                  Programi mësimor për teknologjinë e informacionit
                </div>
              </Link>

              <Link to="/programi-mesimor/elektroteknik">
                <div className="dropdown-item-title">
                  Elektroteknikë
                </div>
                <div className="dropdown-item-description">
                  Programi mësimor për profilin elektroteknikë
                </div>
              </Link>
            </div>
          </li>

          {/* Organigrama */}
          <li className="nav__item">
            <Link to="/organigrama" className="nav__link">
              Organigrama
            </Link>
          </li>

          {/* Apliko */}
          <li className="nav__item">
            <Link to="/apliko" className="nav__link">
              Apliko
            </Link>
          </li>
        </ul>

        {/* Hamburger Menu Button */}
        <button
          className="hamburger-btn"
          onClick={toggleMenu}
          type="button"
          aria-label={isMenuOpen ? "Mbyll menune" : "Hap menune"}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Overlay Menu */}
      {isMenuOpen && (
        <div className="mobile-overlay" onClick={closeMenu}>
          <div
            className="mobile-menu"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="mobile-menu-close"
              type="button"
              onClick={closeMenu}
              aria-label="Mbyll menune"
            >
              <X size={28} />
            </button>

            <ul className="mobile-nav__links">
              {/* Rreth Shkolles */}
              <li className="mobile-nav__item mobile-nav__dropdown">
                <button
                  className="mobile-nav__link mobile-dropdown-btn"
                  type="button"
                  onClick={toggleSchoolDropdown}
                  aria-expanded={isSchoolDropdownOpen}
                >
                  <span>Rreth Shkolles</span>

                  <ChevronDown
                    size={18}
                    className={
                      isSchoolDropdownOpen ? "rotated" : ""
                    }
                  />
                </button>

                {isSchoolDropdownOpen && (
                  <div className="mobile-dropdown-menu">
                    <Link to="/rreth-nesh" onClick={closeMenu}>
                      Rreth Nesh
                    </Link>

                    <Link to="/salla-muzeale" onClick={closeMenu}>
                      Salla Muzeale
                    </Link>

                    <Link to="/laboratoret" onClick={closeMenu}>
                      Laboratorët
                    </Link>

                    <Link
                      to="/njesia-e-zhvillimit"
                      onClick={closeMenu}
                    >
                      Njësia e Zhvillimit
                    </Link>
                  </div>
                )}
              </li>

              {/* Programi Mesimor */}
              <li className="mobile-nav__item mobile-nav__dropdown">
                <button
                  className="mobile-nav__link mobile-dropdown-btn"
                  type="button"
                  onClick={toggleProgramDropdown}
                  aria-expanded={isProgramDropdownOpen}
                >
                  <span>Programi Mësimor</span>

                  <ChevronDown
                    size={18}
                    className={
                      isProgramDropdownOpen ? "rotated" : ""
                    }
                  />
                </button>

                {isProgramDropdownOpen && (
                  <div className="mobile-dropdown-menu">
                    <Link
                      to="/programi-mesimor/tik"
                      onClick={closeMenu}
                    >
                      TIK
                    </Link>

                    <Link
                      to="/programi-mesimor/elektroteknik"
                      onClick={closeMenu}
                    >
                      Elektroteknikë
                    </Link>
                  </div>
                )}
              </li>

              {/* Organigrama */}
              <li className="mobile-nav__item">
                <Link
                  to="/organigrama"
                  className="mobile-nav__link"
                  onClick={closeMenu}
                >
                  Organigrama
                </Link>
              </li>

              {/* Apliko */}
              <li className="mobile-nav__item">
                <Link
                  to="/apliko"
                  className="mobile-nav__link"
                  onClick={closeMenu}
                >
                  Apliko
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}