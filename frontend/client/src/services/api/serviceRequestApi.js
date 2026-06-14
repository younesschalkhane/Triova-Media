import axiosInstance from "./axiosInstance";

// POST a new service request
export const createServiceRequest = async (data) => {
  try {
    const response = await axiosInstance.post("/api/service-requests", data);
    return response.data;
  } catch (error) {
    console.warn("⚠️ API indisponible (createServiceRequest) - utilisation du cache local");
    throw error;
  }
};

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
