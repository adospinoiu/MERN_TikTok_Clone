import express from "express";
import mongoose from "mongoose";
import Data from "./data.js";

// app config
const app = express();
const port = 9000;

//middleware

// DB config

//api endpoints
app.get('/', (req, res) => {
    res.status(200).send('Hello World')
});

app.get('/v1/posts', (req, res) => {
    res.status(200).send(Data)
})

// listen
app.listen(port, () => {
    console.log(`Listening on localhost: ${port}`)
})
