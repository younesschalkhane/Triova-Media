const express = require('express');
const app = express();


app.use(express.json());

// routes
app.use("/api/users", require("./routes/user.routes"));
app.use("/api/categories", require("./routes/category.routes"));
app.use("/api/products", require("./routes/product.routes"));

module.exports = app;