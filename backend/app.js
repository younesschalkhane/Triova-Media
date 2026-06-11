const express = require("express");
const cors = require("cors");
const path = require("path");
const multer = require("multer");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/services", require("./routes/service.routes"));
app.use("/api/devis", require("./routes/devis.routes"));
app.use("/api/service-requests", require("./routes/serviceRequest.routes"));

app.use((_req, res) => {
  res.status(404).json({
    success: false,
    message: "Route introuvable.",
  });
});

app.use((err, _req, res, _next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({
      success: false,
      message: err.code === "LIMIT_FILE_SIZE"
        ? "L'image ne doit pas dépasser 5 Mo."
        : err.message,
    });
  }

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Erreur serveur interne.",
  });
});

module.exports = app;
