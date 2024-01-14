const path = require('path');

const express = require('express');

const expenseController= require('../controllers/expense');
const { route } = require('./admin');

const router = express.Router();

router.get('/expense/getproducts',expenseController.getExpenseProducts);

router.post('/expense/addproduct',expenseController.addExpenseProducts);

router.delete('/expense/delete-product/:productId',expenseController.deleteExpenseProduct);

router.patch('/expense/edit-product/:productId',expenseController.editExpenseProduct);

module.exports=router;