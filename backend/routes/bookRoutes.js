const router = require("express").Router();

const {
  addBook,
  getBooks,
  deleteBook,
  updateBook
} = require("../controllers/bookController");

const {
  verifyToken,
  isAdmin
} = require("../middleware/authMiddleware");

// Public
router.get("/", getBooks);

// Protected (Admin only)
router.post("/", verifyToken, isAdmin, addBook);
router.delete("/:id", verifyToken, isAdmin, deleteBook);
router.put("/:id", verifyToken, isAdmin, updateBook);

module.exports = router;