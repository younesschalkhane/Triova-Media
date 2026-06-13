
const mongoose = require("mongoose");
const dns = require("dns");

// Utiliser Google DNS pour résoudre les requêtes DNS (nécessaire pour les SRV records d'Atlas)
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
      connectTimeoutMS: 10000,
    });
    console.log("MongoDB connecté avec succès");
  } catch (error) {
    console.error("Erreur de connexion MongoDB :", error);
    throw error;
  }
};

module.exports = connectDB;