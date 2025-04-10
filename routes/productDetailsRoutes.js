const express = require("express");
const router = express.Router();
const { addProductDetails, getAllProductDetails, getProductDetailsByProductId, updateProductDetails, deleteProductDetails } = require("../controllers/productDetailsController");

router.post("/add", addProductDetails);
router.get("/", getAllProductDetails);
router.get("/:product_id", getProductDetailsByProductId);
router.put("/:product_id", updateProductDetails);
router.delete("/:product_id", deleteProductDetails);

module.exports = router;
