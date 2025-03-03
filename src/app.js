import express from "express";
import roleRoutes from "./routes/roleRoutes.js"; // Import role routes
import commodityRoutes from "./routes/commodityRoutes.js";
import farmerRoutes from "./routes/farmerRoutes.js";
import processRoutes from "./routes/processRoutes.js";
import fieldsRoutes from "./routes/fieldRoutes.js";
import subFieldsRoutes from "./routes/subFieldRoutes.js";
import uomRoutes from "./routes/uomRoutes.js";
import materialCategoryRoutes from "./routes/materialCategoryRoutes.js";
import farmActivityRoutes from "./routes/farmActivityRoutes.js";
import farmerAttendanceRoutes from "./routes/farmerAttendanceRoutes.js";
import harvestRoutes from "./routes/harvestRoutes.js";
import materialRoutes from "./routes/materialRoutes.js";
import materialUsageRoutes from "./routes/materialUsageRoutes.js";
import proposalRoutes from "./routes/proposalRoutes.js";
import purchasingRoutes from "./routes/purchasingRoutes.js";
import salesRoutes from "./routes/salesRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import wagesRoutes from "./routes/wagesRoutes.js";

const app = express();

// Middleware untuk parsing JSON
app.use(express.json());

// Routes
app.use("/api/roles", roleRoutes);
app.use("/api/commodities", commodityRoutes);
app.use("/api/farmers", farmerRoutes);
app.use("/api/process", processRoutes);
app.use("/api/fields", fieldsRoutes);
app.use("/api/subfields", subFieldsRoutes);
app.use("/api/uom", uomRoutes);
app.use("/api/material-categories", materialCategoryRoutes);
app.use("/api/farm-activity", farmActivityRoutes);
app.use("/api/farmer-attendance", farmerAttendanceRoutes);
app.use("/api/harvest", harvestRoutes);
app.use("/api/material", materialRoutes);
app.use("/api/material-usage", materialUsageRoutes);
app.use("/api/proposal", proposalRoutes);
app.use("/api/purchasing", purchasingRoutes);
app.use("/api/sales", salesRoutes);
app.use("/api/users", userRoutes);
app.use("/api/wages", wagesRoutes);

export default app;
