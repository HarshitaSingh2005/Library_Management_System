import React from "react";

const BookCard = ({ book, onClick }) => {
  return (
    <div className="col-md-3 mb-4">
      <div
        className="card h-100 shadow-sm"
        onClick={onClick}
        style={{ cursor: "pointer" }}
      >
        <img
          src={book.image}
          className="card-img-top"
          alt="book"
          style={{ height: "250px", objectFit: "cover" }}
        />

        <div className="card-body">
          <h6 className="fw-bold">{book.title}</h6>
          <p className="text-muted mb-1">{book.author}</p>

          <span
            className={
              book.available > 0 ? "text-success" : "text-danger"
            }
          >
            {book.available > 0 ? "Available" : "Out of Stock"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;