import React from "react";
import { FaBell, FaEnvelope } from "react-icons/fa";

const Navbar = ({ onSearch }) => {
  const date = new Date().toDateString();

  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="d-flex justify-content-between align-items-center p-3 border-bottom bg-white">

      {/* Left Section */}
     <div>
  <h4 className="mb-0" style={{ color: "#462C7D", fontWeight:1000 }}>
    Dashboard
  </h4>
  <small className="text-muted">{date}</small>
</div>
      {/* Center Search */}
      <div className="w-50 mx-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search books..."
          onChange={handleChange}
        />
      </div>

      {/* Right Section */}
      <div className="d-flex align-items-center gap-3">
        <FaEnvelope size={20} />
        <FaBell size={20} />

        <div
          className="bg-dark text-white rounded-circle d-flex justify-content-center align-items-center"
          style={{
            width: "35px",
            height: "35px",
            fontWeight: "bold",
          }}
        >
          
        </div>

        <button className="btn btn-danger btn-sm" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;