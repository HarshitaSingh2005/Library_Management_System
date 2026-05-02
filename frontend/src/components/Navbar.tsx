import React from "react";

type Props = {
  onSearch?: (text: string) => void; // optional
};

const Navbar: React.FC<Props> = ({ onSearch }) => {
  return (
    <div
      className="d-flex justify-content-between align-items-center p-3 shadow-sm bg-white"
      style={{ borderBottom: "1px solid #eee" }}
    >
      {/* Search */}
      <input
        type="text"
        className="form-control w-50"
        placeholder="Search books..."
        onChange={(e) => onSearch && onSearch(e.target.value)}
      />

      {/* Logout */}
      <button
        className="btn btn-outline-danger"
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/login";
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;