var express = require('express');
var router = express.Router();
const AllocationController = require("../controllers/allocation.controller");

router.get("/", AllocationController.findAllAllocations);
router.get("/:id", AllocationController.findOneSingleAllocation);
router.put("/update/:id", AllocationController.updateExistingAllocation);
router.post("/new", AllocationController.createNewAllocation);
router.delete("/delete/:id", AllocationController.deleteAnExistingAllocation);

module.exports = router;
