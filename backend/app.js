const express = require("express");
const cors = require("cors");
const contactRoutes = require("./routes/contactRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// Parse incoming JSON request bodies
app.use(express.json());

// Allow frontend applications to call this API
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Health check — useful to verify the server is running
app.get("/api/health", (req, res) => {
  res.status(200).json({ success: true, message: "Triova Media API is running" });
});

// Contact form routes: POST (submit) and GET (admin list)
app.use("/api/contact", contactRoutes);

// 404 handler for unknown API routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.originalUrl}`,
  });
});

// Global error-handling middleware (must be last)
app.use(errorHandler);

module.exports = app;
