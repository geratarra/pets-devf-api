const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./mongooseClient');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use((cors()));

require('./endpoints/dogs')(app);
require('./endpoints/cats')(app);

const API_URL = require('./global_config').API_URL;
const PORT = process.env.PORT || 3000;

// Test endpoint
app.get(API_URL, (req, res) => {
    res.status(200).send('HELLO FROM THE PETS API!');
});

app.listen(PORT, () => {
    console.log("Server listening on port " + PORT + "...");    
    console.log("You can now try your API with the following URI: ", API_URL);
});
