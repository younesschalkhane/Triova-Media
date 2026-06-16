import axiosInstance from "./axiosInstance";

/**
 * Envoyer un message de contact depuis le formulaire client.
 */
export async function submitContact(formData) {
  const url = "/api/contact";

  // ── Debug logs (dev uniquement) ──────────────────────────
  if (import.meta.env.DEV) {
    console.log("─────────────────────────────────────────");
    console.log("[contactApi] Envoi du formulaire de contact");
    console.log("  URL      :", axiosInstance.defaults.baseURL + url);
    console.log("  Méthode  : POST");
    console.log("  Payload  :", JSON.stringify(formData));
    console.log("─────────────────────────────────────────");
  }

  try {
    const { data } = await axiosInstance.post(url, formData);

    if (import.meta.env.DEV) {
      console.log("[contactApi] Réponse reçue :", JSON.stringify(data));
    }

    return data;
  } catch (error) {
    // ── Debug logs d'erreur (dev uniquement) ───────────────
    if (import.meta.env.DEV) {
      console.error("[contactApi] Erreur lors de l'envoi :");
      console.error("  Status   :", error.response?.status);
      console.error("  Message  :", error.response?.data?.message);
      console.error("  URL      :", error.config?.url);
      console.error("  Méthode  :", error.config?.method);
      console.error("  Payload  :", error.config?.data);
      console.error("  Erreur complète :", error.message);
    }

    // Traduire les erreurs en messages utilisateur clairs
    if (!error.response) {
      // Pas de réponse du serveur (réseau, CORS, serveur down)
      throw new Error(
        "Impossible de contacter le serveur. Vérifiez votre connexion internet et réessayez."
      );
    }

    const status = error.response.status;
    const serverMsg = error.response.data?.message;

    if (status === 404) {
      throw new Error(
        "Le service de contact est temporairement indisponible. Veuillez réessayer plus tard."
      );
    }

    if (status === 400) {
      throw new Error(serverMsg || "Veuillez vérifier les informations saisies.");
    }

    if (status === 500) {
      throw new Error(
        serverMsg ||
          "Une erreur est survenue sur le serveur. Veuillez réessayer dans quelques instants."
      );
    }

    // Autres erreurs
    throw new Error(
      serverMsg || "Une erreur est survenue lors de l'envoi. Veuillez réessayer."
    );
  }
}