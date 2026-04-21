import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const BookList = () => {
  const books = [
    { name: "The Great Gatsby", author: "F. Scott", category: "Classic", copies: 5 },
    { name: "Clean Code", author: "Robert C.", category: "Tech", copies: 3 },
    { name: "Atomic Habits", author: "James Clear", category: "Self-help", copies: 4 }
  ];

  return (
    <div className="table-modern p-3 mt-4">
      <h5>Recent Books</h5>

      <table className="table">
        <thead>
          <tr>
            <th>Book</th>
            <th>Author</th>
            <th>Category</th>
            <th>Copies</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {books.map((b, i) => (
            <tr key={i}>
              <td>{b.name}</td>
              <td>{b.author}</td>
              <td>{b.category}</td>
              <td>{b.copies}</td>
              <td>
                <FaEdit className="me-2" />
                <FaTrash />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;