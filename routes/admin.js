const express = require('express');

const path = require('path');

const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/ADD-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/products => POST
router.post('/add-product', adminController.postAddProduct);


module.exports = router;