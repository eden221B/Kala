const sequelize = require("../config/database");
const User = require("../models/Users");
const Product = require("../models/Product");
const Order = require("../models/Order");
const OrderDetails = require("../models/OrderDetails");
const Payment = require("../models/Payment");
const Review = require("../models/Review");
const Cart = require("../models/Cart"); 
const Category = require("../models/Category");
const CartProduct = require("../models/CartProduct");

const Country = require("../models/Country");
const Region = require("../models/Region");
const CountryRegion = require("../models/CountryRegion");
const State = require("../models/State");
const CountryState = require("../models/CountryState");
const Department = require("../models/Department");
const Designation = require("../models/Designation");
const Permissions = require("../models/Permissions");
const Roles = require("../models/Roles");
const RolePermissions = require("../models/RolePermissions");
const Employees = require("../models/Employees");
const ProductDetails = require("../models/ProductDetails");


sequelize.sync({ alter: true }) 
    .then(() => {
        console.log("Database & tables created!");
        process.exit();
    })
    .catch((err) => console.error("Error syncing database:", err));

