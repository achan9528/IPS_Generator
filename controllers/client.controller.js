const Client = require("../models/client.model");

module.exports.findAllClients = (req, res) => {
    Client.find()
        .then(allDaClients => {
            console.log('here')
            console.log(allDaClients)
            return res.json({ clients: allDaClients })
        })
        .catch(err => {
            console.log('err here')
            console.log(err)
            return res.json({ message: "Something went wrong", error: err })
        });
};

module.exports.findOneSingleClient = (req, res) => {
    Client.findOne({ _id: req.params.id })
        .then(oneSingleClient => res.json({ client: oneSingleClient }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewClient = (req, res) => {
    Client.create(req.body)
        .then(newlyCreatedClient => res.json(newlyCreatedClient))
        .catch(err => res.status(400).json(err));
};

module.exports.updateExistingClient = (req, res) => {
    Client.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedClient => res.json(updatedClient))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingClient = (req, res) => {
    Client.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};