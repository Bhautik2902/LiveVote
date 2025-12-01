import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const roles = JSON.parse(localStorage.getItem("roles") || "[]");
  const isManager = roles.includes("MANAGER");
  const isTeller = roles.includes("TELLER");

  let navItems = [];

  if (isManager) {
    navItems = [
      { label: "Create Teller", path: "./createTeller", icon: "👤" },
      { label: "Get Accounts", path: "./getAccountsByCity", icon: "📄" },
      { label: "Logout", icon: "🚪", logout: true },
    ];
  } else if (isTeller) {
    navItems = [
      { label: "Customers", path: "./customers", icon: "🧑‍🤝‍🧑" },
      { label: "Accounts", path: "./accounts", icon: "💳" },
      { label: "Logout", icon: "🚪", logout: true },
    ];
  } else {
    navItems = [{ label: "Login", path: "./login", icon: "🔐" }];
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("roles");
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <>
      <button
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Sidebar"
      >
        ☰
      </button>

      <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <div className="sidebar-header">
          {isManager ? (
            <h3 className="sidebar-role">Manager Dashboard</h3>
          ) : isTeller ? (
            <h3 className="sidebar-role">Teller Dashboard</h3>
          ) : (
            <h3 className="sidebar-role">Welcome</h3>
          )}
        </div>

        <ul className="sidebar-nav">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="sidebar-item"
              onClick={
                item.logout
                  ? handleLogout
                  : () => navigate(item.path)
              }
            >
              <span className="sidebar-icon">{item.icon}</span>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
