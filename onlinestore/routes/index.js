var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');
var ctrlProduct = require('../controllers/product');

// UserProfile
router.get('/user/profile', auth, ctrlProfile.profileRead);
router.post('/user/products', auth, ctrlProduct.createProduct);
router.put('/user/products/:id', auth, ctrlProduct.updateProduct);
router.delete('/user/products/:id', auth, ctrlProduct.deleteProduct);
router.get('/user/products', auth, ctrlProduct.getProduct);


//public routes
router.get('/products', ctrlProduct.getAllProducts);
router.get('/product/:id', ctrlProduct.getProductById);
router.get('/products/:id', ctrlProduct.getProductByCategory);
// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;
