import express from "express";
import roleRoutes from "./routes/roleRoutes.js"; // Import role routes
import commodityRoutes from "./routes/commodityRoutes.js";
import farmerRoutes from "./routes/farmerRoutes.js";
import processRoutes from "./routes/processRoutes.js";
import fieldsRoutes from "./routes/fieldRoutes.js";

const app = express();

// Middleware untuk parsing JSON
app.use(express.json());

// Routes
app.use("/api/roles", roleRoutes);
app.use("/api/commodities", commodityRoutes);
app.use("/api/farmers", farmerRoutes);
app.use("/api/process", processRoutes);
app.use("/api/fields", fieldsRoutes);

export default app;
