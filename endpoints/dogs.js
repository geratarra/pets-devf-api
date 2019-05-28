// DOGS ENDPOINT

const API_URL = require('../global_config').API_URL + '/dogs';


module.exports = function (app) {
    
    const Dog = require('../models/dog');

    // Remove Dog
    app.delete(API_URL + '/:id', (req, res) => {
        const { id } = req.params;
        Dog.findByIdAndDelete(id).exec()
            .then(deletedDog => {
                res.status(200).send(deletedDog);
            })
            .catch(error => {
                res.status(400).send(error);
            });
    });

    // Update Dog
    app.put(API_URL + '/:id', (req, res) => {
        const { id } = req.params;
        const { name, age, breed } = req.body;

        const updatedDog = {
            name,
            age,
            breed
        };

        Dog.findByIdAndUpdate(id, updatedDog, { new: true }).exec()
            .then(_updatedDog => {
                res.status(200).send(_updatedDog);
            })
            .catch(error => {
                res.status(400).send(error);
            });
    });

    // Create a Dog
    app.post(API_URL, (req, res) => {
        console.log("POST request handled...");

        const { name, age, breed } = req.body;
        
        const dog = Dog({
            name,
            age,
            breed
        });

        dog.save((error, success) => {
            if (error) {
                console.log('ERROR while trying to create Dog...');
                throw error;
            }
            res.status(200).send(success);
        });

        console.log("PUT request finished...");
    });

    // Get Dogs
    app.get(API_URL, (req, res) => {
        Dog.find().exec()
            .then(dogs => {
                res.status(200).send(dogs);
            })
            .catch(error => {
                res.status(204).send(error);
            });
    });

    // Get Dog by id
    app.get(API_URL + '/:id', (req, res) => {
        const { id } = req.params;
        Dog.findById(id).exec()
            .then(dog => {
                res.status(200).send(dog);
            })
            .catch(error => {
                res.status(204).send(error);
            });
    });


}