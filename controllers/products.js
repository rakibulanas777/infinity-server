const Products = require("../models/Products");

const createProduct = async (req, res, next) => {
	const newProduct = new Products(req.body);
	const saveProduct = await newProduct.save();
	res.status(200).json(saveProduct);
	console.log(saveProduct);
	next();
};

const deleteProduct = async (req, res, next) => {
	await Products.findByIdAndDelete(req.params.id);
	res.status(200).json("Product has been deleted.");
	next();
};

const getProducts = async (req, res, next) => {
	const products = await Products.find();
	if (req.query.catagory) {
		const search = req.query.catagory.toLowerCase();
		const matched = products.filter((product) =>
			product.catagory.toLowerCase().includes(search)
		);
		res.status(200).json(matched);
	} else if (req.query.name) {
		const search = req.query.name;
		const matched = products.filter((product) =>
			product.user.name.includes(search)
		);
		res.status(200).json(matched);
	} else {
		res.status(200).json(products);
	}
	next();
};

const updateProduct = async (req, res, next) => {
	const updatedHotel = await Products.findByIdAndUpdate(
		req.params.id,
		{ $set: req.body },
		{ new: true }
	);
	res.status(200).json(updatedHotel);
	next();
};

const getProductById = async (req, res, next) => {
	console.log(req.params.id);
	const product = await Products.findById(req.params.id);
	res.status(200).json(product);
	next();
};

module.exports = {
	getProductById,
	getProducts,
	deleteProduct,
	updateProduct,
	createProduct,
};
