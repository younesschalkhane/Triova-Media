import axiosInstance from "./axiosInstance";

// GET all service requests
export const fetchServiceRequests = async (params = {}) => {
  const response = await axiosInstance.get("/api/service-requests", { params });
  return response.data;
};

// GET a single service request
export const fetchServiceRequest = async (id) => {
  const response = await axiosInstance.get(`/api/service-requests/${id}`);
  return response.data;
};

// DELETE a service request
export const deleteServiceRequest = async (id) => {
  const response = await axiosInstance.delete(`/api/service-requests/${id}`);
  return response.data;
};

// UPDATE a service request status
export const updateServiceRequest = async (id, data) => {
  const response = await axiosInstance.put(`/api/service-requests/${id}`, data);
  return response.data;
};