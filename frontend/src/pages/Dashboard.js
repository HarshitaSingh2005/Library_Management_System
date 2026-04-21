import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBook, FaUsers } from "react-icons/fa";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import WelcomeBanner from "../components/WelcomeBanner";
import StatsCard from "../components/StatsCard";
import BookCard from "../components/BookCard";
import BookDetails from "../components/BookDetails";

import API from "../services/api";

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    fetchBooks();
  }, [navigate]);

  // Fetch books
  const fetchBooks = async () => {
    try {
      const res = await API.get("/books");
      setBooks(res.data);
      setFiltered(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Search books
  const handleSearch = (text) => {
    const result = books.filter((book) =>
      book.title.toLowerCase().includes(text.toLowerCase())
    );
    setFiltered(result);
  };

  // Issue book
  const handleIssue = async (bookId) => {
    try {
      await API.post("/issues/issue", {
        user_id: 1,
        book_id: bookId,
        return_date: "2026-05-01",
      });

      alert("Book Issued Successfully!");
      setSelectedBook(null);
    } catch (err) {
      console.log(err);
      alert("Error issuing book");
    }
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div
        className="flex-grow-1 p-4"
        style={{ marginLeft: "260px", width: "100%" }}
      >
        {/* Navbar */}
        <Navbar onSearch={handleSearch} />

        {/* Welcome Banner */}
        <WelcomeBanner />

        {/* Stats Cards */}
        <div className="row g-3 my-3">
          <div className="col-md-3">
            <StatsCard
              title="Total Books"
              value={books.length}
              color="#F59E0B"
              icon={<FaBook />}
            />
          </div>

          <div className="col-md-3">
            <StatsCard
              title="Issued"
              value="87"
              color="#4B2E83"
              icon={<FaBook />}
            />
          </div>

          <div className="col-md-3">
            <StatsCard
              title="Members"
              value="342"
              color="#EC4899"
              icon={<FaUsers />}
            />
          </div>

          <div className="col-md-3">
            <StatsCard
              title="Available"
              value={books.length - 87}
              color="#A78BFA"
              icon={<FaBook />}
            />
          </div>
        </div>

        {/* Books Section */}
        <div className="container-fluid mt-4">
          <div className="row">
            {filtered.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                onClick={() => setSelectedBook(book)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Book Details Modal */}
      <BookDetails
        book={selectedBook}
        onClose={() => setSelectedBook(null)}
        onIssue={handleIssue}
      />
    </div>
  );
};

export default Dashboard;