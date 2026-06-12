require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");

// Connect to MongoDB before starting the HTTP server
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Triova Media server running on port ${PORT}`);
});
