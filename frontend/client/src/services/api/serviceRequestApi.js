import axiosInstance from "./axiosInstance";

// POST a new service request
export const createServiceRequest = async (data) => {
  const response = await axiosInstance.post("/api/service-requests", data);
  return response.data;
};

// GET all service requests
export const fetchServiceRequests = async (params = {}) => {
  const response = await axiosInstance.get("/api/service-requests", { params });
  return response.data;
};