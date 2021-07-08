const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	name:{
        type: String,
        required: [
            true,
            "Name is required"
        ],
        minLength: [         
            3,
            "User name must be at least 3 characters long"
        ]
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;