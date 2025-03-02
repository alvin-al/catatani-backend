import express from "express";
import roleRoutes from "./routes/roleRoutes.js"; // Import role routes

const app = express();

// Middleware untuk parsing JSON
app.use(express.json());

// Routes
app.use("/api/roles", roleRoutes); // Role routes


export default app;
