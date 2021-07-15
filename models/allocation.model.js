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
    },
    ig:{
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
    },
    ps:{
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
    },
    igXUS:{
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
    },
    emb:{
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
    },
    hy:{
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
    },
    lc:{
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
    },
    mc:{
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
    },
    sc:{
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
    },
    ieXUS:{
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
    },
    eme:{
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
    },
    fme:{
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
    },
    dre:{
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
    },
    ire:{
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
    },
    co:{
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
    },
    mlp:{
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
    },
    tim:{
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
    },
    hm:{
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
    },
    he:{
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
    },
    hls:{
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
    },
    pre:{
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