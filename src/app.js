import express from "express";
import roleRoutes from "./routes/roleRoutes.js"; // Import role routes
import commodityRoutes from "./routes/commodityRoutes.js";
import farmerRoutes from "./routes/farmerRoutes.js";

const app = express();

// Middleware untuk parsing JSON
app.use(express.json());

// Routes
app.use("/api/roles", roleRoutes);
app.use("/api/commodity", commodityRoutes);
app.use("/api/farmer", farmerRoutes);

export default app;
