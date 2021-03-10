const productController = require("../Controller/Product")

let router = require('express').Router();
router.get('/', function (req, res) {
    res.json({
        status: 'API Works',
        message: 'Welcome to FirstRest API'
    });
});

router.route('/products')
    .get(productController.index)
    .post(productController.add)

router.route('/product/:product_id')
    .get(productController.getOne)
    .patch(productController.update)
    .delete(productController.delete)
module.exports = router;