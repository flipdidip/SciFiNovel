import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
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
          <Link to="/impressum" className="nav-link">
            Impressum
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
