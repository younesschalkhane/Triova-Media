const Category = require("../models/category.model");

// CREATE
exports.createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// READ ALL
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// UPDATE
exports.updateCategory = async (req, res) => {
try {
const category = await Category.findByIdAndUpdate(
req.params.id,
req.body,
{ new: true }
);
res.json(category);
} catch (err) {
res.status (500).json({ message: err.message });
}
};