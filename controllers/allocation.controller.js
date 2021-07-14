const Allocation = require("../models/allocation.model");

module.exports.findAllAllocations = (req, res) => {
    Allocation.find()
        .then(allDaAllocations => {
            console.log('here')
            console.log(allDaAllocations)
            return res.json({ allocations: allDaAllocations })
        })
        .catch(err => {
            console.log('err here')
            console.log(err)
            return res.json({ message: "Something went wrong", error: err })
        });
};

module.exports.findOneSingleAllocation = (req, res) => {
    Allocation.findOne({ _id: req.params.id })
        .then(oneSingleAllocation => res.json({ allocation: oneSingleAllocation }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewAllocation = (req, res) => {
    Allocation.create(req.body)
        .then(newlyCreatedAllocation => res.json(newlyCreatedAllocation))
        .catch(err => res.status(400).json(err));
};

module.exports.updateExistingAllocation = (req, res) => {
    Allocation.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedAllocation => res.json(updatedAllocation))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingAllocation = (req, res) => {
    Allocation.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};