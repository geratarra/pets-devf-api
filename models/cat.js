const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const catSchema = new Schema({
    name: String,
    age: Number,
    breed: String
}, {
    collection: 'cats_collection',
    timestamps: true
});

const Cat = mongoose.model('catModel', catSchema);

module.exports = Cat;
