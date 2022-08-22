const fetch = require('node-fetch');
const { API_URL_GEOCODING } = require('../services/getApiData');

const currentLocation = async (req, res, next) => {
  const city = req.params.city;
  try {
    if (!city) {
      const response = await fetch('http://ip-api.com/json/');
      const location = await response.json();
      if (!location) {
        throw new Error('Ciudad No encontrada');
      }
      req.location = location;
    } else {
      const response = await fetch(`${API_URL_GEOCODING}&q=${city}`);
      const geolocation = await response.json();

      if (!geolocation || geolocation.length === 0) {
        throw new Error('Ciudad No encontrada');
      }
      req.location = geolocation[0]; 
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = currentLocation;
