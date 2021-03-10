const express = require('express')
const bodyParser = require('body-parser')
const apiRoutes = require("./src/Router/routes")
const app = express()
const db = require("./src/database")

const MongoClient = require("mongodb").MongoClient;
const dotenv = require('dotenv');
dotenv.config();
const {
    MONGO_HOSTNAME,
    MONGO_DB,
    MONGO_PORT,
    MONGO_ROOT_USER,
    MONGO_ROOT_PASSWORD
} = process.env;
let port = process.env.BACK_PORT || 5000;
const url = `mongodb://${MONGO_ROOT_USER}:${MONGO_ROOT_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`
// const url = `mongodb://localhost:${MONGO_PORT}/${MONGO_DB}`


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.get('/', (req, res) => {
    console.log("je sui la")
    res.send('Welcome to Express')
});
app.use('/api', apiRoutes)
app.listen(port, function () {
    console.log("Running FirstRest on Port " + port);
})