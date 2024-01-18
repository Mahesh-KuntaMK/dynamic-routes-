const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

//const expenseController=require('../controllers/expense');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId',shopController.getProduct);

router.get('/cart', shopController.getCart);

router.post('/cart-delete-item',shopController.postCartDeleteProduct);

router.post('/create-order',shopController.postOrder);

router.get('/orders', shopController.getOrders);

router.post('/cart',shopController.postCart);

router.get('/checkout', shopController.getCheckout);

//router.get('/addUser',shopController.addUser);



module.exports = router;
