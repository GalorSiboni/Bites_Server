const express = require('express')
const mongoose = require('mongoose')
const Categories = require('./Categories/models/categories')
const Product = require('./Categories/models/categories')

// express app
const app = express()

// connect to mongodb
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        console.log('connected to db');
        app.listen(5000, () => {
            console.log("Server listening on port 5000...")
        });
    })
    .catch((err) => console.log(err))


app.post('/add_new_category', (req, res) => {
    const { cat_body } = req.body;
    const categories = new Categories({
        _id: mongoose.Types.ObjectId(),
        name: cat_body.name,
        image: cat_body.image,
        description: cat_body.description
    });
    categories
        .save()
        .then((result) => res.send(result))
        .catch((err) => res.send(err));
});


