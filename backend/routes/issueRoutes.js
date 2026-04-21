const router = require("express").Router();

const {
  issueBook,
  returnBook,
  getIssuedBooks
} = require("../controllers/issueController");

const { verifyToken } = require("../middleware/authMiddleware");

router.post("/issue", verifyToken, issueBook);
router.post("/return", verifyToken, returnBook);
router.get("/", verifyToken, getIssuedBooks);

module.exports = router;