import express from "express";
import mongoose from "mongoose";

// app config
const app = express();
const port = 9000;

//middleware

// DB config

//api endpoints
app.get('/', (req, res) => {
    res.status(200).send('Hello World')
})

// listen
app.listen(port, () => {
    console.log(`Listening on localhost: ${port}`)
})
