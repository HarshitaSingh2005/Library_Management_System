import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBook,
  FaUsers,
  FaCog,
  FaPlus,
  FaSearch,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column p-4"
      style={{
        width: "260px",
        height: "100vh",
        backgroundColor: "#f8f8f8",
        position: "fixed",
        left: 0,
        top: 0,
        boxShadow: "4px 0 10px rgba(0,0,0,0.05)",
      }}
    >
      {/* Logo */}
      <h3
        className="fw-bold mb-5"
        style={{
          color: "#4B2E83",
        }}
      >
        📖 LibraryOS
      </h3>

      {/* Add Book Button */}
      <button
        className="btn w-100 mb-4 fw-bold"
        style={{
          backgroundColor: "#4B2E83",
          color: "#fff",
          borderRadius: "40px",
          padding: "14px",
          fontSize: "18px",
          border: "none",
          boxShadow: "0 5px 15px rgba(75,46,131,0.25)",
        }}
      >
        <FaPlus className="me-2" />
        Add New Book
      </button>

      {/* Navigation */}
      <nav className="nav flex-column gap-3">
        <NavLink
          to="/"
          className="nav-link"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#4B2E83" : "transparent",
            color: isActive ? "#fff" : "#6c6c6c",
            borderRadius: "40px",
            padding: "14px 20px",
            fontWeight: "600",
            fontSize: "15px",
          })}
        >
          <FaTachometerAlt className="me-3" />
          Dashboard
        </NavLink>

        <NavLink
          to="/issued"
          className="nav-link"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#4B2E83" : "transparent",
            color: isActive ? "#fff" : "#6c6c6c",
            borderRadius: "40px",
            padding: "14px 20px",
            fontWeight: "600",
            fontSize: "15px",
          })}
        >
          <FaBook className="me-3" />
          Issued Books
        </NavLink>

        <NavLink
          to="/members"
          className="nav-link"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#4B2E83" : "transparent",
            color: isActive ? "#fff" : "#6c6c6c",
            borderRadius: "40px",
            padding: "14px 20px",
            fontWeight: "600",
            fontSize: "15px",
          })}
        >
          <FaUsers className="me-3" />
          Members
        </NavLink>

        <NavLink
          to="/settings"
          className="nav-link"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#4B2E83" : "transparent",
            color: isActive ? "#fff" : "#6c6c6c",
            borderRadius: "40px",
            padding: "14px 20px",
            fontWeight: "600",
            fontSize: "15px",
          })}
        >
          <FaCog className="me-3" />
          Settings
        </NavLink>

        <NavLink
          to="/catalog"
          className="nav-link"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#4B2E83" : "transparent",
            color: isActive ? "#fff" : "#6c6c6c",
            borderRadius: "40px",
            padding: "14px 20px",
            fontWeight: "400",
            fontSize: "15px",
          })}
        >
          <FaSearch className="me-3" />
          Catalog
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;