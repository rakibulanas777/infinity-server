const mongoose = require("mongoose");
const ProductsSchema = new mongoose.Schema(
	{
		user: {
			type: Object,
		},
		
		name: {
			type: String,
			required: true,
		},
		company: {
			type: String,
		},
		colors: {
			type: String,
		},

		price: {
			type: Number,
			required: true,
		},
		image: {
			type: String,
		},
		description: {
			type: String,
		},

		catagory: {
			type: String,
		},
	},
	{ timestamps: true }
);
module.exports = mongoose.model("Products", ProductsSchema);
