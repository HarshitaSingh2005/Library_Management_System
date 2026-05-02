import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBook, FaUsers } from "react-icons/fa";

import Layout from "../components/Layout";
import WelcomeBanner from "../components/WelcomeBanner";
import StatsCard from "../components/StatsCard";
import BookCard from "../components/BookCard";
import BookDetails from "../components/BookDetails";
import API from "../services/api";

type Book = {
  id: number;
  title: string;
  author: string;
  category: string;
  image: string;
  available: number;
};

const Dashboard = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [filtered, setFiltered] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    fetchBooks();
  }, [navigate]);

  const fetchBooks = async () => {
    try {
      const res = await API.get("/books");
      setBooks(res.data);
      setFiltered(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearch = (text: string) => {
    const result = books.filter((book) =>
      book.title.toLowerCase().includes(text.toLowerCase())
    );
    setFiltered(result);
  };

  const handleIssue = async (bookId: number) => {
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
    <Layout>
      {/* Navbar Search */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search books..."
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      <WelcomeBanner />

      {/* Stats */}
      <div className="row g-3 my-3">
        <StatsCard
          title="Total Books"
          value={books.length}
          color="#F59E0B"
          icon={<FaBook />}
        />
        <StatsCard
          title="Issued"
          value="87"
          color="#4B2E83"
          icon={<FaBook />}
        />
        <StatsCard
          title="Members"
          value="342"
          color="#EC4899"
          icon={<FaUsers />}
        />
        <StatsCard
          title="Available"
          value={books.length - 87}
          color="#A78BFA"
          icon={<FaBook />}
        />
      </div>

      {/* Books */}
      <div className="row">
        {filtered.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onClick={() => setSelectedBook(book)}
          />
        ))}
      </div>

      {/* Book Details */}
      <BookDetails
        book={selectedBook}
        onClose={() => setSelectedBook(null)}
        onIssue={handleIssue}
      />
    </Layout>
  );
};

export default Dashboard;