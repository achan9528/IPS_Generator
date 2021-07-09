let express = require('express');
let router = express.Router();
const PortfolioController = require("../controllers/portfolio.controller");

router.get("/", PortfolioController.findAllPortfolios);
router.get("/:id", PortfolioController.findOneSinglePortfolio);
router.put("/update/:id", PortfolioController.updateExistingPortfolio);
router.post("/new", PortfolioController.createNewPortfolio);
router.delete("/delete/:id", PortfolioController.deleteAnExistingPortfolio);

module.exports = router;
