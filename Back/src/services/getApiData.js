const API_URL_FORECAST = `https://api.openweathermap.org/data/2.5/forecast?&appid=${process.env.API_KEY}`;
const API_URL_GEOCODING = `https://api.openweathermap.org/geo/1.0/direct?appid=${process.env.API_KEY}`;
const API_URL_CURRENT_WEATHER = `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.API_KEY}&units=metric&lang=es`;

module.exports = {
  API_URL_FORECAST,
  API_URL_GEOCODING,
  API_URL_CURRENT_WEATHER,
};
