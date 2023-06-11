const express = require("express");
const {
	createBids
} = require("../controllers/bids");

const router = express.Router();


router.post("/", createBids);

module.exports = router;
