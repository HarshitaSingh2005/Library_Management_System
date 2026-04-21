import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
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
    }

    API.get("/books")
      .then((res) => {
        setBooks(res.data);
        setFiltered(res.data);
      })
      .catch((err) => console.log(err));
  }, [navigate]);

  // 🔍 SEARCH FUNCTION
  const handleSearch = (text) => {
    const result = books.filter((b) =>
      b.title.toLowerCase().includes(text.toLowerCase())
    );
    setFiltered(result);
  };

  // 📚 ISSUE BOOK
  const handleIssue = async (bookId) => {
    try {
      await API.post("/issues/issue", {
        user_id: 1,
        book_id: bookId,
        return_date: "2026-05-01"
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
      <Sidebar />

      <div className="flex-grow-1">
        <Navbar onSearch={handleSearch} />

        <div className="container mt-4">
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

      <BookDetails
        book={selectedBook}
        onClose={() => setSelectedBook(null)}
        onIssue={handleIssue}
      />
    </div>
  );
};

export default Dashboard;