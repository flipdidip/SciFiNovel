import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <div className="layout-body">
        <Sidebar />
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
