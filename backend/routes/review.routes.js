const express = require("express");
const router = express.Router();
const reviewController = require("../Controllers/Review.controller");

// GET /api/reviews/active - Active & visible reviews (frontend)
router.get("/active", reviewController.getActiveReviews);

// GET /api/reviews - All reviews (admin)
router.get("/", reviewController.getAllReviews);

// POST /api/reviews - Create a review
router.post("/", reviewController.createReview);

// PUT /api/reviews/:id - Update a review
router.put("/:id", reviewController.updateReview);

// DELETE /api/reviews/:id - Delete a review
router.delete("/:id", reviewController.deleteReview);

// PATCH /api/reviews/:id/toggle-visibility - Toggle visibility
router.patch("/:id/toggle-visibility", reviewController.toggleVisibility);

// PATCH /api/reviews/:id/toggle-status - Toggle status
router.patch("/:id/toggle-status", reviewController.toggleStatus);

module.exports = router;