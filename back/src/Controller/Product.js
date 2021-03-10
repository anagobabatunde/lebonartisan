const { ObjectID } = require("mongodb");
const db = require("../database")
var ObjectId = require('mongodb').ObjectId;

exports.index = function (req, res) {
    db.connect((err) => {
        if (err) throw err
        db.client.collection('Product').find().toArray().then(result => res.json({
            status: "success",
            message: "Got Product Successfully!",
            data: result
        })).catch(error => res.json({
            status: "error",
            message: err
        }))
    })
};
exports.add = function (req, res) {
    db.connect((err) => {
        let Product = {
            name: req.body.name,
            type: req.body.type,
            price: req.body.price,
            rating: req.body.rating,
            warranty_years: req.body.warranty_years,
            available: req.body.available
        };
        db.client.collection('Product').insertOne(Product).then(result => res.json({
            status: "success",
            message: "Add Product Successfully!",
            data: Product
        })).catch(error => res.json({
            status: "error",
            message: err
        }))
    })
};

exports.getOne = function (req, res) {
    db.connect((err) => {
        console.log(req.params)
        if (req.params.product_id.length >= 12)
            var objectIds = new ObjectId(req.params.product_id)
        db.client.collection('Product').findOne({ "_id": req.params.product_id.length > 10 ? objectIds : parseInt(req.params.product_id) }).then(result => res.json({
            status: "success",
            message: "Get Product Successfully!",
            data: result
        })).catch(error => res.json({
            status: "error",
            message: err
        }))
    })
};

exports.update = function (req, res) {
    db.connect((err) => {
        let Product = {
            name: req.body.name,
            type: req.body.type,
            price: req.body.price,
            rating: req.body.rating,
            warranty_years: req.body.warranty_years,
            available: req.body.available
        }
        console.log(req.params)
        if (req.params.product_id.length >= 12)
            var objectIds = new ObjectId(req.params.product_id)
        db.client.collection('Product').findOneAndUpdate(
            {
                "_id": req.params.product_id.length > 10 ?
                    objectIds : parseInt(req.params.product_id)
            }, {
            $set: Product,
        }, {
            upsert: true
        }).then(result => res.json({
            status: "success",
            message: "Update Product Successfully!",
            data: Product
        })).catch(error => res.json({
            status: "error",
            message: err
        }))
    })
};

exports.delete = function (req, res) {
    db.connect((err) => {
        console.log(req.params)
        if (req.params.product_id.length >= 12)
            var objectIds = new ObjectId(req.params.product_id)
        db.client.collection('Product').deleteOne({ "_id": req.params.product_id.length > 10 ? objectIds : parseInt(req.params.product_id) }).then(result => res.json({
            status: "success",
            message: "Delete Product Successfully!",
            data: result
        })).catch(error => res.json({
            status: "error",
            message: err
        }))
    })
};