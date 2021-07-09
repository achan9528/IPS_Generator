var express = require('express');
var router = express.Router();
const ClientController = require("../controllers/client.controller");

router.get("/", ClientController.findAllClients);
router.get("/:id", ClientController.findOneSingleClient);
router.put("/update/:id", ClientController.updateExistingClient);
router.post("/new", ClientController.createNewClient);
router.delete("/delete/:id", ClientController.deleteAnExistingClient);

module.exports = router;
