import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isChaptersDropdownOpen, setIsChaptersDropdownOpen] = useState(false);

  const chapters = [
    { id: 1, title: "Farewell to the Blue Planet", available: true },
    { id: 2, title: "Coming Soon", available: false },
    { id: 3, title: "Coming Soon", available: false },
  ];

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <h1>SciFiNovel</h1>
        </Link>
        <nav className="header-nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
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
                        onClick={() => setIsChaptersDropdownOpen(false)}
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
          <Link to="/impressum" className="nav-link">
            Impressum
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
