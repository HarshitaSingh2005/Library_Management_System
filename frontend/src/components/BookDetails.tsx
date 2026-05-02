import React from "react";

type Book = {
  id: number;
  title: string;
  author: string;
  category: string;
  image: string;
  available: number;
};

type Props = {
  book: Book | null;
  onClose: () => void;
  onIssue: (id: number) => void;
};

const BookDetails: React.FC<Props> = ({ book, onClose, onIssue }) => {
  if (!book) return null;

  return (
    <div
      className="position-fixed top-0 end-0 bg-white shadow p-4"
      style={{ width: "320px", height: "100%", zIndex: 1000 }}
    >
      <button className="btn btn-sm btn-danger mb-3" onClick={onClose}>
        Close
      </button>

      <img
        src={book.image}
        className="img-fluid mb-3"
        alt="book"
        style={{ height: "250px", objectFit: "cover" }}
      />

      <h5>{book.title}</h5>
      <p><b>Author:</b> {book.author}</p>
      <p><b>Category:</b> {book.category}</p>

      <p>
        <b>Status:</b>{" "}
        <span className={book.available > 0 ? "text-success" : "text-danger"}>
          {book.available > 0 ? "Available" : "Out of Stock"}
        </span>
      </p>

      <button
        className="btn btn-primary w-100"
        disabled={book.available <= 0}
        onClick={() => onIssue(book.id)}
      >
        Issue Book
      </button>
    </div>
  );
};

export default BookDetails;