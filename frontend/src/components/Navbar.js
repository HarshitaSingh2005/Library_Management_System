import React from "react";

const Navbar = ({ onSearch }) => {

  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="p-3 border-bottom d-flex justify-content-between">

      <input
        type="text"
        className="form-control w-50"
        placeholder="Search books..."
        onChange={handleChange}
      />

      <button
        className="btn btn-danger"
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