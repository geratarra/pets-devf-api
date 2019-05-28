// CATS ENDPOINT

const API_URL = require('../global_config').API_URL + '/cats';


module.exports = function (app) {
    
    const Cat = require('../models/cat');

    // Remove Cat
    app.delete(API_URL + '/:id', (req, res) => {
        const { id } = req.params;
        Cat.findByIdAndDelete(id).exec()
            .then(deletedCat => {
                res.status(200).send(deletedCat);
            })
            .catch(error => {
                res.status(400).send(error);
            });
    });

    // Update Cat
    app.put(API_URL + '/:id', (req, res) => {
        const { id } = req.params;
        const { name, age, breed } = req.body;

        const updatedCat = {
            name,
            age,
            breed
        };

        Cat.findByIdAndUpdate(id, updatedCat, { new: true }).exec()
            .then(_updatedCat => {
                res.status(200).send(_updatedCat);
            })
            .catch(error => {
                res.status(400).send(error);
            });
    });

    // Create a Cat
    app.post(API_URL, (req, res) => {
        console.log("POST request handled...");

        const { name, age, breed } = req.body;

        const dog = Cat({
            name,
            age,
            breed
        });

        dog.save((error, success) => {
            if (error) {
                console.log('ERROR while trying to create Cat...');
                throw error;
            }
            res.status(200).send(success);
        });

        console.log("PUT request finished...");
    });

    // Get Cats
    app.get(API_URL, (req, res) => {
        Cat.find().exec()
            .then(cats => {
                res.status(200).send(cats);
            })
            .catch(error => {
                res.status(204).send(error);
            });
    });

    // Get Cat by id
    app.get(API_URL + '/:id', (req, res) => {
        const { id } = req.params;
        Cat.findById(id).exec()
            .then(cat => {
                res.status(200).send(cat);
            })
            .catch(error => {
                res.status(204).send(error);
            });
    });

}