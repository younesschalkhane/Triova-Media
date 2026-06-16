const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Le nom est requis."],
      trim: true,
      maxlength: [100, "Le nom ne peut pas dépasser 100 caractères."],
    },
    role: {
      type: String,
      trim: true,
      default: "",
    },
    company: {
      type: String,
      trim: true,
      default: "",
    },
    photo: {
      type: String,
      default: "",
      trim: true,
    },
    comment: {
      type: String,
      required: [true, "Le commentaire est requis."],
      trim: true,
      maxlength: [500, "Le commentaire ne peut pas dépasser 500 caractères."],
    },
    rating: {
      type: Number,
      required: [true, "La note est requise."],
      min: [1, "La note minimale est 1."],
      max: [5, "La note maximale est 5."],
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    isVisible: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);