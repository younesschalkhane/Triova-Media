import axiosInstance from "./axiosInstance";

/**
 * Envoyer un message de contact depuis le formulaire client.
 */
export async function submitContact(formData) {
  try {
    const { data } = await axiosInstance.post("/api/contact", formData);
    return data;
  } catch (error) {
    console.warn("⚠️ API indisponible (submitContact) - message non envoyé");
    throw error;
  }
}
