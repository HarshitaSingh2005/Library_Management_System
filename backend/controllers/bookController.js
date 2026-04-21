const db = require("../config/db");

// ➕ Add Book
exports.addBook = (req, res) => {
  const { title, author, category, quantity, image } = req.body;

  const available = quantity;

  db.query(
    "INSERT INTO books (title, author, category, quantity, available, image) VALUES (?, ?, ?, ?, ?, ?)",
    [title, author, category, quantity, available, image],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Book added successfully" });
    }
  );
};

// 📖 Get All Books
exports.getBooks = (req, res) => {
  db.query("SELECT * FROM books", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

// ❌ Delete Book
exports.deleteBook = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM books WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Book deleted" });
  });
};

// ✏️ Update Book
exports.updateBook = (req, res) => {
  const { id } = req.params;
  const { title, author, category, quantity } = req.body;

  db.query(
    "UPDATE books SET title=?, author=?, category=?, quantity=?, available=? WHERE id=?",
    [title, author, category, quantity, quantity, id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Book updated" });
    }
  );
};