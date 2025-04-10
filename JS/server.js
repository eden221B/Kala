require("dotenv").config({ path: "../.env" });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("../config/database");
const authRoutes = require("../routes/authRoutes");

 //routers
const userRoutes = require("../routes/userRoutes").default || require("../routes/userRoutes");
const productRoutes = require("../routes/productRoutes").default || require("../routes/productRoutes");
const orderRoutes = require("../routes/orderRoutes").default || require("../routes/orderRoutes");
const paymentRoutes = require("../routes/paymentRoutes").default || require("../routes/paymentRoutes");
const reviewRoutes = require("../routes/reviewRoutes").default || require("../routes/reviewRoutes");
const categoryRoutes = require("../routes/categoryRoutes").default || require("../routes/categoryRoutes");
const cartRoutes = require("../routes/cartRoutes").default || require("../routes/cartRoutes");

const countryRoutes = require("../routes/countryRoutes") || require("../routes/countryRoutes");
const regionRoutes = require("../routes/regionRoutes") || require("../routes/regionRoutes");
const stateRoutes = require("../routes/stateRoutes") || require("../routes/stateRoutes");
const departmentRoutes = require("../routes/departmentRoutes") || require("../routes/departmentRoutes");
const designationRoutes = require("../routes/designationRoutes") || require("../routes/designationRoutes");
const permissionsRoutes = require("../routes/permissionsRoutes") || require("../routes/permissionsRoutes");
const rolesRoutes = require("../routes/rolesRoutes") || require("../routes/rolesRoutes");
const employeeRoutes = require("../routes/employeeRoutes") || require("../routes/employeeRoutes");
const productDetailsRoutes = require("../routes/productDetailsRoutes") || require("../routes/productDetailsRoutes");



//const { sequelize } = require("../models");

const app = express();
const PORT = process.env.PORT || 5335;

//middleware
app.use(cors());
app.use(bodyParser.json());

app.use(express.json());
app.use("/api/auth", authRoutes);

//routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/cart", cartRoutes);
app.use("/categories", categoryRoutes);

app.use("/countries", countryRoutes);
app.use("/regions", regionRoutes);
app.use("/states", stateRoutes);
app.use("/departments", departmentRoutes);
app.use("/designations", designationRoutes);
app.use("/permissions", permissionsRoutes);
app.use("/roles", rolesRoutes);
app.use("/employees", employeeRoutes);
app.use("/product-details", productDetailsRoutes);

//graphQL to be added here

//sync db
sequelize.sync()
    .then(() => console.log("Database connected..."))
    .catch(err => console.error("Database connection error:", err));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
