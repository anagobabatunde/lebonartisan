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
const url = `mongodb://${MONGO_ROOT_USER}:${MONGO_ROOT_PASSWORD}@mongo:${MONGO_PORT}/${MONGO_DB}?authSource=admin`

module.exports.connect = function connect(callback) {
    MongoClient.connect(url, {
        useUnifiedTopology: true
    }, function (err, client) {
        try {
            module.exports.client = client.db(MONGO_DB);
        } catch {
            throw err
        }
        callback(err);
    });
};