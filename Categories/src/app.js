const express = require('express')

// express app
const app = express()

app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads

app.get('*', async () => {
    throw new NotFoundError();
})
