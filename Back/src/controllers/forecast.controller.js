const fetch = require('node-fetch');
const { API_URL_FORECAST } = require('../services/getApiData');

const getForecast = async (req, res, next) => {
  try {
    const location = req.location;
    const response = await fetch(
      `${API_URL_FORECAST}&q=${location}`
    );
    const daily = await response.json();

    res.json({
      msg: 'success',
      location,
      daily: daily.daily,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getForecast;
