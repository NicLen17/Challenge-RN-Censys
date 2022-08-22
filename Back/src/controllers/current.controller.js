const fetch = require('node-fetch');
const { API_URL_CURRENT_WEATHER } = require('../services/getApiData');

const getCurrentWeather = async (req, res, next) => {
  try {
    const location = req.location;
    const responseWeather = await fetch(
      `${API_URL_CURRENT_WEATHER}&lon=${location.lon}&lat=${location.lat}`
    );
    const current = await responseWeather.json();

    res.json({
      msg: 'success',
      lat: location.lat,
      lon: location.lon,
      location,
      current,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getCurrentWeather;
