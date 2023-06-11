const express = require("express");
const {
	getProducts,
	getProductById,
	deleteProduct,
	createProduct,
	updateProduct,
} = require("../controllers/products");

const router = express.Router();

router.get("/:id", getProductById);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);
router.get("/", getProducts);
router.post("/", createProduct);

module.exports = router;
