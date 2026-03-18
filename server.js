const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));

// Test route
app.get("/", (req, res) => {
  res.send("🚀 TradeSmart Backend Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/wholesalers", require("./routes/wholesalerRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));
const productRoutes = require("./routes/productRoutes");

app.use("/api/products", productRoutes);
const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);
