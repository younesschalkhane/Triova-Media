const mongoose = require("mongoose");

/**
 * MongoDB connection configuration for Triova Media backend.
 *
 * Requires MONGO_URI in your .env file, e.g.:
 *   MONGO_URI=mongodb://localhost:27017/triova-media
 *   MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/triova-media
 */
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
