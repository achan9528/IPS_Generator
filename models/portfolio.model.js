const mongoose = require("mongoose");

const PortfolioSchema = new mongoose.Schema({
	name:{
        type: String,
        required: [
            true,
            "Portfolio is required"
        ],
        minLength: [         
            3,
            "Portfolio name must be at least 3 characters long"
        ]
    }
});

const Portfolio = mongoose.model("Portfolio", PortfolioSchema);

module.exports = Portfolio;