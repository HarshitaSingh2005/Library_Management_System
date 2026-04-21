import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import API from "../services/api";

const Admin = () => {
  const [stats, setStats] = useState({
    totalBooks: 0,
    issued: 0,
    available: 0
  });

  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    quantity: 1,
    image: ""
  });

  // 📊 Fetch stats
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const books = await API.get("/books");
        const issues = await API.get("/issues");

        const totalBooks = books.data.length;
        const issued = issues.data.length;
        const available = books.data.reduce(
          (sum, b) => sum + b.available,
          0
        );

        setStats({ totalBooks, issued, available });

      } catch (err) {
        console.log(err);
      }
    };

    fetchStats();
  }, []);

  // ➕ Add Book
  const handleAdd = async () => {
    try {
      await API.post("/books", form);
      alert("Book added successfully!");
      window.location.reload(); // refresh data
    } catch (err) {
      console.log(err);
      alert("Error adding book");
    }
  };

  return (
    <div className="d-flex">
      <Sidebar />

      <div className="flex-grow-1">
        <Navbar />

        <div className="container mt-4">
          <h4>Admin Dashboard</h4>

          {/* 📊 Stats */}
          <div className="row mt-4">

            <div className="col-md-4">
              <div className="card p-3 shadow">
                <h6>Total Books</h6>
                <h3>{stats.totalBooks}</h3>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3 shadow">
                <h6>Issued Books</h6>
                <h3>{stats.issued}</h3>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3 shadow">
                <h6>Available</h6>
                <h3>{stats.available}</h3>
              </div>
            </div>

          </div>

          {/* ➕ Add Book Form */}
          <h5 className="mt-5">Add New Book</h5>

          <div className="row mt-3">
            <div className="col-md-6">

              <input
                className="form-control mb-2"
                placeholder="Title"
                onChange={e => setForm({ ...form, title: e.target.value })}
              />

              <input
                className="form-control mb-2"
                placeholder="Author"
                onChange={e => setForm({ ...form, author: e.target.value })}
              />

              <input
                className="form-control mb-2"
                placeholder="Category"
                onChange={e => setForm({ ...form, category: e.target.value })}
              />

              <input
                type="number"
                className="form-control mb-2"
                placeholder="Quantity"
                onChange={e => setForm({ ...form, quantity: e.target.value })}
              />

              <input
                className="form-control mb-2"
                placeholder="Image URL"
                onChange={e => setForm({ ...form, image: e.target.value })}
              />

              <button className="btn btn-primary w-100" onClick={handleAdd}>
                Add Book
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Admin;