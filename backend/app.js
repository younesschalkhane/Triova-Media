const express = require("express");
const cors = require("cors");
const path = require("path");
const contactRoutes = require("./routes/contactRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/api/health", (req, res) => {
  res.status(200).json({ success: true, message: "Triova Media API is running" });
});

app.use("/api/contact", contactRoutes);
app.use("/api/services", require("./routes/service.routes"));
app.use("/api/devis", require("./routes/devis.routes"));
app.use("/api/service-requests", require("./routes/serviceRequest.routes"));

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.originalUrl}`,
  });
});

app.use(errorHandler);

module.exports = app;
