const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
	name:{
        type: String,
        required: [
            true,
            "Name is required"
        ],
        minLength: [         
            3,
            "Client name must be at least 3 characters long"
        ]
    }
});

const Client = mongoose.model("Clients", ClientSchema, "Clients");

module.exports = Client;