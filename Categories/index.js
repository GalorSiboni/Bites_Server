const mongoose = require('mongoose');
var router = require('express').Router();
const express = require('express')
// express app
const app = express()
const categories = require('./routes/categories')

//parse form data
app.use(express.urlencoded({extended: true}))
//parse json
app.use(express.json())

const dbURI = 'mongodb+srv://GalorSiboni:Galax1c565@bites.lvofh.mongodb.net/bites?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        console.log('connected to db');
        app.listen(5000, () => {
            console.log("Server listening on port 5000...")
        });
    })
    .catch((err) => console.log(err))

app.use('/api', categories)
app.get('*', async () => { throw new NotFoundError(); })
