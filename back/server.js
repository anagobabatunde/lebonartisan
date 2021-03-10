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

// const insertDocuments = function (db, callback) {
//     const collection = db.collection('Product');
//     try {
//         collection.insertMany(
//             [
//                 { "_id": 1, "name": "AC1 Phone1", "type": "phone", "price": 200.05, "rating": 3.8, "warranty_years": 1, "available": true },
//                 { "_id": 2, "name": "AC2 Phone2", "type": "phone", "price": 147.21, "rating": 1, "warranty_years": 3, "available": false },
//                 { "_id": 3, "name": "AC3 Phone3", "type": "phone", "price": 150, "rating": 2, "warranty_years": 1, "available": true },
//                 { "_id": 4, "name": "AC4 Phone4", "type": "phone", "price": 50.20, "rating": 3, "warranty_years": 2, "available": true }
//             ]
//             , function (err, result) {
//                 console.log(err)
//                 console.log("Inserted 3 documents into the collection");
//                 callback(result);
//             });
//     } catch {
//         throw err
//     }

// }