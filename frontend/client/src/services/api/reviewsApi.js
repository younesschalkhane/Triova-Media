import axiosInstance from "./axiosInstance";

export const fetchActiveReviews = async () => {
  const response = await axiosInstance.get("/api/reviews/active");
  return response.data;
};

export const createReview = async (reviewData) => {
  const response = await axiosInstance.post("/api/reviews", reviewData);
  return response.data;
};
