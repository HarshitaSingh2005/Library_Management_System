const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./config/db"); // connect DB

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes")); // 🔥 IMPORTANT
app.use("/api/books", require("./routes/bookRoutes"));
app.use("/api/issues", require("./routes/issueRoutes"));
// Test route
app.get("/", (req, res) => {
  res.send("API Running 🚀");
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});