const mongoose = require("mongoose");

const devisSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    company: {
      type: String,
      trim: true,
      default: "",
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    projectType: {
      type: String,
      required: true,
    },
    objective: {
      type: String,
      default: "",
    },
    budget: {
      type: String,
      default: "",
    },
    launchDate: {
      type: String,
      default: "",
    },
    priority: {
      type: String,
      enum: ["Urgent", "Normal", "Flexible", ""],
      default: "",
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    requestedServices: {
      type: [String],
      default: [],
    },
    status: {
      type: String,
      enum: ["En attente", "En cours", "Accepté", "Refusé"],
      default: "En attente",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Devis", devisSchema);
