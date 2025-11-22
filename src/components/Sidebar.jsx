import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const roles = JSON.parse(localStorage.getItem("roles") || "[]"); 
  const isManager = roles.includes("MANAGER"); 
  const isTeller = roles.includes("TELLER");
 
  var navItems = [];
  if (isManager) {
    navItems = ["Logout", "Create Teller", "Get Accounts"];
  }
  else if (isTeller) {
    navItems = ["Logout", "Customers", "Accounts"];
  }
  else {
    navItems = ["Login"]
  }

  const handleLogout = () => {
    localStorage.removeItem("token");

    localStorage.removeItem("roles");
    localStorage.removeItem("username");

    navigate('/');
  }

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
        { isManager ? <h3>Manager account</h3> : isTeller ?  <h2>Teller account</h2> : <h2></h2> }
        <ul className="sidebar-nav"> 
          {navItems.map((item) => (
            (item === "Logout") ?
              <li key={item} className="sidebar-item" onClick={handleLogout}>
                {item}
              </li>     
            : (item === "Create Teller") ?
              <li key={item} className="sidebar-item" onClick={() => navigate(`./createTeller`)}>
                {item}
              </li>
            : (item === "Get Accounts") ?
              <li key={item} className="sidebar-item" onClick={() => navigate(`./getAccountsByCity`)}>
                {item}
              </li>
            :
              <li key={item} className="sidebar-item" onClick={() => navigate(`./${item.toLowerCase()}`)}>
                {item}
              </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
