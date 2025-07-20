import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css";
import logoSvg from "/earth-space-logo.svg";

const Header = () => {
  const [isChaptersDropdownOpen, setIsChaptersDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const chapters = [
    { id: 1, title: "Farewell to the Blue Planet", available: true },
    { id: 2, title: "Coming Soon", available: false },
    { id: 3, title: "Coming Soon", available: false },
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsChaptersDropdownOpen(false);
  };

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          <img src={logoSvg} alt="SciFiNovel Logo" className="logo-image" />
          <h1>SciFiNovel</h1>
        </Link>

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <nav className={`header-nav ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          <div className="dropdown">
            <button
              className="nav-link dropdown-toggle"
              onClick={() => setIsChaptersDropdownOpen(!isChaptersDropdownOpen)}
              onBlur={() =>
                setTimeout(() => setIsChaptersDropdownOpen(false), 150)
              }
            >
              Chapters ▼
            </button>
            {isChaptersDropdownOpen && (
              <div className="dropdown-menu">
                {chapters.map((chapter) => (
                  <div key={chapter.id} className="dropdown-item">
                    {chapter.available ? (
                      <Link
                        to={`/chapter/${chapter.id}`}
                        className="dropdown-link"
                        onClick={closeMobileMenu}
                      >
                        Chapter {chapter.id}: {chapter.title}
                      </Link>
                    ) : (
                      <span className="dropdown-link disabled">
                        Chapter {chapter.id}: {chapter.title}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
          <Link to="/impressum" className="nav-link" onClick={closeMobileMenu}>
            Impressum
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
