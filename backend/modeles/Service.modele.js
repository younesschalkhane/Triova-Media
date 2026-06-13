const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Le titre est requis."],
      trim: true,
      maxlength: [120, "Le titre ne peut pas dépasser 120 caractères."],
    },
    slug: {
      type: String,
      required: [true, "Le slug est requis."],
      unique: true,
      trim: true,
      lowercase: true,
    },
    shortDescription: {
      type: String,
      required: [true, "La description courte est requise."],
      trim: true,
      maxlength: [300, "La description courte ne peut pas dépasser 300 caractères."],
    },
    description: {
      type: String,
      required: [true, "La description est requise."],
      trim: true,
    },
    icon: {
      type: String,
      required: [true, "L'icône est requise."],
      trim: true,
    },
    image: {
      type: String,
      default: "",
      trim: true,
    },
    category: {
      type: String,
      required: [true, "La catégorie est requise."],
      trim: true,
    },
    price: {
      type: Number,
      default: 0,
      min: [0, "Le prix ne peut pas être négatif."],
    },
    features: {
      type: [String],
      default: [],
      validate: {
        validator: (v) => Array.isArray(v) && v.length > 0,
        message: "Au moins une fonctionnalité est requise.",
      },
    },
    status: {
      type: String,
      enum: {
        values: ["active", "inactive"],
        message: "Le statut doit être 'active' ou 'inactive'.",
      },
      default: "active",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Service", serviceSchema);
