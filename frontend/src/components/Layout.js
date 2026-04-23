import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  MdDashboard,
  MdMenuBook,
  MdAdminPanelSettings,
  MdNotifications,
  MdEmail,
  MdLogout,
  MdAdd,
  MdBarChart,
} from "react-icons/md";

const NAV_ITEMS = [
  { icon: MdDashboard,           label: "Dashboard",    path: "/" },
  { icon: MdMenuBook,            label: "Issued Books",  path: "/issued" },
  { icon: MdAdminPanelSettings,  label: "Admin",        path: "/admin" },
];

const Layout = ({ children, title }) => {
  const navigate = useNavigate();

  const today   = new Date();
  const dayName = today.toLocaleDateString("en-US", { weekday: "long" });
  const dateStr = today.toLocaleDateString("en-US", {
    day: "2-digit", month: "long", year: "numeric",
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const getUserInitials = () => {
    try {
      const token   = localStorage.getItem("token");
      if (!token) return "LB";
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload.name
        ? payload.name.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2)
        : payload.role === "admin" ? "AD" : "LB";
    } catch { return "LB"; }
  };

  return (
    <div className="app-shell">
      {/* ── Sidebar ────────────────────────────────────── */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <span className="sidebar-logo-icon">📖</span>
          <span className="sidebar-logo-text">LibraryOS</span>
        </div>

        <NavLink to="/admin" className="sidebar-add-btn">
          <MdAdd size={20} />
          Add New Book
        </NavLink>

        <nav style={{ display: "flex", flexDirection: "column", gap: 4, width: "100%" }}>
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) => `nav-item${isActive ? " active" : ""}`}
            >
              <item.icon className="nav-icon" size={20} />
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-upgrade">
          <MdBarChart size={40} color="var(--purple)" />
          <p>Upgrade to Pro for advanced analytics &amp; reports</p>
          <button className="sidebar-upgrade-btn">Upgrade</button>
        </div>
      </aside>

      {/* ── Main ───────────────────────────────────────── */}
      <main className="main-content">
        {/* Topbar */}
        <header className="topbar">
          <div>
            <div className="topbar-title">{title}</div>
            <div className="topbar-date">
              <strong>{dayName}</strong> {dateStr}
            </div>
          </div>
          <div className="topbar-right">
            <MdEmail    className="topbar-icon" size={22} />
            <MdNotifications className="topbar-icon" size={22} />
            <div className="topbar-avatar">{getUserInitials()}</div>
            <button className="topbar-logout" onClick={handleLogout}>
              <MdLogout size={15} style={{ marginRight: 4 }} />
              Logout
            </button>
          </div>
        </header>

        {children}
      </main>
    </div>
  );
};

export default Layout;