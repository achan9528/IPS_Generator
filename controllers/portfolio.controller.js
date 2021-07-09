const Portfolio = require("../models/portfolio.model");

module.exports.findAllPortfolios = (req, res) => {
    Portfolio.find()
        .then(allDaPortfolios => {
            console.log('here')
            console.log(allDaPortfolios)
            return res.json({ portfolios: allDaPortfolios })
        })
        .catch(err => {
            console.log('err here')
            console.log(err)
            return res.json({ message: "Something went wrong", error: err })
        });
};

module.exports.findOneSinglePortfolio = (req, res) => {
    Portfolio.findOne({ _id: req.params.id })
        .then(oneSinglePortfolio => res.json({ portfolio: oneSinglePortfolio }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewPortfolio = (req, res) => {
    Portfolio.create(req.body)
        .then(newlyCreatedPortfolio => res.json(newlyCreatedPortfolio))
        .catch(err => res.status(400).json(err));
};

module.exports.updateExistingPortfolio = (req, res) => {
    Portfolio.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedPortfolio => res.json(updatedPortfolio))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingPortfolio = (req, res) => {
    Portfolio.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};