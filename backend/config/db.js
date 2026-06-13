const mongoose = require("mongoose");
const dns = require("dns");

// Utiliser Google DNS pour résoudre les requêtes SRV (nécessaire pour MongoDB Atlas)
dns.setServers(["8.8.8.8", "8.8.4.4"]);

/**
 * MongoDB connection configuration for Triova Media backend.
 *
 * Requires MONGO_URI in your .env file, e.g.:
 *   MONGO_URI=mongodb://localhost:27017/triova-media
 *   MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/triova-media
 */
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
      connectTimeoutMS: 10000,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
