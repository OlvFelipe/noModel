const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

router.get('/', ProductController.all);
router.post('/', ProductController.newProduct)
router.delete('/', ProductController.productDelete)
router.put('/', ProductController.productUpdate)


module.exports = router;