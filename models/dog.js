const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dogSchema = new Schema({
    name: String,
    age: Number,
    breed: String
}, {
    collection: 'dogs_collection',
    timestamps: true
});

const Dog = mongoose.model('dogModel', dogSchema);

module.exports = Dog;
