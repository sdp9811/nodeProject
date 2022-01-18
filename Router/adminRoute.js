const express = require('express');
const adm_router = express.Router();
const admnController = require('../Controller/adminController');
adm_router.get('/add_product', admnController.getFormDisplay);
adm_router.post('/postValue', admnController.postFormValue);
adm_router.get('/details', admnController.productDetails);

module.exports = adm_router;