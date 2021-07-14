const mongoose = require("mongoose");

const AllocationSchema = new mongoose.Schema({
	name:{
        type: String,
        required: [
            true,
            "Name is required"
        ],
        minLength: [         
            3,
            "Allocation name must be at least 3 characters long"
        ]
    },
    ce:{
        type: Number,
        required: [
            false,
        ],
        min: [
            0,
            "value must be between 0-100"
        ],
        max: [
            100,
            "value must be between 0-100"
        ]
    }
});

const Allocation = mongoose.model("Allocations", AllocationSchema, "Allocations");

module.exports = Allocation;