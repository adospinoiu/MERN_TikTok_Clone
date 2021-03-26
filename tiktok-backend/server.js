import express from "express";
import mongoose from "mongoose";
import Data from "./data.js";
import Videos from './dbModel.js';

// app config
const app = express();
const port = 9000;

//middleware
app.use(express.json());

// Security warning!
app.use((req, res, next) => {
    res.setHeaders('Access-Control-Allow-Origin', '*'),
    res.setHeaders('Access-Control-Allow-Headers', '*'),
    next()
})

// DB config
const connection_url = 'mongodb+srv://controller:oq1asa16sGWO6w2r@cluster0.iirmq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

//api endpoints
// This end-point is to test the server is working
app.get('/', (req, res) => {
    res.status(200).send('Hello World')
});

// This end-point retrieves the data from the database
app.get('/v1/posts', (req, res) => {
    res.status(200).send(Data)
})

app.get('/v2/posts', (req, res) => {
    Videos.find({}, (err, data) => {
        if (err) {
            res.status(500). send(err);
        } else {
            res.status(200).send(data);
        }
    });
});


// This end-point sends data to the database
app.post('/v2/posts', (req, res) => {
    const dbVideos = req.body;

    Videos.create(dbVideos, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

// listen
app.listen(port, () => {
    console.log(`Listening on localhost: ${port}`)
})
