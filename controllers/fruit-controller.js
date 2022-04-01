const fruitModel = require('../models/fruit');

const fruitController = {

    getAll: (req, res) => {
        const fruits = fruitModel.getAll();
        res.status(200).json(fruits);
    },

    getOne: (req, res) => {
        const targetId = req.params.id;
        const fruit = fruitModel.getById(targetId);
        res.status(200).json(fruit);
    },

    insert: (req, res) => {
        if (!req.body.name) {
            return res.sendStatus(422);
        }

        const data = {
            name: req.body.name
        };

        const newFruit = fruitModel.create(data);

        res.json(newFruit);
    },

    update: (req, res) => {
        res.sendStatus(501);
    },

    delete: (req, res) => {
        const targetId = req.params.id;

        const isOk = fruitModel.delete(targetId);

        if (isOk) {
            return res.sendStatus(204);
        }
        res.sendStatus(404);
    }
};

module.exports = fruitController;