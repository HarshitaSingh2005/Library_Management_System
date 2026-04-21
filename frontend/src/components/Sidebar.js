import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-dark text-white p-3 vh-100" style={{ width: "250px" }}>
      <h4>📚 Library</h4>
      <ul className="nav flex-column mt-4">
        <li className="nav-item mb-2">Dashboard</li>
        <li className="nav-item mb-2">Books</li>
        <li className="nav-item mb-2">Issued Books</li>
        <li className="nav-item mb-2">Admin</li>
      </ul>
    </div>
  );
};

export default Sidebar;