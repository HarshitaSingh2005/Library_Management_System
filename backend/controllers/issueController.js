const db = require("../config/db");

// 📚 Issue Book
exports.issueBook = (req, res) => {
  const { user_id, book_id, return_date } = req.body;

  // Check availability
  db.query("SELECT * FROM books WHERE id = ?", [book_id], (err, result) => {
    if (err) return res.status(500).json(err);

    if (result[0].available <= 0) {
      return res.json({ message: "Book not available" });
    }

    // Insert issue record
    db.query(
      "INSERT INTO issues (user_id, book_id, issue_date, return_date) VALUES (?, ?, NOW(), ?)",
      [user_id, book_id, return_date],
      (err) => {
        if (err) return res.status(500).json(err);

        // Decrease availability
        db.query(
          "UPDATE books SET available = available - 1 WHERE id = ?",
          [book_id]
        );

        res.json({ message: "Book issued successfully" });
      }
    );
  });
};

// 🔄 Return Book
exports.returnBook = (req, res) => {
  const { issue_id } = req.body;

  db.query("SELECT * FROM issues WHERE id = ?", [issue_id], (err, result) => {
    if (err) return res.status(500).json(err);

    const issue = result[0];

    const today = new Date();
    const returnDate = new Date(issue.return_date);

    // 💰 Fine calculation (₹5 per day)
    const diffDays = Math.ceil(
      (today - returnDate) / (1000 * 60 * 60 * 24)
    );

    const fine = diffDays > 0 ? diffDays * 5 : 0;

    // Update issue
    db.query(
      "UPDATE issues SET fine = ? WHERE id = ?",
      [fine, issue_id],
      (err) => {
        if (err) return res.status(500).json(err);

        // Increase availability
        db.query(
          "UPDATE books SET available = available + 1 WHERE id = ?",
          [issue.book_id]
        );

        res.json({
          message: "Book returned",
          fine: fine
        });
      }
    );
  });
};

// 📖 Get issued books
exports.getIssuedBooks = (req, res) => {
  db.query(
    `SELECT issues.*, books.title, users.name 
     FROM issues 
     JOIN books ON issues.book_id = books.id 
     JOIN users ON issues.user_id = users.id`,
    (err, results) => {
      if (err) return res.status(500).json(err);
      res.json(results);
    }
  );
};