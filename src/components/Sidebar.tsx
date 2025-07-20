import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: "/", label: "Home", icon: "🏠" },
    { path: "/impressum", label: "Impressum", icon: "ℹ️" },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <h3>Navigation</h3>
        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`sidebar-link ${
                location.pathname === item.path ? "active" : ""
              }`}
            >
              <span className="sidebar-icon">{item.icon}</span>
              <span className="sidebar-label">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
