const express = require('express');
const router = express.Router();

const currentLocation = require('../middlewares/currentLocation');

const controllerLocation = require('../controllers/location.controller');
const controllerCurrent = require('../controllers/current.controller');
const controllerForecast = require('../controllers/forecast.controller');

router.get('/location', currentLocation, controllerLocation);
router.get('/current/:city?', currentLocation, controllerCurrent);
router.get('/forecast/:city?', currentLocation, controllerForecast);

module.exports = router;
