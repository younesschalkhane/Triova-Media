import axiosInstance from "./axiosInstance";

// GET all service requests
export const fetchServiceRequests = async (params = {}) => {
  try {
    const response = await axiosInstance.get("/api/service-requests", { params });
    return response.data;
  } catch (error) {
    console.warn("⚠️ API indisponible (fetchServiceRequests) - retour tableau vide");
    return { success: true, data: [] };
  }
};

// GET a single service request
export const fetchServiceRequest = async (id) => {
  try {
    const response = await axiosInstance.get(`/api/service-requests/${id}`);
    return response.data;
  } catch (error) {
    console.warn("⚠️ API indisponible (fetchServiceRequest) - retour null");
    return null;
  }
};

// DELETE a service request
export const deleteServiceRequest = async (id) => {
  try {
    const response = await axiosInstance.delete(`/api/service-requests/${id}`);
    return response.data;
  } catch (error) {
    console.warn("⚠️ API indisponible (deleteServiceRequest) - action impossible");
    throw error;
  }
};

// UPDATE a service request status
export const updateServiceRequest = async (id, data) => {
  try {
    const response = await axiosInstance.put(`/api/service-requests/${id}`, data);
    return response.data;
  } catch (error) {
    console.warn("⚠️ API indisponible (updateServiceRequest) - action impossible");
    throw error;
  }
};
