const express = require('express');
const shp_router = express.Router();
const shpController = require('../Controller/shopController');
shp_router.get('/shpDetails', shpController.productDetailsShop);
shp_router.get('/sprod/:mid', shpController.ViewProductShop);
module.exports = shp_router;