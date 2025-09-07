import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/auth.js";

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);

// Connect MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/splitwise", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(4000, () => console.log("Server running on http://localhost:4000"));
  })
  .catch((err) => console.log(err));
