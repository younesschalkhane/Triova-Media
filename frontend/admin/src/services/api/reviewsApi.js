import axiosInstance from "./axiosInstance";

export const fetchAllReviews = async (params = {}) => {
  const response = await axiosInstance.get("/api/reviews", { params });
  return response.data;
};

export const createReview = async (reviewData) => {
  const response = await axiosInstance.post("/api/reviews", reviewData);
  return response.data;
};

export const updateReview = async (id, reviewData) => {
  const response = await axiosInstance.put(`/api/reviews/${id}`, reviewData);
  return response.data;
};

export const deleteReview = async (id) => {
  const response = await axiosInstance.delete(`/api/reviews/${id}`);
  return response.data;
};

export const toggleVisibility = async (id) => {
  const response = await axiosInstance.patch(`/api/reviews/${id}/toggle-visibility`);
  return response.data;
};

export const toggleStatus = async (id) => {
  const response = await axiosInstance.patch(`/api/reviews/${id}/toggle-status`);
  return response.data;
};
